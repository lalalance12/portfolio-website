"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

// Numbers count up from 0 when the row scrolls into view.
export default function Stats({ stats }: { stats: ReadonlyArray<Stat> }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        const proxy = { n: 0 };
        gsap.to(proxy, {
          n: target,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = String(Math.round(proxy.n));
          },
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      className="mt-20 grid gap-8 rounded-3xl border border-hairline bg-paper-raised p-8 sm:grid-cols-3 sm:p-10"
    >
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-fire font-display text-headline font-semibold">
            {stat.prefix}
            <span data-count={stat.value}>{stat.value}</span>
            {stat.suffix}
          </p>
          <p className="mt-2 text-sm leading-snug text-muted">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
