"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";
import RotatingText from "./RotatingText";
import FadeContent from "../animations/FadeContent/FadeContent";
import AnimatedContent from "../animations/AnimatedContent/AnimatedContent";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useScrollContext } from "@/contexts/ScrollContext";

export default function HeroSection() {
  const scrollToSection = useScrollToSection();
  const { scrollProgress } = useScrollContext();

  // Optimized parallax calculations with reduced movement for better performance
  const parallaxValues = useMemo(
    () => ({
      imageY: scrollProgress * -50,
      textY: scrollProgress * -25,
      backgroundY: scrollProgress * -100,
    }),
    [scrollProgress]
  );

  return (
    <section
      id="home"
      className="relative w-full py-10 sm:py-10 md:py-10 lg:py-10 xl:py-10 overflow-hidden"
    >
      {/* Background parallax layer */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          y: parallaxValues.backgroundY,
          willChange: "transform",
        }}
      >
        <div className="absolute top-10 right-4 sm:top-20 sm:right-10 md:right-20 w-48 h-48 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-4 sm:bottom-24 sm:left-10 md:bottom-32 md:left-20 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-accent/20 rounded-full blur-3xl"></div>
      </motion.div>

      <FadeContent blur={true} duration={1200} delay={200}>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-center relative z-10 max-w-7xl mx-auto">
          {/* Picture Space with Parallax */}
          <AnimatedContent
            distance={100}
            direction="vertical"
            duration={1.2}
            ease="power3.out"
            scale={0.9}
          >
            <motion.div
              className="flex justify-center lg:justify-end order-1 lg:order-2 lg:pr-32"
              style={{
                y: parallaxValues.imageY,
                willChange: "transform",
              }}
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 group">
                {/* Animated background glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl scale-110"
                  animate={{
                    scale: [1.1, 1.3, 1.1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Main Circular Picture Container */}
                <div className="relative w-full h-full bg-white/80 border-4 border-primary/50 rounded-full shadow-2xl flex items-center justify-center overflow-hidden backdrop-blur-sm group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center text-slate-500">
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
                  className="object-cover rounded-full shadow-2xl group-hover:shadow-primary/25 transition-shadow duration-500"
                  priority
                />
              </div>
            </motion.div>
          </AnimatedContent>

          {/* Text Content with Enhanced Animations */}
          <motion.div
            className="order-2 lg:order-1 space-y-2 sm:space-y-3 md:space-y-4 flex flex-col items-center lg:items-start"
            style={{
              y: parallaxValues.textY,
              willChange: "transform",
            }}
          >
            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={true}
              duration={1}
              delay={0.3}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 text-center lg:text-left">
                <span className="block mb-1 text-neutral">
                  Software Engineer
                </span>
                <span className="block w-[10em] mx-auto lg:mx-0 relative">
                  <RotatingText />
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-700 text-center lg:text-left mb-3">
                Xerxes Lance Laurenz Lompon
              </p>
            </AnimatedContent>

            <FadeContent blur={false} duration={800} delay={600}>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
                Building production systems that serve real users. Recently
                developed an AWS-hosted publication platform and a MVP for a
                healthcare workflow system using React, Next.js, Laravel, AWS,
                Tailwind, and Supabase.
              </p>
            </FadeContent>

            <AnimatedContent
              distance={30}
              direction="vertical"
              duration={0.8}
              delay={0.8}
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 md:gap-6 w-full sm:w-auto px-4 sm:px-0 text-secondary mb-10 sm:mb-10 md:mb-10">
                <motion.a
                  href="#projects"
                  className="w-full sm:w-auto inline-block px-6 sm:px-8 py-4 sm:py-3 bg-primary hover:bg-primary-dark text-secondary transition-all duration-300 font-medium rounded-lg text-center hover:scale-105 text-sm sm:text-base min-h-[48px] sm:min-h-[44px] focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2"
                  aria-label="View my projects and work"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projects");
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="#contact"
                  className="w-full sm:w-auto inline-block px-6 sm:px-8 py-4 sm:py-3 bg-primary hover:bg-primary-dark text-secondary transition-all duration-300 font-medium rounded-lg text-center hover:scale-105 text-sm sm:text-base min-h-[48px] sm:min-h-[44px] focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2"
                  aria-label="Get in touch with me"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </div>
            </AnimatedContent>
          </motion.div>
        </div>
      </FadeContent>
    </section>
  );
}
