"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { techIcons } from "@/components/techIcons";

const RINGS: { radius: number; duration: number; reverse?: boolean; items: string[] }[] = [
  {
    radius: 62,
    duration: 26,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    radius: 108,
    duration: 40,
    reverse: true,
    items: ["Laravel", "Django", "Python", "Node.js", "Supabase"],
  },
  {
    radius: 154,
    duration: 58,
    items: ["PostgreSQL", "MySQL", "MongoDB", "TensorFlow", "Git", "AWS (EC2, S3, Route 53)"],
  },
];

// Concentric orbiting tech logos: each ring spins continuously (alternating
// directions); every chip counter-rotates so the logos stay upright.
export default function OrbitTech() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      RINGS.forEach((ring, i) => {
        const dir = ring.reverse ? -360 : 360;
        gsap.to(`[data-ring="${i}"]`, {
          rotation: dir,
          duration: ring.duration,
          ease: "none",
          repeat: -1,
        });
        gsap.to(`[data-ring="${i}"] [data-chip]`, {
          rotation: -dir,
          duration: ring.duration,
          ease: "none",
          repeat: -1,
        });
      });
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      aria-hidden
      className="relative mx-auto flex size-80 max-w-full items-center justify-center sm:size-[22rem]"
    >
      {/* Glow behind the system */}
      <div className="bg-fire absolute inset-8 rounded-full opacity-15 blur-3xl" />

      {/* Center monogram */}
      <div className="bg-fire glow-fire absolute z-10 flex size-16 items-center justify-center rounded-full font-display text-xl font-semibold text-white">
        XL
      </div>

      {RINGS.map((ring, i) => (
        <div key={ring.radius}>
          {/* Static dashed orbit path */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-hairline"
            style={{ width: ring.radius * 2, height: ring.radius * 2 }}
          />
          {/* Rotating carrier */}
          <div
            data-ring={i}
            className="absolute left-1/2 top-1/2 size-0 will-change-transform"
          >
            {ring.items.map((name, j) => {
              const tech = techIcons[name];
              if (!tech) return null;
              const angle = (360 / ring.items.length) * j;
              return (
                <div
                  key={name}
                  className="absolute"
                  style={{
                    transform: `rotate(${angle}deg) translateX(${ring.radius}px) rotate(${-angle}deg)`,
                  }}
                >
                  <div
                    data-chip
                    title={name}
                    className="-ml-5 -mt-5 flex size-10 items-center justify-center rounded-full border border-hairline bg-paper-raised shadow-md will-change-transform"
                  >
                    <tech.Icon size={18} color={tech.color} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
