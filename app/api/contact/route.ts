import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactPayload {
  name: string;
  email: string;
  category: string;
  message: string;
}

const NOTIFY_EMAIL = "motomura-k@zeroclim.com";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

async function sendEmail(data: ContactPayload) {
  const categoryLabels: Record<string, string> = {
    "ai-video": "AI映像制作のご依頼",
    "ai-content": "AIコンテンツ・記事制作",
    evangelist: "エバンジェリストとしての登壇・講演依頼",
    "co-creation": "新規事業・共創のご相談",
    other: "その他",
  };

  const categoryText = categoryLabels[data.category] || data.category || "未選択";

  await getResend().emails.send({
    from: process.env.RESEND_FROM_EMAIL || "MOTOKEN <onboarding@resend.dev>",
    to: NOTIFY_EMAIL,
    replyTo: data.email,
    subject: `[お問い合わせ] ${categoryText} - ${data.name}`,
    text: [
      `名前: ${data.name}`,
      `メール: ${data.email}`,
      `種別: ${categoryText}`,
      ``,
      `メッセージ:`,
      data.message,
      ``,
      `---`,
      `送信日時: ${new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })}`,
    ].join("\n"),
  });
}

async function appendToGoogleSheets(data: ContactPayload) {
  const GOOGLE_SHEETS_WEBHOOK = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!GOOGLE_SHEETS_WEBHOOK) return;

  await fetch(GOOGLE_SHEETS_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      category: data.category,
      message: data.message,
    }),
  });
}

export async function POST(request: Request) {
  try {
    const data: ContactPayload = await request.json();

    if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
      return NextResponse.json(
        { error: "必須項目を入力してください。" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "有効なメールアドレスを入力してください。" },
        { status: 400 }
      );
    }

    // Send email and append to Google Sheets in parallel
    const results = await Promise.allSettled([
      sendEmail(data),
      appendToGoogleSheets(data),
    ]);

    // Log any failures (but don't fail the request if Sheets fails)
    const emailResult = results[0];
    if (emailResult.status === "rejected") {
      console.error("Email send failed:", emailResult.reason);
      return NextResponse.json(
        { error: "メール送信に失敗しました。もう一度お試しください。" },
        { status: 500 }
      );
    }

    const sheetsResult = results[1];
    if (sheetsResult.status === "rejected") {
      console.error("Google Sheets append failed:", sheetsResult.reason);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "サーバーエラーが発生しました。" },
      { status: 500 }
    );
  }
}
