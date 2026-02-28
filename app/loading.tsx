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
        background: "var(--bg, #0F1A17)",
      }}
    >
      <div
        style={{
          fontSize: "1.1rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          color: "var(--text, #E8E2D8)",
          animation: "brandPulse 2s ease-in-out infinite",
        }}
      >
        MOTOKEN
      </div>
      <div
        style={{
          width: "40px",
          height: "2px",
          borderRadius: "1px",
          background: "var(--accent, #E05A6D)",
          animation: "loadBar 1.2s ease-in-out infinite",
          transformOrigin: "center",
        }}
      />
      <style>{`
        @keyframes brandPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @keyframes loadBar {
          0%, 100% { transform: scaleX(0.3); opacity: 0.4; }
          50% { transform: scaleX(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
