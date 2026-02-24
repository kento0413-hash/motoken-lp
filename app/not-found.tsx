import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        textAlign: "center",
        background: "var(--bg)",
      }}
    >
      <p
        style={{
          fontSize: "1rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          color: "var(--text)",
          marginBottom: "32px",
          opacity: 0.4,
        }}
      >
        MOTOKEN
      </p>
      <p
        style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase" as const,
          color: "var(--accent)",
          marginBottom: "24px",
        }}
      >
        404
      </p>
      <h1
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          marginBottom: "16px",
        }}
      >
        ページが見つかりません
      </h1>
      <p
        style={{
          fontSize: "1rem",
          color: "var(--text-secondary)",
          lineHeight: 1.8,
          marginBottom: "40px",
          maxWidth: "480px",
        }}
      >
        お探しのページは存在しないか、移動された可能性があります。
      </p>
      <Link href="/" className="btn btn-primary">
        トップページへ戻る
      </Link>
    </div>
  );
}
