import type { Project } from "@/data/projects";

export default function ProjectHeader({ project }: { project: Project }) {
  const hasLinks = project.links.live || project.links.github;

  return (
    <header>
      <p className="mb-6 text-eyebrow font-medium uppercase text-muted">
        Project Deep Dive — {project.year}
        {project.highlight && (
          <span className="text-accent"> — {project.highlight}</span>
        )}
      </p>
      <h1 className="font-display text-display font-medium">{project.title}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        {project.oneLiner}
      </p>

      <dl className="mt-12 grid gap-x-8 gap-y-6 border-y border-hairline py-8 sm:grid-cols-2 lg:grid-cols-4">
        {project.role && (
          <div>
            <dt className="text-eyebrow font-medium uppercase text-muted">
              Role
            </dt>
            <dd className="mt-2 text-sm">{project.role}</dd>
          </div>
        )}
        <div>
          <dt className="text-eyebrow font-medium uppercase text-muted">
            Year
          </dt>
          <dd className="mt-2 text-sm tabular-nums">{project.year}</dd>
        </div>
        <div>
          <dt className="text-eyebrow font-medium uppercase text-muted">
            Stack
          </dt>
          <dd className="mt-2 text-sm">{project.stack.join(", ")}</dd>
        </div>
        <div>
          <dt className="text-eyebrow font-medium uppercase text-muted">
            Links
          </dt>
          <dd className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium transition-colors hover:text-accent"
              >
                Live <span aria-hidden>↗</span>
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium transition-colors hover:text-accent"
              >
                GitHub <span aria-hidden>↗</span>
              </a>
            )}
            {project.isPrivate && (
              <span className="text-muted">
                {hasLinks ? "Source private" : "Private client project"}
              </span>
            )}
          </dd>
        </div>
      </dl>
    </header>
  );
}
