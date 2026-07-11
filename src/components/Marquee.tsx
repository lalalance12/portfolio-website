"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

type MarqueeProps = {
  children: string;
  /** Direction the band travels */
  direction?: "left" | "right";
};

// Seamless infinite marquee: two identical copies of the phrase run in a
// track animated by half its width. Scroll velocity surges the timeScale
// (scrolling up pushes it backwards), then it eases back to a slow drift.
export default function Marquee({ children, direction = "left" }: MarqueeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      const tween =
        direction === "left"
          ? gsap.to(track, { xPercent: -50, duration: 40, ease: "none", repeat: -1 })
          : gsap.fromTo(
              track,
              { xPercent: -50 },
              { xPercent: 0, duration: 40, ease: "none", repeat: -1 }
            );

      ScrollTrigger.create({
        onUpdate: (self) => {
          const velocity = gsap.utils.clamp(-2400, 2400, self.getVelocity());
          tween.timeScale(1 + velocity / 300);
          gsap.to(tween, {
            timeScale: 1,
            duration: 1.2,
            ease: "power2.out",
            overwrite: true,
          });
        },
      });
    },
    { scope: ref }
  );

  const copies = Array.from({ length: 4 }, (_, i) => i);

  return (
    <div ref={ref} aria-hidden className="select-none overflow-hidden py-8 sm:py-14">
      <div
        ref={trackRef}
        className="flex w-max whitespace-nowrap font-display text-[10vw] font-semibold uppercase leading-none tracking-tight will-change-transform sm:text-[7vw]"
      >
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0">
            {copies.map((i) => (
              <span
                key={i}
                className={`pr-8 ${i % 2 ? "text-outline-ink" : "text-ink"}`}
              >
                {children}
                <span className="px-8 text-muted [-webkit-text-stroke:0]">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
