import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 256,
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
