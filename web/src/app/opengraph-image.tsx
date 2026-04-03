import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Naturalist Nurturer - Know Your Neighbors";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          background: "linear-gradient(135deg, #faf8f5 0%, #e8f5e9 50%, #c8e6c9 100%)",
          fontFamily: "Arial, Helvetica, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative leaf circles */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(22, 101, 52, 0.08)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "rgba(22, 101, 52, 0.06)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 100,
            left: -40,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(22, 101, 52, 0.04)",
            display: "flex",
          }}
        />

        {/* Leaf emoji */}
        <div style={{ fontSize: 80, marginBottom: 16, display: "flex" }}>
          🌿
        </div>

        {/* App name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#1c1917",
            lineHeight: 1.1,
            display: "flex",
          }}
        >
          Naturalist Nurturer
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#166534",
            marginTop: 16,
            fontWeight: 600,
            display: "flex",
          }}
        >
          Know Your Neighbors. Learn the Species Where You Are.
        </div>

        {/* Feature pills */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 40,
          }}
        >
          {["🌳 Trees", "🌱 Plants", "🐦 Birds"].map((label) => (
            <div
              key={label}
              style={{
                background: "rgba(22, 101, 52, 0.12)",
                color: "#166534",
                padding: "10px 24px",
                borderRadius: 50,
                fontSize: 22,
                fontWeight: 600,
                display: "flex",
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 30,
            fontSize: 20,
            color: "#78716c",
            display: "flex",
          }}
        >
          natnurturer.org
        </div>
      </div>
    ),
    { ...size }
  );
}
