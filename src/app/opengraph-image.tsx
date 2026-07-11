import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.shortName} — ${site.role}`;
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
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          color: "#111111",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: "22px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#575757",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundImage: "linear-gradient(135deg, #ffb86b, #ff5c00 55%, #e63900)",
            }}
          />
          Software Engineer — Cagayan de Oro, PH
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "104px",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Xerxes Lompon
          </div>
          <div
            style={{
              marginTop: "36px",
              height: "3px",
              width: "100%",
              backgroundImage: "linear-gradient(90deg, #ffb86b, #ff5c00 55%, #e63900)",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "28px",
              fontSize: "26px",
              color: "#575757",
            }}
          >
            <div>Full-stack web & AI products</div>
            <div>xerxeslompon.com</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
