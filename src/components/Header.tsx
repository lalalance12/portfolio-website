"use client";

import { useRef } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { site } from "@/data/site";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const ref = useRef<HTMLElement>(null);

  // Slides away when scrolling down, returns the moment you scroll up.
  useGSAP(
    () => {
      const header = ref.current;
      if (!header) return;
      let hidden = false;
      ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          const shouldHide = self.direction === 1 && self.scroll() > 160;
          if (shouldHide !== hidden) {
            hidden = shouldHide;
            gsap.to(header, {
              yPercent: shouldHide ? -100 : 0,
              duration: 0.35,
              ease: "power2.out",
              overwrite: true,
            });
          }
        },
      });
    },
    { scope: ref }
  );

  return (
    <header
      ref={ref}
      className="sticky top-0 z-50 border-b border-hairline bg-paper/85 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:px-8">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight transition-colors hover:text-accent"
        >
          <span className="hidden sm:inline">{site.shortName}</span>
          <span className="sm:hidden">{site.initials}</span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-5 md:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-eyebrow font-semibold uppercase text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-hairline px-4 py-1.5 text-eyebrow font-semibold uppercase text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Resume
              </a>
            </li>
            <li className="flex items-center">
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
