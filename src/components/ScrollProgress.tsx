"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(barRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        start: 0,
        end: "max",
        scrub: 0.3,
      },
    });
  });

  return (
    <div
      ref={barRef}
      aria-hidden
      className="bg-fire fixed inset-x-0 top-0 z-[60] h-[3px] origin-left scale-x-0"
    />
  );
}
