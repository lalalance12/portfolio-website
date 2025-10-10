import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Providers } from "@/components/Providers";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/next"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xerxes Lompon | Full-Stack Developer | React, Next.js, AI/ML",
  description:
    "Full-stack engineer specializing in React, Next.js, Laravel, and AI/ML. Built healthcare systems, publication platforms, and ML models. Based in Philippines.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "AI/ML Engineer",
    "Philippines Developer",
    "Software Engineer",
    "Web Developer",
    "Xerxes Lompon",
  ],
  authors: [{ name: "Xerxes Lance Lompon" }],
  creator: "Xerxes Lance Lompon",
  publisher: "Xerxes Lance Lompon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xerxeslompon.com",
    siteName: "Xerxes Lompon Portfolio",
    title: "Xerxes Lompon - Full-Stack Developer",
    description:
      "Full-stack engineer with healthcare, ML, and cloud deployment experience. Building scalable systems with React, Next.js, Laravel, and AI/ML.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Xerxes Lompon - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xerxes Lompon - Full-Stack Developer",
    description:
      "Full-stack engineer | React, Next.js, Laravel, AI/ML | Building production systems",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Xerxes Lance Lompon",
              url: "https://xerxeslompon.com",
              jobTitle: "Full-Stack Developer",
              description:
                "Full-stack engineer specializing in React, Next.js, Laravel, and AI/ML",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cagayan de Oro",
                addressCountry: "Philippines",
              },
              sameAs: [
                "https://linkedin.com/in/xerxes-lompon",
                "https://github.com/lalalance12",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Laravel",
                "Python",
                "Django",
                "AI/ML",
                "PostgreSQL",
                "AWS",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <Analytics />
        <SpeedInsights />
        <ErrorBoundary>
          <Providers>
            <Header />
            <main className="min-h-[80vh]">{children}</main>
            <Footer />
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
