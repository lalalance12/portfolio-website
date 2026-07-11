import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectHeader from "@/components/project/ProjectHeader";
import ProjectFigure from "@/components/project/ProjectFigure";
import ProjectPagination from "@/components/project/ProjectPagination";
import Reveal from "@/components/Reveal";
import { featuredProjects, getProject } from "@/data/projects";
import { site } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return featuredProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${site.shortName}`,
    description: project.oneLiner,
    openGraph: project.cover
      ? { images: [{ url: project.cover.src }] }
      : undefined,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = getProject((await params).slug);
  if (!project || !project.featured || !project.caseStudy) notFound();

  const images = [
    ...(project.cover ? [project.cover] : []),
    ...(project.images ?? []),
  ];

  return (
    <article className="mx-auto max-w-4xl px-6 py-16 md:px-8 md:py-24">
      <p className="mb-12">
        <Link
          href="/#work"
          className="group text-sm font-medium text-muted transition-colors hover:text-accent"
        >
          <span aria-hidden className="inline-block transition-transform group-hover:-translate-x-0.5">
            ←
          </span>{" "}
          All work
        </Link>
      </p>

      <ProjectHeader project={project} />

      <div className="mt-16">
        <Reveal>
          <p className="font-display text-title leading-relaxed">
            {project.caseStudy.intro}
          </p>
        </Reveal>

        {project.caseStudy.sections.map((section) => (
          <Reveal key={section.heading} selector="[data-reveal]" stagger={0.06}>
            <section className="mt-16">
              <h2 data-reveal className="font-display text-headline font-medium">
                {section.heading}
              </h2>
              {section.body && (
                <p data-reveal className="mt-5 leading-relaxed text-muted">
                  {section.body}
                </p>
              )}
              {section.items && (
                <ul className="mt-6">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      data-reveal
                      className="border-b border-hairline py-3.5 leading-relaxed text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </Reveal>
        ))}

        {images.length > 0 && (
          <section className="mt-16 space-y-12">
            <Reveal>
              <h2 className="font-display text-headline font-medium">
                In pictures
              </h2>
            </Reveal>
            {images.map((image, i) => (
              <Reveal key={image.src}>
                <ProjectFigure image={image} priority={i === 0} />
              </Reveal>
            ))}
          </section>
        )}
      </div>

      <ProjectPagination slug={project.slug} />
    </article>
  );
}
