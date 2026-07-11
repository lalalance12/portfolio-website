"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type SectionHeadingProps = {
  index: string;
  label: string;
};

export default function SectionHeading({ index, label }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });
      tl.from("[data-index]", {
        x: -24,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          "[data-label]",
          { y: 12, opacity: 0, duration: 0.6, ease: "power3.out" },
          "-=0.35"
        )
        .from(
          "[data-rule]",
          { scaleX: 0, duration: 1, ease: "power3.inOut" },
          "-=0.4"
        );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="mb-14 flex items-baseline gap-4 md:mb-20">
      <span
        data-index
        className="text-eyebrow font-medium uppercase text-accent"
      >
        {index}
      </span>
      <h2
        data-label
        className="text-eyebrow font-medium uppercase tracking-widest text-muted"
      >
        {label}
      </h2>
      <span
        data-rule
        className="h-px flex-1 origin-left self-center bg-hairline"
        aria-hidden
      />
    </div>
  );
}
