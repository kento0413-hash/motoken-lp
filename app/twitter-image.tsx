import { ImageResponse } from "next/og";

export const alt = "MOTOKEN | AI Artist";

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
          background: "linear-gradient(135deg, #FAF9F6 0%, #F5EDE3 50%, #F0E4D6 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-40px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(196, 85, 58, 0.12), transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-40px",
            left: "-40px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212, 146, 42, 0.1), transparent 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#1A1A2E",
            }}
          >
            MOTOKEN
          </div>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: "#1A1A2E",
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            Where AI Meets
          </div>
          <div
            style={{
              fontSize: "60px",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#C4553A",
              fontFamily: "Georgia, serif",
            }}
          >
            Human Emotion
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#5A5A72",
              marginTop: "16px",
            }}
          >
            冷たい画面の向こう側に、熱狂のステージを創る。
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, #C4553A, #D4922A, #7A8F6E)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
