"use client";

import Image from "next/image";
import RotatingText from "./RotatingText";

export default function HeroSection() {
  return (
    <section id="home" className="w-full px-8 py-24 md:py-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Picture Space */}
        <div className="flex justify-center lg:justify-start order-2 lg:order-1">
          <div className="relative w-60 h-60 lg:w-80 lg:h-80">
            {/* Main Circular Picture Container */}
            <div className="relative w-full h-full bg-white/80 dark:bg-white/80 border-4 border-primary/50 dark:border-primary/50 rounded-full shadow-2xl flex items-center justify-center overflow-hidden backdrop-blur-sm">
              <div className="text-center text-slate-500 dark:text-slate-400">
                <svg
                  className="w-8 h-8 mx-auto mb-4 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>

            <Image
              src="/photo1.jpg"
              alt="Xerxes Lance Laurenz A. Lompon - Software Engineer"
              fill
              className="object-cover rounded-full shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Text Content - Now on Right */}
        <div className="order-1 lg:order-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <div className="mb-2 text-neutral dark:text-neutral">
              Hi! I am{" "}
              <span className="text-primary dark:text-primary">Xerxes</span>, a
            </div>
            <div className="w-[10em] flex items-start">
              <RotatingText />
            </div>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg">
            I specialize in building scalable, efficient, and user-centric
            systems. With hands-on experience across the full stack, I&apos;ve
            delivered real-world projects using technologies like React,
            Next.js, Laravel, Supabase, PostgreSQL, and AWS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark dark:bg-primary dark:hover:bg-primary-dark text-secondary transition-all duration-300 font-medium rounded-lg text-center hover:scale-105 hover:shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("projects");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest",
                  });
                }
              }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-3 border border-border !text-neutral hover:bg-neutral/10 transition-all duration-300 font-medium rounded-lg text-center hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
