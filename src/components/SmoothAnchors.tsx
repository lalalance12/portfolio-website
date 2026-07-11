"use client";

import { useEffect } from "react";
import { gsap } from "@/lib/gsap";

// Native hash jumps land in the wrong place once ScrollTrigger pin-spacers
// are in the layout (and skip scrubbed states entirely, leaving sections
// looking blank). Intercept same-page anchor clicks and animate the scroll
// instead so every trigger along the way fires correctly.
export default function SmoothAnchors() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest?.("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      let hash = "";
      if (href.startsWith("#")) hash = href;
      else if (href.startsWith("/#") && window.location.pathname === "/")
        hash = href.slice(1);
      if (!hash) return;

      const id = hash.slice(1);
      const target = id === "top" ? 0 : document.getElementById(id);
      if (target !== 0 && !target) return;

      e.preventDefault();
      // offsetY 0: the section's own top padding provides the gap below
      // the sticky header, so the heading lands right near the top.
      gsap.to(window, {
        scrollTo: target === 0 ? 0 : { y: target, offsetY: 0 },
        duration: 0.9,
        ease: "power2.inOut",
        overwrite: true,
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
