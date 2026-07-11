import Link from "next/link";
import { featuredProjects } from "@/data/projects";

export default function ProjectPagination({ slug }: { slug: string }) {
  const index = featuredProjects.findIndex((p) => p.slug === slug);
  const count = featuredProjects.length;
  const prev = featuredProjects[(index - 1 + count) % count];
  const next = featuredProjects[(index + 1) % count];

  return (
    <nav
      aria-label="Project navigation"
      className="mt-24 flex items-baseline justify-between gap-8 border-t border-hairline pt-8"
    >
      <Link
        href={`/projects/${prev.slug}`}
        className="group text-sm font-medium transition-colors hover:text-accent"
      >
        <span aria-hidden className="inline-block transition-transform group-hover:-translate-x-0.5">
          ←
        </span>{" "}
        {prev.title}
      </Link>
      <Link
        href={`/projects/${next.slug}`}
        className="group text-right text-sm font-medium transition-colors hover:text-accent"
      >
        {next.title}{" "}
        <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </Link>
    </nav>
  );
}
