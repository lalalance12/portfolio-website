"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const LINES = [
  { cmd: "whoami", out: "xerxes lompon — software engineer" },
  { cmd: "location", out: "cagayan de oro, philippines" },
  { cmd: "stack --list", out: "next.js · react · laravel · python · aws" },
  { cmd: "current", out: "building full-stack & AI products" },
  { cmd: "status", out: "open to opportunities ✦" },
];

// Full text ships in the SSR HTML (SEO / no-JS); GSAP clears it after
// hydration and types it back character by character.
export default function Terminal() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const spans = gsap.utils.toArray<HTMLElement>("[data-type]");
      const tl = gsap.timeline({ delay: 1 });

      spans.forEach((el) => {
        const full = el.textContent ?? "";
        el.textContent = "";
        const proxy = { n: 0 };
        tl.to(
          proxy,
          {
            n: full.length,
            duration: Math.max(0.25, full.length * 0.03),
            ease: "none",
            onUpdate: () => {
              el.textContent = full.slice(0, Math.round(proxy.n));
            },
          },
          "+=0.2"
        );
      });

      tl.from("[data-cursor]", { opacity: 0, duration: 0.1 });

      // Gentle idle float
      gsap.to(ref.current, {
        y: -10,
        duration: 3.2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-hairline bg-charcoal-deep text-on-charcoal shadow-2xl shadow-charcoal-deep/20"
    >
      <div className="flex items-center gap-1.5 border-b border-on-charcoal/10 px-4 py-3">
        <span className="size-2.5 rounded-full bg-accent-base" aria-hidden />
        <span className="size-2.5 rounded-full bg-accent-base/50" aria-hidden />
        <span className="size-2.5 rounded-full bg-on-charcoal/25" aria-hidden />
        <span className="ml-3 font-mono text-xs text-on-charcoal/50">
          xerxes@portfolio ~
        </span>
      </div>
      <div className="space-y-1.5 p-5 font-mono text-[13px] leading-relaxed">
        {LINES.map(({ cmd, out }) => (
          <div key={cmd}>
            <p className="min-h-5">
              <span className="text-accent-base">$ </span>
              <span data-type>{cmd}</span>
            </p>
            <p className="min-h-5 text-on-charcoal/70">
              <span data-type>{`> ${out}`}</span>
            </p>
          </div>
        ))}
        <p aria-hidden>
          <span className="text-accent-base">$ </span>
          <span
            data-cursor
            className="animate-blink inline-block h-4 w-2 translate-y-0.5 bg-accent-base"
          />
        </p>
      </div>
    </div>
  );
}
