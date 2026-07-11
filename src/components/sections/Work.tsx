import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import FeaturedStack from "@/components/sections/FeaturedStack";
import { featuredProjects, archiveProjects } from "@/data/projects";

export default function Work() {
  return (
    <section id="work" className="scroll-mt-16 border-t border-hairline py-24 md:py-32">
      <SectionHeading index="02" label="Selected Work" />

      <FeaturedStack />

      <Reveal selector="[data-archive-row]" stagger={0.07}>
        <h3 className="mb-2 mt-28 text-eyebrow font-medium uppercase tracking-widest text-muted">
          Archive
        </h3>
        <ol>
          {archiveProjects.map((project, i) => (
            <li key={project.slug} data-archive-row className="border-b border-hairline">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-baseline gap-4 rounded-xl px-4 py-5 transition-colors hover:bg-surface/60 sm:grid-cols-[3rem_minmax(0,1fr)_11rem_5.5rem] sm:px-6"
              >
                <span className="text-sm tabular-nums text-accent">
                  {String(featuredProjects.length + i + 1).padStart(2, "0")}
                </span>
                <span className="truncate font-display text-lg transition-colors group-hover:text-accent">
                  {project.title}
                </span>
                <span className="hidden text-sm text-muted sm:block">
                  {project.discipline} · {project.year}
                </span>
                <span className="text-right text-sm text-muted transition-colors group-hover:text-accent">
                  GitHub{" "}
                  <span aria-hidden className="inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
