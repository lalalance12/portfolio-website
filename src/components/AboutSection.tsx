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
        {/* Section Header */}
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
              Crafting innovative digital solutions as a dedicated software
              engineer based in Cagayan de Oro City, Philippines.
            </p>
          </motion.div>
        </FadeContent>

        {/* Personal Story Section */}
        <AnimatedContent distance={50} duration={0.8} delay={0.1}>
          <div className="mb-16">
            <motion.div
              className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 md:p-10 border border-border/50 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Decorative Quote */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-3 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    My Journey
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    I&apos;m an adaptable and driven <span className="text-primary font-semibold">Software Engineer</span> and{" "}
                    <span className="text-primary font-semibold">BS Computer Science graduate</span> from
                    Mindanao State University - Iligan Institute of Technology (MSU-IIT). I specialize in building{" "}
                    <span className="text-primary font-semibold">scalable, efficient, and user-centric</span>{" "}
                    web applications and systems.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    With hands-on experience across the full stack, I&apos;ve delivered real-world projects
                    using technologies like React, Next.js, Laravel, Supabase, PostgreSQL, and AWS.
                    Whether it&apos;s deploying cloud-native publication platforms, building healthcare
                    systems that streamline clinical workflows, or creating AI-powered tools for
                    agricultural compliance, I believe in writing code that creates meaningful impact.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    What sets me apart is my <span className="text-primary font-semibold">adaptability, rapid learning, grit</span>,
                    and balanced focus on both aesthetics and performance. I thrive in both team
                    environments and solo development, always eager to take on new challenges and
                    exciting opportunities.
                  </p>
                </div>

                {/* Quick Facts */}
                <div className="md:col-span-2">
                  <div className="bg-white rounded-2xl p-6 border border-border/50 shadow-lg space-y-4">
                    <h4 className="font-semibold text-slate-800 text-lg mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Quick Facts
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-slate-600">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <span className="text-sm">Cagayan de Oro City, Philippines</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-600">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <span className="text-sm">BS Computer Science</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-600">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <span className="text-sm">Problem Solver & Innovator</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-600">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-sm">Open to Opportunities</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedContent>

        {/* What I Bring - Core Strengths */}
        <AnimatedContent distance={50} duration={0.8} delay={0.2}>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <motion.div
              className="text-center group relative bg-white rounded-2xl p-6 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </motion.div>
                <h3 className="font-semibold text-lg mb-2 text-slate-800">Full-Stack Development</h3>
                <p className="text-sm text-slate-500">From React frontends to Laravel backends, I build complete, production-ready applications</p>
              </div>
            </motion.div>

            <motion.div
              className="text-center group relative bg-white rounded-2xl p-6 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent to-teal-600 flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.div>
                <h3 className="font-semibold text-lg mb-2 text-slate-800">AI/ML Integration</h3>
                <p className="text-sm text-slate-500">Implementing intelligent features with LangChain, LLMs, and machine learning models</p>
              </div>
            </motion.div>

            <motion.div
              className="text-center group relative bg-white rounded-2xl p-6 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </motion.div>
                <h3 className="font-semibold text-lg mb-2 text-slate-800">Cloud & DevOps</h3>
                <p className="text-sm text-slate-500">Deploying scalable solutions on AWS, Vercel, and Supabase with CI/CD pipelines</p>
              </div>
            </motion.div>
          </div>
        </AnimatedContent>

        {/* Experience Timeline */}
        <FadeContent blur={false} duration={800} delay={400}>
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent flex-1"></div>
              <h3 className="text-2xl font-bold text-slate-800 px-4">Professional Experience</h3>
              <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent flex-1"></div>
            </div>

            {/* Experience Cards with Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary-dark transform md:-translate-x-1/2 hidden md:block"></div>

              {/* Silahis Experience */}
              <motion.div
                className="group relative mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right md:pr-8">
                    <span className="inline-block text-sm text-white bg-primary px-4 py-1 rounded-full font-medium mb-4">
                      Sep 2024 – July 2025
                    </span>
                  </div>
                  <div className="hidden md:block"></div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 border-4 border-white shadow-lg hidden md:block"></div>

                <motion.div
                  className="relative bg-white rounded-2xl p-6 md:p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 md:ml-0"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                      <h4 className="text-xl font-bold text-slate-800 mb-1">
                        Full Stack Developer
                      </h4>
                      <p className="text-primary font-semibold text-lg">
                        Silahis Website
                      </p>
                      <p className="text-sm text-slate-500 mt-1">Silahis Student Publication Organization</p>
                    </div>
                    <span className="md:hidden text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit">
                      Sep 2024 – July 2025
                    </span>
                  </div>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Led the development and deployment of a cloud-native publication platform serving the university&apos;s student journalism community, reducing manual maintenance by 50%.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-slate-50 rounded-xl p-4">
                      <span className="font-semibold text-primary text-sm">Cloud Infrastructure</span>
                      <p className="text-sm text-slate-600 mt-1">AWS EC2, S3, Route 53 with Laravel Forge</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <span className="font-semibold text-primary text-sm">CMS Development</span>
                      <p className="text-sm text-slate-600 mt-1">React + Laravel with automated workflows</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <span className="font-semibold text-primary text-sm">UI/UX Design</span>
                      <p className="text-sm text-slate-600 mt-1">Mobile-responsive Figma-to-code implementation</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["React", "Laravel", "AWS", "Tailwind CSS", "MySQL"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* ChartLink Experience */}
              <motion.div
                className="group relative mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="hidden md:block"></div>
                  <div className="md:pl-8">
                    <span className="inline-block text-sm text-white bg-accent px-4 py-1 rounded-full font-medium mb-4">
                      Aug 2024 – Feb 2025
                    </span>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-accent rounded-full transform md:-translate-x-1/2 border-4 border-white shadow-lg hidden md:block"></div>

                <motion.div
                  className="relative bg-white rounded-2xl p-6 md:p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                      <h4 className="text-xl font-bold text-slate-800 mb-1">
                        Full Stack Developer
                      </h4>
                      <p className="text-accent font-semibold text-lg">
                        ChartLink Healthcare System
                      </p>
                      <p className="text-sm text-slate-500 mt-1">Freelance Project</p>
                    </div>
                    <span className="md:hidden text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit">
                      Aug 2024 – Feb 2025
                    </span>
                  </div>

                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Built a scalable clinic workflow system that boosted operational efficiency by 40% and achieved 30% faster load times through optimized frontend architecture.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-slate-50 rounded-xl p-4">
                      <span className="font-semibold text-accent text-sm">Backend Architecture</span>
                      <p className="text-sm text-slate-600 mt-1">Supabase real-time DB, auth & storage</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <span className="font-semibold text-accent text-sm">Frontend Performance</span>
                      <p className="text-sm text-slate-600 mt-1">Next.js + TypeScript with optimizations</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <span className="font-semibold text-accent text-sm">Project Management</span>
                      <p className="text-sm text-slate-600 mt-1">Agile sprints with 100% on-time delivery</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Healthcare"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
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
              >
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right md:pr-8">
                    <span className="inline-block text-sm text-white bg-slate-700 px-4 py-1 rounded-full font-medium mb-4">
                      Feb 2024 – Nov 2024
                    </span>
                  </div>
                  <div className="hidden md:block"></div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-slate-700 rounded-full transform md:-translate-x-1/2 border-4 border-white shadow-lg hidden md:block"></div>

                <motion.div
                  className="relative bg-white rounded-2xl p-6 md:p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                      <h4 className="text-xl font-bold text-slate-800 mb-1">
                        Software Engineer Intern
                      </h4>
                      <p className="text-slate-700 font-semibold text-lg">
                        OneQuantum Philippines Website
                      </p>
                      <p className="text-sm text-slate-500 mt-1">Quantum Computing Organization</p>
                    </div>
                    <span className="md:hidden text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit">
                      Feb 2024 – Nov 2024
                    </span>
                  </div>

                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Contributed to backend development and deployment strategies, gaining valuable experience in professional software engineering practices and stakeholder communication.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-slate-50 rounded-xl p-4">
                      <span className="font-semibold text-slate-700 text-sm">Backend Development</span>
                      <p className="text-sm text-slate-600 mt-1">Node.js & Express.js architecture</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <span className="font-semibold text-slate-700 text-sm">Deployment</span>
                      <p className="text-sm text-slate-600 mt-1">Vercel with performance optimization</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <span className="font-semibold text-slate-700 text-sm">Collaboration</span>
                      <p className="text-sm text-slate-600 mt-1">Stakeholder coordination & agile workflows</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Express.js", "Vercel", "Git", "Agile"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </FadeContent>

        {/* Education Section */}
        <AnimatedContent distance={50} duration={0.8} delay={0.5}>
          <div className="mt-16">
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent flex-1"></div>
              <h3 className="text-2xl font-bold text-slate-800 px-4">Education</h3>
              <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent flex-1"></div>
            </div>

            <motion.div
              className="relative bg-white rounded-2xl p-6 md:p-8 border border-border/50 shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-1">
                        Bachelor of Science in Computer Science
                      </h4>
                      <p className="text-primary font-semibold text-lg">
                        Mindanao State University - Iligan Institute of Technology
                      </p>
                      <p className="text-slate-500">Iligan City, Philippines</p>
                    </div>
                    <span className="text-sm text-white bg-primary px-4 py-1 rounded-full font-medium mt-2 md:mt-0 w-fit">
                      2021 - 2025
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      Data Structures & Algorithms
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      Machine Learning
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      Software Engineering
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      Database Systems
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
