import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import OrbitTech from "@/components/OrbitTech";
import Stats from "@/components/Stats";
import { techIcons } from "@/components/techIcons";
import { site } from "@/data/site";
import { skillCategories } from "@/data/skills";
import { experience, education } from "@/data/experience";

function SubLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-2 mt-20 text-eyebrow font-medium uppercase tracking-widest text-muted">
      {children}
    </h3>
  );
}

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-hairline py-24 md:py-32">
      <SectionHeading index="01" label="About" />

      <Reveal selector="[data-reveal]" stagger={0.12}>
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div data-reveal className="md:col-span-5">
            <p className="font-display text-title text-ink md:sticky md:top-28">
              {site.about.kicker}
            </p>
          </div>
          <div className="space-y-6 text-muted md:col-span-7">
            {site.about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                data-reveal
                className="leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal>
        <Stats stats={site.stats} />
      </Reveal>

      <Reveal selector="[data-reveal]" stagger={0.08}>
        <SubLabel>Capabilities</SubLabel>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div data-reveal className="lg:col-span-5">
            <OrbitTech />
          </div>
          <div className="space-y-7 lg:col-span-7">
            {skillCategories.map(({ category, items }) => (
              <div key={category} data-reveal>
                <h4 className="mb-3 text-eyebrow font-medium uppercase tracking-widest text-muted">
                  {category}
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {items.map((item) => {
                    const tech = techIcons[item];
                    return (
                      <li
                        key={item}
                        className="flex items-center gap-2 rounded-full border border-hairline bg-paper-raised px-3.5 py-1.5 text-sm font-medium transition-colors hover:border-accent-base hover:bg-surface"
                      >
                        {tech && <tech.Icon size={14} color={tech.color} />}
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal selector="[data-reveal]" stagger={0.1}>
        <SubLabel>Experience</SubLabel>
        <ol>
          {experience.map((entry) => (
            <li
              key={entry.org}
              data-reveal
              className="grid gap-2 border-b border-hairline py-7 sm:grid-cols-12 sm:items-baseline sm:gap-8"
            >
              <p className="text-sm tabular-nums text-accent sm:col-span-4">
                {entry.period}
              </p>
              <div className="sm:col-span-8">
                <h4 className="font-display text-lg">
                  {entry.role} — {entry.org}
                </h4>
                {entry.orgNote && (
                  <p className="mt-0.5 text-sm text-muted">{entry.orgNote}</p>
                )}
                <p className="mt-3 leading-relaxed text-muted">{entry.summary}</p>
                <p className="mt-3 text-sm text-muted">
                  {entry.stack.join(" · ")}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal>
        <SubLabel>Education</SubLabel>
        <div className="grid gap-2 border-b border-hairline py-7 sm:grid-cols-12 sm:items-baseline sm:gap-8">
          <p className="text-sm tabular-nums text-accent sm:col-span-4">
            {education.period}
          </p>
          <div className="sm:col-span-8">
            <h4 className="font-display text-lg">{education.degree}</h4>
            <p className="mt-1 text-sm text-muted">{education.school}</p>
            <p className="mt-0.5 text-sm text-muted">{education.location}</p>
            <p className="mt-4 text-sm text-muted">
              {education.highlights.join(" · ")}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
