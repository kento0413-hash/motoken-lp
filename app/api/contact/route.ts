import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  category: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const data: ContactPayload = await request.json();

    // Basic server-side validation
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

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'noreply@motoken.studio',
    //   to: 'contact@motoken.studio',
    //   subject: `[お問い合わせ] ${data.category} - ${data.name}`,
    //   text: `名前: ${data.name}\nメール: ${data.email}\n種別: ${data.category}\n\n${data.message}`,
    // });

    console.log("Contact form submission:", {
      name: data.name,
      email: data.email,
      category: data.category,
      message: data.message.substring(0, 100) + "...",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "サーバーエラーが発生しました。" },
      { status: 500 }
    );
  }
}
