import { ImageResponse } from "next/og";

export const alt =
  "MOTOKEN | 誰もが主役になる\u201C最高のショー\u201Dを。";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #0A1A14 0%, #0F2620 40%, #132E26 100%)",
          position: "relative",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-60px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(91,138,114,0.2), transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-60px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(212,146,42,0.12), transparent 70%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            position: "relative",
            padding: "0 60px",
          }}
        >
          <div
            style={{
              fontSize: "22px",
              fontWeight: 700,
              letterSpacing: "0.25em",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            MOTOKEN
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.05em",
            }}
          >
            AI × 感性の共鳴——
          </div>
          <div
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.3,
              textAlign: "center",
              maxWidth: "900px",
            }}
          >
            誰もが主役になる
          </div>
          <div
            style={{
              fontSize: "52px",
              fontWeight: 700,
              color: "#5B8A72",
              fontStyle: "italic",
              fontFamily: "Georgia, serif",
            }}
          >
            &ldquo;最高のショー&rdquo;を。
          </div>
          <div
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.55)",
              marginTop: "12px",
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            元お笑い芸人。Disney Worldのキャスト。上場企業でAI事業12年。
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, #5B8A72, #D4922A, #5B8A72)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
