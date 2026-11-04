import { ImageResponse } from "next/og";

// Home-screen icon for iPhone/iPad (PNG, generated at build time).
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#211551",
          color: "#fff",
          fontSize: 84,
          fontWeight: 800,
          letterSpacing: -2,
        }}
      >
        SB
      </div>
    ),
    size
  );
}
