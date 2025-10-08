"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import LogoLoop from "@/animations/LogoLoop/LogoLoop";
import { Icon } from "@iconify/react";
import FadeContent from "../animations/FadeContent/FadeContent";
import AnimatedContent from "../animations/AnimatedContent/AnimatedContent";
import { useScrollContext } from "../contexts/ScrollContext";

export default function SkillsSection() {
  const { scrollProgress } = useScrollContext();

  // Optimized parallax calculations with reduced movement
  const parallaxValues = useMemo(
    () => ({
      backgroundY: scrollProgress * -100,
      contentY: scrollProgress * -20,
    }),
    [scrollProgress]
  );
  const techLogos = [
    {
      node: <Icon icon="simple-icons:react" color="#61DAFB" />,
      title: "React",
      href: "https://react.dev",
    },
    {
      node: <Icon icon="simple-icons:nextdotjs" color="#000000" />,
      title: "Next.js",
      href: "https://nextjs.org",
    },
    {
      node: <Icon icon="simple-icons:typescript" color="#007ACC" />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <Icon icon="simple-icons:tailwindcss" color="#06B6D4" />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <Icon icon="simple-icons:laravel" color="#FF2D20" />,
      title: "Laravel",
      href: "https://laravel.com",
    },
    {
      node: <Icon icon="simple-icons:php" color="#777BB4" />,
      title: "PHP",
      href: "https://www.php.net",
    },
    {
      node: <Icon icon="simple-icons:django" color="#092E20" />,
      title: "Django",
      href: "https://www.djangoproject.com",
    },
    {
      node: <Icon icon="simple-icons:python" color="#3776AB" />,
      title: "Python",
      href: "https://www.python.org",
    },
    {
      node: <Icon icon="simple-icons:nodedotjs" color="#339933" />,
      title: "Node.js",
      href: "https://nodejs.org",
    },
    {
      node: <Icon icon="simple-icons:express" color="#000000" />,
      title: "Express",
      href: "https://expressjs.com",
    },
    {
      node: <Icon icon="simple-icons:postgresql" color="#336791" />,
      title: "PostgreSQL",
      href: "https://www.postgresql.org",
    },
    {
      node: <Icon icon="simple-icons:git" color="#F05032" />,
      title: "Git",
      href: "https://git-scm.com",
    },
    {
      node: <Icon icon="simple-icons:supabase" color="#3ECF8E" />,
      title: "Supabase",
      href: "https://supabase.com",
    },
    {
      node: <Icon icon="simple-icons:amazonaws" color="#FF9900" />,
      title: "AWS",
      href: "https://aws.amazon.com",
    },
    {
      node: <Icon icon="simple-icons:css3" color="#264DE4" />,
      title: "CSS",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      node: <Icon icon="simple-icons:html5" color="#E34F26" />,
      title: "HTML",
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      node: <Icon icon="simple-icons:javascript" color="#F7DF1E" />,
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      node: <Icon icon="simple-icons:c" color="#A8B9CC" />,
      title: "C",
      href: "https://en.cppreference.com/w/c",
    },
    {
      node: <Icon icon="simple-icons:cplusplus" color="#00599C" />,
      title: "C++",
      href: "https://en.cppreference.com/w/cpp",
    },
    {
      node: <Icon icon="simple-icons:mysql" color="#4479A1" />,
      title: "MySQL",
      href: "https://www.mysql.com",
    },
    {
      node: <Icon icon="simple-icons:mongodb" color="#47A248" />,
      title: "MongoDB",
      href: "https://www.mongodb.com",
    },
    {
      node: <Icon icon="simple-icons:postman" color="#FF6C37" />,
      title: "Postman",
      href: "https://www.postman.com",
    },
  ];

  return (
    <section
      id="skills"
      className="w-full px-8 py-24 bg-white relative overflow-hidden"
    >
      {/* Background parallax layers */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: parallaxValues.backgroundY,
          willChange: "transform",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary-dark/5 to-primary/10"></div>
        <div className="absolute inset-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon
              fill="rgba(59, 130, 246, 0.05)"
              points="0,0 100,20 100,100 0,100"
            />
          </svg>
        </div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeContent blur={true} duration={1000} delay={200}>
          <motion.div
            className="text-center mb-16"
            style={{
              y: parallaxValues.contentY,
              willChange: "transform",
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks for
              building exceptional digital experiences
            </p>
          </motion.div>
        </FadeContent>
        <AnimatedContent distance={60} duration={0.8} delay={0.1}>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <motion.div
              className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-border/50 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0 20px 25px -5px rgba(249, 115, 22, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    {/* Modern Browser/Monitor Icon */}
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="2"
                        y="3"
                        width="20"
                        height="14"
                        rx="2"
                        strokeWidth="2"
                      />
                      <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2" />
                      <line x1="12" y1="17" x2="12" y2="21" strokeWidth="2" />
                    </svg>
                  </div>
                </motion.div>

                <h3 className="text-2xl font-semibold mb-6 text-slate-800 group-hover:text-primary transition-colors duration-300">
                  Frontend
                </h3>

                <div className="space-y-3">
                  <motion.div
                    className="flex items-center gap-3 text-slate-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">React & Next.js</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3 text-slate-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">TypeScript</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3 text-slate-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Tailwind CSS</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3 text-slate-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Responsive Design</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-border/50 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative"
                  whileHover={{
                    scale: 1.1,
                    rotate: -5,
                    boxShadow: "0 20px 25px -5px rgba(249, 115, 22, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    {/* Modern Server/Gear Icon */}
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="3" strokeWidth="2" />
                      <path d="M12 1v6m0 6v6" strokeWidth="2" />
                      <path
                        d="m16.24 7.76-4.24 4.24m4.24 4.24-4.24-4.24"
                        strokeWidth="2"
                      />
                      <path
                        d="m7.76 7.76 4.24 4.24m-4.24 4.24 4.24-4.24"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </motion.div>

                <h3 className="text-2xl font-semibold mb-6 text-slate-800 group-hover:text-primary transition-colors duration-300">
                  Backend
                </h3>

                <div className="space-y-3">
                  <motion.div
                    className="flex items-center gap-3 text-slate-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Laravel & PHP</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3 text-slate-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Django & Python</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3 text-slate-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Node.js & Express</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3 text-slate-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">RESTful APIs</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Database & Cloud */}
            <motion.div
              className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-border/50 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0 20px 25px -5px rgba(249, 115, 22, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    {/* Modern Cloud Database Icon */}
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 4 14.9"
                        strokeWidth="2"
                      />
                      <path d="M12 12v3" strokeWidth="2" />
                      <path d="M9 15h6" strokeWidth="2" />
                      <path d="M12 6v3" strokeWidth="2" />
                    </svg>
                  </div>
                </motion.div>

                <h3 className="text-2xl font-semibold mb-6 text-slate-800 group-hover:text-primary transition-colors duration-300">
                  Database & Cloud
                </h3>

                <div className="space-y-3">
                  <motion.div
                    className="flex items-center gap-3 text-slate-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">PostgreSQL & pgvector</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3 text-slate-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">AWS & Supabase</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3 text-slate-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">AI/ML (Llama 3, Ollama)</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3 text-slate-600"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Git & Agile</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedContent>
      </div>
      <div className="mt-12 h-[120px] relative overflow-hidden">
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="right"
          logoHeight={64}
          gap={40}
          pauseOnHover={false}
          scaleOnHover={false}
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
      <div className="mt-0 h-[100px] relative overflow-hidden">
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="left"
          logoHeight={64}
          gap={40}
          pauseOnHover={false}
          scaleOnHover={false}
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
}
