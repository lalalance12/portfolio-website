"use client";

import { useEffect, useRef, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);

  const setMenu = (value: boolean) => {
    openRef.current = value;
    setOpen(value);
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

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
          const shouldHide =
            self.direction === 1 && self.scroll() > 160 && !openRef.current;
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
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-6 md:px-8">
        <Link
          href="/"
          onClick={() => setMenu(false)}
          className="font-display text-lg font-semibold tracking-tight transition-colors hover:text-accent"
        >
          {site.shortName}
        </Link>

        <div className="flex items-center gap-1 md:gap-8">
          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex items-center gap-8">
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
            </ul>
          </nav>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenu(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-8 items-center justify-center rounded-full text-ink transition-colors hover:bg-paper-raised focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
          >
            <span className="relative block h-3 w-4" aria-hidden>
              <span
                className={`absolute left-0 top-1/2 h-px w-full bg-current transition-transform duration-300 ${
                  open ? "rotate-45" : "-translate-y-[3.5px]"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-px w-full bg-current transition-transform duration-300 ${
                  open ? "-rotate-45" : "translate-y-[3.5px]"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        className={`overflow-hidden transition-[max-height,opacity,visibility] duration-300 ease-out md:hidden ${
          open ? "visible max-h-72 opacity-100" : "invisible max-h-0 opacity-0"
        }`}
      >
        <ul className="border-t border-hairline px-5 py-4 sm:px-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenu(false)}
                className="block py-2.5 text-eyebrow font-semibold uppercase text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenu(false)}
              className="inline-block rounded-full border border-hairline px-4 py-1.5 text-eyebrow font-semibold uppercase text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
