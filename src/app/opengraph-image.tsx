import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Xerxes Lompon - Software Engineer Portfolio";
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FAFAFA",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(249, 115, 22, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(13, 148, 136, 0.1) 0%, transparent 50%)",
        }}
      >
        {/* Main Content Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px",
          }}
        >
          {/* Profile Circle */}
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "30px",
              boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
            }}
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: "#1A1A1A",
              marginBottom: "10px",
              letterSpacing: "-0.02em",
            }}
          >
            Xerxes Lance Lompon
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "32px",
              fontWeight: 600,
              background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: "20px",
            }}
          >
            Software Engineer | Full-Stack Developer
          </div>

          {/* Tech Stack */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "10px",
            }}
          >
            {["React", "Next.js", "TypeScript", "Laravel", "AWS"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "rgba(249, 115, 22, 0.1)",
                    borderRadius: "20px",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#f97316",
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>

          {/* Website URL */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              fontSize: "20px",
              color: "#666666",
            }}
          >
            xerxeslompon.com
          </div>
        </div>

        {/* Decorative Elements */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "40px",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            border: "3px solid rgba(249, 115, 22, 0.2)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "60px",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            border: "3px solid rgba(13, 148, 136, 0.2)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
