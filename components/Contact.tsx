"use client";

import { useState, useCallback } from "react";
import RevealUp from "./RevealUp";
import styles from "./Contact.module.css";

const socialLinks = [
  {
    href: "https://x.com/naturemotoken",
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/motoken_japanese_nature/",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@naturemotoken",
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/@naturemotoken",
    label: "TikTok",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.16z" />
      </svg>
    ),
  },
  {
    href: "https://note.com/naturemotoken",
    label: "note",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
        <path d="M15.905 4.004c.817-.013 1.64.002 2.462.02a.448.448 0 0 1 .451.45v2.28a.447.447 0 0 1-.452.448c-.842.013-1.684.02-2.526-.007a.928.928 0 0 1-.898-.932c-.016-.72-.008-1.44-.004-2.16a.112.112 0 0 1 .116-.1h.85zm-5.677 7.764c1.793 0 3.248 1.455 3.248 3.248a3.248 3.248 0 1 1-6.496 0 3.248 3.248 0 0 1 3.248-3.248zM22.358 9.14a1.622 1.622 0 0 1 1.622 1.622v11.056A2.182 2.182 0 0 1 21.798 24H2.182A2.182 2.182 0 0 1 0 21.818V10.762A1.622 1.622 0 0 1 1.622 9.14h3.076a1.622 1.622 0 0 0 1.49-.977l.663-1.526A1.622 1.622 0 0 1 8.34 5.66h5.692c.149 0 .266.121.266.27v2.026c0 1.66 1.263 3.072 2.921 3.155a35.1 35.1 0 0 0 2.98-.006c.104-.004.162.053.162.157v.454c0 .149-.121.27-.27.27h-2.826a1.622 1.622 0 0 0-1.622 1.622v.454c0 .149.121.27.27.27h4.063c.149 0 .27-.121.27-.27v-.454a1.622 1.622 0 0 1 1.14-1.548 1.614 1.614 0 0 1 .483-.074h.79zm-12.13 1.336a4.54 4.54 0 1 1 0 9.08 4.54 4.54 0 0 1 0-9.08z" />
      </svg>
    ),
  },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      category: formData.get("category") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("送信に失敗しました。もう一度お試しください。");

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "送信に失敗しました。"
      );
    }
  }, []);

  return (
    <section className={styles.contact} id="contact" aria-label="お問い合わせ">
      <div className={styles.container}>
        <div className={styles.contactInner}>
          <RevealUp className={styles.sectionLabel}>Contact</RevealUp>
          <RevealUp>
            <h2 className={styles.contactTitle}>
              共に、<em>熱狂の舞台</em>を
              <br />
              創りませんか。
            </h2>
          </RevealUp>
          <RevealUp delay={0.05}>
            <p className={styles.contactDescription}>
              &ldquo;まだ何も決まっていない&rdquo;で構いません。
              <br />
              ぼんやりとしたアイデアの段階から、一緒に形にしていくのが
              <br />
              MOTOKENの仕事です。まずは気軽に、ひとことだけでも聞かせてください。
            </p>
          </RevealUp>
          <RevealUp delay={0.1}>
            <div className={styles.contactLinks}>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={`${link.label}（新しいタブで開く）`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </RevealUp>

          {status === "success" ? (
            <RevealUp delay={0.15}>
              <div className={styles.formSuccess}>
                <div className={styles.formSuccessIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <p className={styles.formSuccessTitle}>送信完了</p>
                <p className={styles.formSuccessText}>
                  お問い合わせありがとうございます。<br />
                  内容を確認の上、折り返しご連絡いたします。
                </p>
                <button
                  type="button"
                  className={styles.formResetBtn}
                  onClick={() => setStatus("idle")}
                >
                  新しいメッセージを送る
                </button>
              </div>
            </RevealUp>
          ) : (
            <RevealUp delay={0.15}>
              <p className={styles.formStepper}>
                Step 1 of 2 — まずはお話を聞かせてください
              </p>
              <form
                className={styles.contactForm}
                onSubmit={handleSubmit}
                noValidate
              >
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-name" className={styles.formLabel}>
                      お名前 <span className={styles.formRequired}>*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      className={styles.formField}
                      placeholder="山田 太郎"
                      autoComplete="name"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-email" className={styles.formLabel}>
                      メールアドレス <span className={styles.formRequired}>*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      className={styles.formField}
                      placeholder="your@email.com"
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-category" className={styles.formLabel}>
                    ご相談種別
                  </label>
                  <div className={styles.selectWrap}>
                    <select
                      id="contact-category"
                      name="category"
                      className={styles.formField}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        選択してください
                      </option>
                      <option value="ai-video">AI映像制作のご依頼</option>
                      <option value="ai-content">AIコンテンツ・記事制作</option>
                      <option value="evangelist">
                        エバンジェリストとしての登壇・講演依頼
                      </option>
                      <option value="co-creation">
                        新規事業・共創のご相談
                      </option>
                      <option value="other">その他</option>
                    </select>
                    <svg
                      className={styles.selectArrow}
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      width="16"
                      height="16"
                      aria-hidden="true"
                    >
                      <path d="M6 8l4 4 4-4" />
                    </svg>
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-message" className={styles.formLabel}>
                    メッセージ <span className={styles.formRequired}>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    className={`${styles.formField} ${styles.formTextarea}`}
                    placeholder="ご相談内容をお聞かせください"
                  />
                </div>

                {status === "error" && (
                  <p className={styles.formError} role="alert">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  className={styles.formSubmit}
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <>
                      <span className={styles.submitSpinner} aria-hidden="true" />
                      送信中…
                    </>
                  ) : (
                    "最初の一歩を踏み出す"
                  )}
                </button>
                <p className={styles.formHint}>
                  通常24時間以内にお返事いたします。営業連絡は一切しません。
                </p>
              </form>
            </RevealUp>
          )}
        </div>
      </div>
    </section>
  );
}
