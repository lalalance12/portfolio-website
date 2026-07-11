import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Contact from "@/components/sections/Contact";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 md:px-8">
      <Hero />
      <About />
      <Marquee>Selected Work</Marquee>
      <Work />
      <Marquee direction="right">Let&apos;s work together</Marquee>
      <Contact />
    </div>
  );
}
