"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ParallaxImage from "@/components/ParallaxImage";
import { gsap, useGSAP } from "@/lib/gsap";
import { featuredProjects } from "@/data/projects";

// Sticky card stack: each card pins near the top while the next one scrolls
// up and covers it; the covered card scales down and dims (scrubbed).
export default function FeaturedStack() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-card]");

      cards.forEach((card, i) => {
        // Cover image wipes open when the card arrives
        const cover = card.querySelector("[data-cover]");
        if (cover) {
          gsap.from(cover, {
            clipPath: "inset(0 100% 0 0)",
            duration: 1.1,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          });
        }

        // Text column slides in
        const text = card.querySelector("[data-card-text]");
        if (text) {
          gsap.from(text, {
            x: i % 2 === 1 ? 56 : -56,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          });
        }

        // When the NEXT card scrolls in, this one recedes and fades out
        // completely so it never shows behind the card covering it.
        const next = cards[i + 1];
        if (next) {
          gsap.to(card, {
            scale: 0.92,
            autoAlpha: 0,
            transformOrigin: "center top",
            ease: "none",
            scrollTrigger: {
              trigger: next,
              // Starts receding only once the next card is well on screen,
              // but still fully faded before the two cards overlap.
              start: "top 80%",
              end: "top 30%",
              scrub: true,
            },
          });
        }
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref}>
      {featuredProjects.map((project, i) => (
        <div
          key={project.slug}
          data-card
          className="hover:glow-fire group sticky mb-10 rounded-3xl border border-hairline bg-paper-raised p-6 transition-shadow duration-500 will-change-transform sm:p-10 md:p-12"
          style={{ top: "13vh", zIndex: i + 1 }}
        >
          <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div
              data-card-text
              className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}
            >
              <p className="text-fire mb-4 font-display text-headline font-medium">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-headline font-medium">
                <Link
                  href={`/projects/${project.slug}`}
                  className="underline-offset-8 transition-colors group-hover:underline group-hover:decoration-accent-base"
                >
                  {project.title}
                </Link>
              </h3>
              <p className="mt-3 text-sm uppercase tracking-wider text-muted">
                {project.discipline} — {project.year}
                {project.highlight && (
                  <span className="text-accent"> — {project.highlight}</span>
                )}
              </p>
              <p className="mt-5 leading-relaxed text-muted">
                {project.oneLiner}
              </p>
              <p className="mt-6">
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-sm font-medium transition-colors hover:text-accent"
                >
                  View project{" "}
                  <span
                    aria-hidden
                    className="inline-block transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
              </p>
            </div>

            <Link
              href={`/projects/${project.slug}`}
              tabIndex={-1}
              aria-hidden
              data-cover
              className={`block lg:col-span-7 ${
                i % 2 === 1 ? "lg:order-1" : ""
              }`}
            >
              {project.cover ? (
                <ParallaxImage className="rounded-2xl border border-hairline bg-surface">
                  <Image
                    src={project.cover.src}
                    alt={project.cover.caption}
                    width={1280}
                    height={800}
                    className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 560px, 100vw"
                  />
                </ParallaxImage>
              ) : (
                // Empty state for projects without screenshots: a typographic
                // panel with the project's ghost initial and discipline.
                <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-2xl border border-hairline bg-surface">
                  <span
                    aria-hidden
                    className="pointer-events-none select-none font-display text-[14rem] font-medium italic leading-none text-accent-base/15 transition-transform duration-500 group-hover:scale-105"
                  >
                    {project.title.charAt(0)}
                  </span>
                  <span className="absolute bottom-5 left-6 text-eyebrow font-medium uppercase tracking-widest text-muted">
                    {project.discipline} — {project.year}
                  </span>
                  <span
                    aria-hidden
                    className="absolute right-6 top-5 size-2 rounded-full bg-accent-base"
                  />
                </div>
              )}
            </Link>
          </article>
        </div>
      ))}
    </div>
  );
}
