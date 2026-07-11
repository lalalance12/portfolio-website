"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Vertical offset the content rises from */
  y?: number;
  /** Horizontal offset the content slides from */
  x?: number;
  /** CSS selector for children to stagger (e.g. "[data-reveal]") */
  selector?: string;
  stagger?: number;
  /** Scrub-in: block scales/rises tied to scroll position instead of one-shot */
  grow?: boolean;
};

// Content is visible in the SSR HTML; GSAP hides and animates it only after
// hydration, so the page never renders empty (and replays on every re-entry).
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
  x = 0,
  selector,
  stagger = 0.08,
  grow = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      if (grow) {
        gsap.fromTo(
          root,
          { scale: 0.94, y: 64, opacity: 0.3, transformOrigin: "center bottom" },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top 95%",
              end: "top 45%",
              scrub: 0.4,
            },
          }
        );
      }

      const targets = selector ? root.querySelectorAll(selector) : root;
      if (grow && !selector) return;
      gsap.from(targets, {
        opacity: 0,
        y: grow ? 16 : y,
        x,
        duration: 0.9,
        delay,
        ease: "power3.out",
        stagger: selector ? stagger : 0,
        scrollTrigger: {
          trigger: root,
          start: "top 92%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
