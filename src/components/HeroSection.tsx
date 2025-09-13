"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import RotatingText from "./RotatingText";
import FadeContent from "../animations/FadeContent/FadeContent";
import AnimatedContent from "../animations/AnimatedContent/AnimatedContent";
import DecryptedText from "../textanimations/DecryptedText/DecryptedText";

export default function HeroSection() {
  // Parallax scroll effects
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section
      id="home"
      className="relative w-full px-8 py-24 md:py-32 overflow-hidden"
    >
      {/* Background parallax layer */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
      </motion.div>

      <FadeContent blur={true} duration={1200} delay={200}>
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Picture Space with Parallax */}
          <AnimatedContent
            distance={100}
            direction="vertical"
            duration={1.2}
            ease="power3.out"
            scale={0.9}
          >
            <motion.div
              className="flex justify-center lg:justify-start order-2 lg:order-1"
              style={{ y: imageY }}
            >
              <div className="relative w-60 h-60 lg:w-80 lg:h-80 group">
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
                <div className="relative w-full h-full bg-white/80 dark:bg-white/80 border-4 border-primary/50 dark:border-primary/50 rounded-full shadow-2xl flex items-center justify-center overflow-hidden backdrop-blur-sm group-hover:scale-105 transition-transform duration-500">
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
                  className="object-cover rounded-full shadow-2xl group-hover:shadow-primary/25 transition-shadow duration-500"
                  priority
                />
              </div>
            </motion.div>
          </AnimatedContent>

          {/* Text Content with Enhanced Animations */}
          <motion.div
            className="order-1 lg:order-2 space-y-6"
            style={{ y: textY }}
          >
            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={true}
              duration={1}
              delay={0.3}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                <div className="mb-4 text-neutral dark:text-neutral">
                  Hi! I am{" "}
                  <DecryptedText
                    text="Xerxes"
                    speed={30}
                    maxIterations={15}
                    sequential={true}
                    revealDirection="center"
                    animateOn="view"
                    className="text-primary dark:text-primary font-bold"
                    encryptedClassName="text-slate-400"
                  />
                  , a
                </div>
                <div className="w-[10em] flex items-start relative">
                  <RotatingText />
                  {/* Floating accent elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-3 h-3 bg-accent rounded-full"
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
                    className="absolute -bottom-2 -left-6 w-2 h-2 bg-primary rounded-full"
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
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg leading-relaxed">
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
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#projects"
                  className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark dark:bg-primary dark:hover:bg-primary-dark text-secondary transition-all duration-300 font-medium rounded-lg text-center hover:scale-105 hover:shadow-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById("projects");
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
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
