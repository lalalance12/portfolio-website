import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ContactChannels from "@/components/ContactChannels";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-hairline py-24 md:py-32">
      <SectionHeading index="03" label="Contact" />

      <Reveal grow>
        <div className="rounded-3xl border border-hairline bg-paper-raised p-8 sm:p-12 md:p-16">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="flex w-fit items-center gap-2.5 rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                <span className="relative flex size-2" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                {site.availability}
              </p>
              <h3 className="mt-8 font-display text-display font-medium">
                Let&apos;s build
                <br />
                <span className="text-fire italic">something together.</span>
              </h3>
              <p className="mt-8 max-w-md leading-relaxed text-muted">
                Whether it&apos;s a full-time role, a project that needs
                shipping, or an idea worth exploring — my inbox is open and I
                reply fast.
              </p>
            </div>

            <ContactChannels />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
