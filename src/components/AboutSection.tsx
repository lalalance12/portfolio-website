"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import AnimatedContent from "../animations/AnimatedContent/AnimatedContent";
import FadeContent from "../animations/FadeContent/FadeContent";
import { useScrollContext } from "../contexts/ScrollContext";

export default function AboutSection() {
  const { scrollProgress } = useScrollContext();

  // Optimized parallax calculations with reduced movement
  const parallaxValues = useMemo(
    () => ({
      backgroundY: scrollProgress * -75,
      contentY: scrollProgress * -15,
    }),
    [scrollProgress]
  );

  return (
    <section
      id="about"
      className="w-full px-8 py-24 bg-white relative overflow-hidden"
    >
      {/* Background parallax layer */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          y: parallaxValues.backgroundY,
          willChange: "transform",
        }}
      >
        <div className="absolute top-40 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </motion.div>
      <div className="max-w-5xl mx-auto relative z-10">
        <FadeContent blur={true} duration={1000} delay={300}>
          <motion.div
            className="text-center mb-16"
            style={{
              y: parallaxValues.contentY,
              willChange: "transform",
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Crafting innovative digital solutions as a passionate software
              engineer based in Cagayan de Oro, Philippines.
            </p>
          </motion.div>
        </FadeContent>

        <AnimatedContent distance={50} duration={0.8} delay={0.2}>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              className="text-center group relative"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-dark/10 flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="text-2xl">💻</span>
                </motion.div>
                <h3 className="font-semibold text-lg mb-2">Full-Stack</h3>
                <p className="text-sm text-slate-500">End-to-end development</p>
              </div>
            </motion.div>
            <motion.div
              className="text-center group relative"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/20 flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="text-2xl">🤖</span>
                </motion.div>
                <h3 className="font-semibold text-lg mb-2">AI/ML</h3>
                <p className="text-sm text-slate-500">Intelligent solutions</p>
              </div>
            </motion.div>
            <motion.div
              className="text-center group relative"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="text-2xl">☁️</span>
                </motion.div>
                <h3 className="font-semibold text-lg mb-2">Cloud Tech</h3>
                <p className="text-sm text-slate-500">Scalable architecture</p>
              </div>
            </motion.div>
          </div>

          <FadeContent blur={false} duration={800} delay={400}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center mb-12">
                Experience
              </h3>

              {/* Silahis Experience */}
              <motion.div
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-dark/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <motion.div
                  className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="mb-4 md:mb-0">
                      <h4 className="text-xl font-semibold mb-2">
                        Full Stack Developer
                      </h4>
                      <p className="text-primary font-medium">
                        Silahis Student Publication
                      </p>
                    </div>
                    <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      Sep 2024 – July 2025
                    </span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-sm text-slate-600">
                      <span className="font-medium text-primary">
                        Cloud Deployment:
                      </span>{" "}
                      AWS infrastructure with Laravel Forge
                    </div>
                    <div className="text-sm text-slate-600">
                      <span className="font-medium text-primary">
                        CMS Development:
                      </span>{" "}
                      React & Laravel with automation
                    </div>
                    <div className="text-sm text-slate-600">
                      <span className="font-medium text-primary">UI/UX:</span>{" "}
                      Mobile-responsive design from Figma
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* ChartLink Experience */}
              <motion.div
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <motion.div
                  className="relative bg-white/80 dark:bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-accent/20 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="mb-4 md:mb-0">
                      <h4 className="text-xl font-semibold mb-2">
                        Full Stack Developer
                      </h4>
                      <p className="text-accent font-medium">
                        ChartLink (Freelance)
                      </p>
                    </div>
                    <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      Aug 2024 – Feb 2025
                    </span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-sm text-slate-600">
                      <span className="font-medium text-accent">Backend:</span>{" "}
                      Supabase real-time database
                    </div>
                    <div className="text-sm text-slate-600">
                      <span className="font-medium text-accent">Frontend:</span>{" "}
                      Next.js with 30% faster load times
                    </div>
                    <div className="text-sm text-slate-600">
                      <span className="font-medium text-accent">Delivery:</span>{" "}
                      100% on-time agile development
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* OneQuantum Experience */}
              <motion.div
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <motion.div
                  className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="mb-4 md:mb-0">
                      <h4 className="text-xl font-semibold mb-2">
                        Software Engineer Intern
                      </h4>
                      <p className="text-primary font-medium">
                        OneQuantum Philippines
                      </p>
                    </div>
                    <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      Feb 2024 – Nov 2024
                    </span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-sm text-slate-600">
                      <span className="font-medium text-primary">Backend:</span>{" "}
                      Node.js & Express.js architecture
                    </div>
                    <div className="text-sm text-slate-600">
                      <span className="font-medium text-primary">
                        Deployment:
                      </span>{" "}
                      Vercel with performance optimization
                    </div>
                    <div className="text-sm text-slate-600">
                      <span className="font-medium text-primary">
                        Communication:
                      </span>{" "}
                      Stakeholder coordination
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </FadeContent>
        </AnimatedContent>
      </div>
    </section>
  );
}
