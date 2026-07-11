"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Terminal from "@/components/Terminal";
import { site } from "@/data/site";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const exitRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Load-in: staggered line masks, then supporting copy
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero-line]", {
        yPercent: 110,
        duration: 0.9,
        stagger: 0.12,
        delay: 0.15,
      })
        .from(
          "[data-hero-fade]",
          { y: 16, opacity: 0, duration: 0.7, stagger: 0.12 },
          "-=0.45"
        )
        .from(
          "[data-hero-panel]",
          { y: 48, opacity: 0, rotate: 1.5, duration: 0.9 },
          "-=0.6"
        );

      // Pinned exit animates ONLY the wrapper — never the same nodes as the
      // load timeline, so reversing back to the top always restores them.
      // Pinning is desktop-only: on phones/tablets the hero can be taller
      // than the viewport, and pinning there feels stuck.
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap.to(exitRef.current, {
          yPercent: -16,
          opacity: 0,
          ease: "power1.in",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=65%",
            pin: true,
            scrub: 0.5,
          },
        });
      });
      mm.add("(max-width: 1023px)", () => {
        gsap.to(exitRef.current, {
          opacity: 0,
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom 35%",
            scrub: true,
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="top"
      className="flex min-h-[85svh] items-center py-12"
    >
      <div
        ref={exitRef}
        className="grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-10"
      >
        <div className="lg:col-span-7">
          <p
            data-hero-fade
            className="mb-8 flex items-center gap-3 text-eyebrow font-medium uppercase text-muted"
          >
            <span className="relative flex size-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-base opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent-base" />
            </span>
            {site.hero.eyebrow}
          </p>

          <h1 className="font-display text-display font-medium">
            {site.hero.headline.map((text, i) => (
              <span key={text} className="block overflow-hidden">
                <span
                  data-hero-line
                  className={`block ${
                    i === site.hero.headline.length - 1
                      ? "text-fire italic"
                      : ""
                  }`}
                >
                  {text}
                </span>
              </span>
            ))}
          </h1>

          <p
            data-hero-fade
            className="mt-10 max-w-xl text-lg leading-relaxed text-muted"
          >
            {site.hero.intro}
          </p>

          <div data-hero-fade className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="bg-fire glow-fire rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.03] hover:brightness-105"
            >
              View work ↓
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink/25 px-7 py-3.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch →
            </a>
          </div>
        </div>

        <div data-hero-panel className="relative lg:col-span-5">
          {/* Atmospheric glow wash behind the terminal */}
          <div
            aria-hidden
            className="bg-fire pointer-events-none absolute -inset-10 -z-10 rounded-full opacity-20 blur-3xl dark:opacity-25"
          />
          <Terminal />
        </div>
      </div>
    </section>
  );
}
