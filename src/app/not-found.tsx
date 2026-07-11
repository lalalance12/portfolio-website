import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70svh] max-w-5xl flex-col items-start justify-center px-6 md:px-8">
      <p className="text-eyebrow font-medium uppercase tracking-widest text-muted">
        404 — Page not found
      </p>
      <h1 className="mt-6 font-display text-display font-medium">
        Nothing
        <br />
        <span className="text-fire italic">here.</span>
      </h1>
      <p className="mt-6 max-w-md leading-relaxed text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Head
        back home and take the scenic route instead.
      </p>
      <Link
        href="/"
        className="bg-fire glow-fire mt-10 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.03] hover:brightness-105"
      >
        ← Back home
      </Link>
    </div>
  );
}
