"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase" as const,
          color: "var(--accent)",
          marginBottom: "24px",
        }}
      >
        Error
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
        エラーが発生しました
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
        申し訳ございません。問題が発生しました。再度お試しください。
      </p>
      <button onClick={reset} className="btn btn-primary">
        もう一度試す
      </button>
    </div>
  );
}
