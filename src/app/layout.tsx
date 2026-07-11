import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothAnchors from "@/components/SmoothAnchors";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/data/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Xerxes Lompon | Software Engineer",
  description:
    "Full-stack engineer specializing in React, Next.js, Laravel, and AI/ML. Built healthcare systems, publication platforms, and ML models. Based in Philippines.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "AI/ML Engineer",
    "Philippines Developer",
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
    title: "Xerxes Lompon - Software Engineer/Developer",
    description:
      "Software engineer with healthcare, ML, and cloud deployment experience. Building scalable systems with React, Next.js, Laravel, and AI/ML.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xerxes Lompon - Full-Stack Developer",
    description:
      "Full-stack engineer | React, Next.js, Laravel, AI/ML | Building production systems",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: site.name,
              url: site.url,
              email: site.email,
              jobTitle: site.role,
              description:
                "Software engineer specializing in React, Next.js, Laravel, and AI/ML",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cagayan de Oro City",
                addressCountry: "Philippines",
              },
              sameAs: [site.socials.linkedin, site.socials.github],
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
        className={`${fraunces.variable} ${inter.variable} antialiased bg-paper text-ink`}
      >
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent-base focus:text-white focus:rounded-lg focus:font-medium focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <Analytics />
        <SpeedInsights />
        <ErrorBoundary>
          <ThemeProvider>
            <SmoothAnchors />
            <ScrollProgress />
            <Header />
            <main id="main-content" className="min-h-[80vh]" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
