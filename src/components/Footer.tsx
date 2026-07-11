import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-charcoal-deep text-on-charcoal/80">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm sm:flex-row md:px-8">
        <p>
          © {new Date().getFullYear()} {site.shortName}
        </p>
        <p>{site.location}</p>
        <a href="#top" className="transition-colors hover:text-accent-base">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
