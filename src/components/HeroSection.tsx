"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import RotatingText from "./RotatingText";
import FadeContent from "../animations/FadeContent/FadeContent";
import AnimatedContent from "../animations/AnimatedContent/AnimatedContent";
import DecryptedText from "../textanimations/DecryptedText/DecryptedText";
import ScrollVelocity from "../animations/ScrollVelocity/ScrollVelocity";

export default function HeroSection() {
  // Parallax scroll effects
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section
      id="home"
      className="relative w-full py-10 sm:py-10 md:py-10 lg:py-10 xl:py-10 overflow-hidden"
    >
      {/* Background parallax layer */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{ y: backgroundY }}
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
              className="flex justify-center lg:justify-start order-1 lg:order-2"
              style={{ y: imageY }}
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
            className="order-2 lg:order-1 space-y-4 sm:space-y-6 md:space-y-8 flex flex-col items-center lg:items-start"
            style={{ y: textY }}
          >
            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={true}
              duration={1}
              delay={0.3}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 text-center lg:text-left">
                <div className="mb-4 text-neutral text-center lg:text-left">
                  Hi! I am{" "}
                  <DecryptedText
                    text="Xerxes"
                    speed={30}
                    maxIterations={15}
                    sequential={true}
                    revealDirection="center"
                    animateOn="view"
                    className="text-primary font-bold"
                    encryptedClassName="text-slate-400"
                  />
                  , a
                </div>
                <div className="w-[10em] flex items-center justify-center lg:justify-start relative mx-auto lg:mx-0">
                  <RotatingText />
                  {/* Floating accent elements */}
                  <motion.div
                    className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-1 sm:-bottom-2 -left-3 sm:-left-6 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  />
                </div>
              </h1>
            </AnimatedContent>

            <FadeContent blur={false} duration={800} delay={600}>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
                I specialize in building scalable, efficient, and user-centric
                systems. With hands-on experience across the full stack,
                I&apos;ve delivered real-world projects using technologies like
                React, Next.js, Laravel, Supabase, PostgreSQL, and AWS.
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
                    const element = document.getElementById("projects");
                    if (element) {
                      // Scroll to exact position at the top of the section
                      const elementTop = element.offsetTop;
                      window.scrollTo({
                        top: elementTop,
                        behavior: "smooth",
                      });
                    }
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="#contact"
                  className="w-full sm:w-auto inline-block px-6 sm:px-8 py-4 sm:py-3 border-2 bg-primary text-primary hover:bg-primary hover:text-secondary transition-all duration-300 font-medium rounded-lg text-center hover:scale-105 text-sm sm:text-base min-h-[48px] sm:min-h-[44px] focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2"
                  aria-label="Get in touch with me"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById("contact");
                    if (element) {
                      // Calculate position accounting for sticky header
                      const elementTop = element.offsetTop;
                      const header = document.querySelector("header");
                      const headerHeight = header ? header.offsetHeight : 100;
                      const scrollPosition = elementTop - headerHeight - 20;

                      // Ensure we don't scroll above the top of the page
                      const finalPosition = Math.max(0, scrollPosition);

                      // Scroll to the section with smooth behavior
                      window.scrollTo({
                        top: finalPosition,
                        behavior: "smooth",
                      });
                    }
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

      <ScrollVelocity
        texts={[
          "Software Engineer  ✦  Full Stack Developer  ✦",
          "Problem Solver  ✦  Tech Innovator  ✦",
        ]}
        velocity={80}
        className="mb-2"
      />
    </section>
  );
}
