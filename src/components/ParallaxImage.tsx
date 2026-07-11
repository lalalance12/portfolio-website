"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type ParallaxImageProps = {
  children: React.ReactNode;
  className?: string;
  /** How far the inner image travels, in percent of its height */
  strength?: number;
};

// Wrap an <Image> (rendered slightly oversized) so it drifts inside its
// clipped frame as the page scrolls.
export default function ParallaxImage({
  children,
  className,
  strength = 10,
}: ParallaxImageProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        innerRef.current,
        { yPercent: -strength },
        {
          yPercent: strength,
          ease: "none",
          scrollTrigger: {
            trigger: frameRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope: frameRef }
  );

  return (
    <div ref={frameRef} className={`overflow-hidden ${className ?? ""}`}>
      <div ref={innerRef} className="scale-[1.15] will-change-transform">
        {children}
      </div>
    </div>
  );
}
