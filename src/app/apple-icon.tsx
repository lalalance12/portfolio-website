import { ImageResponse } from "next/og";

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
          backgroundImage:
            "linear-gradient(135deg, #ffb86b, #ff5c00 55%, #e63900)",
          color: "#ffffff",
          fontSize: 90,
          fontFamily: "Georgia, serif",
          fontWeight: 600,
          letterSpacing: "-0.02em",
        }}
      >
        XL
      </div>
    ),
    size
  );
}
