export default function Loading() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        background: "var(--bg, #FAF9F6)",
      }}
    >
      <div
        style={{
          fontSize: "1.1rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          color: "var(--text, #1A1A2E)",
          opacity: 0.6,
        }}
      >
        MOTOKEN
      </div>
      <div
        style={{
          width: "28px",
          height: "28px",
          border: "2px solid rgba(26, 26, 46, 0.08)",
          borderTopColor: "var(--accent, #C4553A)",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
