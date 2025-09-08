"use client";

export default function ContactSection() {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // Optional: Add visual feedback here
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
      } catch {
        console.error("Failed to copy text");
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <section
      id="contact"
      className="w-full px-8 py-24 bg-background relative overflow-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Enhanced decorative elements with proper color variables */}
      <div className="absolute inset-0 opacity-3">
        <div
          className="absolute top-10 right-10 w-64 h-64 border-2 rounded-full animate-pulse"
          style={{ borderColor: "var(--primary)", animationDelay: "0s" }}
        ></div>
        <div
          className="absolute bottom-20 left-10 w-48 h-48 border-2 rounded-full animate-pulse"
          style={{ borderColor: "#fed7aa", animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full animate-pulse"
          style={{
            backgroundColor: "var(--primary)",
            opacity: 0.1,
            animationDelay: "2s",
          }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Let&apos;s Connect
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--foreground-muted)" }}
          >
            Ready to bring your ideas to life? I&apos;m always excited to
            collaborate on innovative projects and explore new opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Email Card */}
          <div className="group relative">
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(135deg, var(--primary), #fed7aa)",
                opacity: 0.05,
              }}
            ></div>
            <div
              className="relative rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl group-hover:scale-[1.02]"
              style={{
                backgroundColor: "var(--secondary)",
                borderColor: "var(--border)",
                boxShadow: "var(--shadow-primary, 0 0 0 1px var(--border))",
              }}
            >
              <div
                className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary), #fed7aa)",
                  color: "var(--secondary)",
                }}
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "var(--foreground)" }}
              >
                Email
              </h3>
              <p
                className="mb-4 text-sm leading-relaxed"
                style={{ color: "var(--foreground-muted)" }}
              >
                Drop me a line anytime
              </p>
              <button
                onClick={() =>
                  copyToClipboard("lompon.xerxeslancelaurenz@gmail.com")
                }
                className="font-medium text-sm transition-colors duration-200 hover:underline"
                style={{ color: "var(--primary)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "var(--primary-dark)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--primary)")
                }
              >
                lompon.xerxeslancelaurenz@gmail.com
              </button>
            </div>
          </div>

          {/* LinkedIn Card */}
          <a
            href="https://linkedin.com/in/xerxes-lompon"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block"
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(135deg, var(--primary), #fed7aa)",
                opacity: 0.05,
              }}
            ></div>
            <div
              className="relative rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl group-hover:scale-[1.02]"
              style={{
                backgroundColor: "var(--secondary)",
                borderColor: "var(--border)",
                boxShadow: "0 0 0 1px var(--border)",
              }}
            >
              <div
                className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary), #fed7aa)",
                  color: "var(--secondary)",
                }}
              >
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "var(--foreground)" }}
              >
                LinkedIn
              </h3>
              <p
                className="mb-4 text-sm leading-relaxed"
                style={{ color: "var(--foreground-muted)" }}
              >
                Let&apos;s build our network
              </p>
              <span
                className="font-medium text-sm transition-colors duration-200 inline-flex items-center"
                style={{ color: "#ea580c" }}
              >
                Connect with me
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </div>
          </a>

          {/* Phone Card */}
          <div className="group relative">
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(135deg, var(--primary), #fed7aa)",
                opacity: 0.05,
              }}
            ></div>
            <div
              className="relative rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl group-hover:scale-[1.02]"
              style={{
                backgroundColor: "var(--secondary)",
                borderColor: "var(--border)",
                boxShadow: "0 0 0 1px var(--border)",
              }}
            >
              <div
                className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary), #fed7aa)",
                  color: "var(--secondary)",
                }}
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "var(--foreground)" }}
              >
                Phone
              </h3>
              <p
                className="mb-4 text-sm leading-relaxed"
                style={{ color: "var(--foreground-muted)" }}
              >
                Quick conversations welcome
              </p>
              <button
                onClick={() => copyToClipboard("0956-6873-781")}
                className="font-medium text-sm transition-colors duration-200 hover:underline"
                style={{ color: "var(--primary)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "var(--primary-dark)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--primary)")
                }
              >
                0956-6873-781
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p
            className="text-lg mb-6"
            style={{ color: "var(--foreground-muted)" }}
          >
            Have a project in mind? Let&apos;s discuss how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:lompon.xerxeslancelaurenz@gmail.com"
              className="inline-flex items-center px-8 py-3 font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: "var(--gradient-primary)",
                color: "var(--secondary)",
                boxShadow: "0 0 0 0 rgba(249, 115, 22, 0.7)",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.boxShadow =
                  "0 0 0 4px rgba(249, 115, 22, 0.3)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.boxShadow =
                  "0 0 0 0 rgba(249, 115, 22, 0.7)";
              }}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              Send Message
            </a>
            <a
              href="https://linkedin.com/in/xerxes-lompon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 font-medium rounded-full border-2 transition-all duration-300 hover:scale-105"
              style={{
                borderColor: "var(--primary)",
                color: "var(--primary)",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor =
                  "var(--primary)";
                (e.target as HTMLElement).style.color = "var(--secondary)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "transparent";
                (e.target as HTMLElement).style.color = "var(--primary)";
              }}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              View Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
