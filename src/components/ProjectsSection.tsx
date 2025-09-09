"use client";

import FadeContent from "../animations/FadeContent/FadeContent";
import GlareHover from "../animations/GlareHover/GlareHover";
import { useState } from "react";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects", count: 2 },
    { id: "featured", label: "Featured", count: 1 },
    { id: "academic", label: "Academic", count: 1 },
    { id: "professional", label: "Professional", count: 1 },
  ];

  return (
    <section
      id="projects"
      className="w-full px-8 py-24 bg-white dark:bg-white relative"
    >
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/30 dark:bg-primary/40 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary-dark/30 dark:bg-primary-dark/40 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-primary/30 dark:bg-primary/40 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Featured Projects
        </h2>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-105"
              }`}
            >
              <span>{filter.label}</span>
              <span
                className={`px-2 py-0.5 rounded-full text-xs ${
                  activeFilter === filter.id
                    ? "bg-white/20 text-white"
                    : "bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-400"
                }`}
              >
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 relative">
          {/* Guideon AI Project */}
          <FadeContent
            blur={true}
            duration={800}
            delay={200}
            className={`h-full transition-all duration-500 ${
              activeFilter === "all" ||
              activeFilter === "featured" ||
              activeFilter === "academic"
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none absolute"
            }`}
          >
            <GlareHover
              width="100%"
              height="100%"
              background="transparent"
              borderRadius="1rem"
              borderColor="transparent"
              glareColor="#f97316"
              glareOpacity={0.1}
              glareSize={200}
              transitionDuration={600}
              className="h-full"
            >
              <div className="group bg-white/95 dark:bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-border shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 h-full">
                <div className="relative overflow-hidden rounded-xl mb-6 group-hover:shadow-lg transition-shadow duration-500">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/60 via-primary/50 to-primary-dark/60 dark:from-primary/40 dark:via-primary/30 dark:to-primary-dark/40 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Custom AI SVG Illustration */}
                    <div className="relative z-10">
                      <svg
                        width="80"
                        height="80"
                        viewBox="0 0 100 100"
                        className="text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform duration-500"
                      >
                        <defs>
                          <linearGradient
                            id="aiGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#f97316" />
                            <stop offset="100%" stopColor="#ea580c" />
                          </linearGradient>
                        </defs>

                        {/* Brain/neural network representation */}
                        <circle
                          cx="50"
                          cy="50"
                          r="25"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          opacity="0.3"
                        />
                        <circle
                          cx="35"
                          cy="35"
                          r="8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          opacity="0.4"
                        />
                        <circle
                          cx="65"
                          cy="35"
                          r="8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          opacity="0.4"
                        />
                        <circle
                          cx="35"
                          cy="65"
                          r="8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          opacity="0.4"
                        />
                        <circle
                          cx="65"
                          cy="65"
                          r="8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          opacity="0.4"
                        />

                        {/* Connection lines */}
                        <line
                          x1="43"
                          y1="35"
                          x2="57"
                          y2="35"
                          stroke="currentColor"
                          strokeWidth="1"
                          opacity="0.5"
                        />
                        <line
                          x1="43"
                          y1="65"
                          x2="57"
                          y2="65"
                          stroke="currentColor"
                          strokeWidth="1"
                          opacity="0.5"
                        />
                        <line
                          x1="35"
                          y1="43"
                          x2="35"
                          y2="57"
                          stroke="currentColor"
                          strokeWidth="1"
                          opacity="0.5"
                        />
                        <line
                          x1="65"
                          y1="43"
                          x2="65"
                          y2="57"
                          stroke="currentColor"
                          strokeWidth="1"
                          opacity="0.5"
                        />

                        {/* Central AI core */}
                        <circle
                          cx="50"
                          cy="50"
                          r="6"
                          fill="url(#aiGradient)"
                          className="animate-pulse"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="3"
                          fill="white"
                          opacity="0.8"
                        />
                      </svg>
                    </div>

                    <div className="text-center text-slate-700 dark:text-slate-300 relative z-10 mt-4">
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                        AI-Powered Learning Platform
                      </p>
                    </div>

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✨</span>
                      </div>
                    </div>

                    {/* Floating particles effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary rounded-full animate-float"></div>
                      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary-dark rounded-full animate-float-delayed"></div>
                      <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-primary rounded-full animate-float"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-200 leading-tight">
                      Guideon – AI Learning Pathway Recommender
                    </h3>
                    <div className="self-start sm:ml-4 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Full-stack intelligent assistant that recommends
                    personalized learning paths using locally hosted LLM (Llama
                    3 via Ollama). Features hybrid filtering aligned with
                    Philippine Skills Framework (PSF).
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>71.8 CUQ Usability Score</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>6-month Development</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span>Solo Project</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span>PSF Aligned</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Django",
                      "React",
                      "Llama 3",
                      "PostgreSQL",
                      "pgvector",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 hover:text-primary transition-colors duration-200"
                    >
                      <span>📚</span>
                      <span>Research Paper</span>
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 hover:text-primary transition-colors duration-200"
                    >
                      <span>📊</span>
                      <span>Analytics Dashboard</span>
                    </a>
                  </div>

                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 pt-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-all duration-200 group/link shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        <span>View Project</span>
                        <span className="group-hover/link:translate-x-1 transition-transform duration-200">
                          →
                        </span>
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-4 py-2.5 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-medium transition-all duration-200 hover:scale-105"
                      >
                        <span>Live Demo</span>
                        <span className="text-sm">🔗</span>
                      </a>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-right">
                      Academic Project
                    </div>
                  </div>
                </div>
              </div>
            </GlareHover>
          </FadeContent>

          {/* ChartLink Project */}
          <FadeContent
            blur={true}
            duration={800}
            delay={400}
            className={`h-full transition-all duration-500 ${
              activeFilter === "all" || activeFilter === "professional"
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none absolute"
            }`}
          >
            <GlareHover
              width="100%"
              height="100%"
              background="transparent"
              borderRadius="1rem"
              borderColor="transparent"
              glareColor="#f97316"
              glareOpacity={0.1}
              glareSize={200}
              transitionDuration={600}
              className="h-full"
            >
              <div className="group bg-white/95 dark:bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-border shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 h-full">
                <div className="relative overflow-hidden rounded-xl mb-6 group-hover:shadow-lg transition-shadow duration-500">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/60 via-primary/50 to-primary-dark/60 dark:from-primary/40 dark:via-primary/30 dark:to-primary-dark/40 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Custom Clinic Management SVG Illustration */}
                    <div className="relative z-10">
                      <svg
                        width="80"
                        height="80"
                        viewBox="0 0 100 100"
                        className="text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform duration-500"
                      >
                        <defs>
                          <linearGradient
                            id="clinicGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#f97316" />
                            <stop offset="100%" stopColor="#ea580c" />
                          </linearGradient>
                        </defs>

                        {/* Medical cross */}
                        <rect
                          x="45"
                          y="25"
                          width="10"
                          height="30"
                          fill="url(#clinicGradient)"
                          rx="2"
                        />
                        <rect
                          x="40"
                          y="30"
                          width="20"
                          height="10"
                          fill="url(#clinicGradient)"
                          rx="2"
                        />

                        {/* Data flow lines representing real-time updates */}
                        <path
                          d="M20 55 L35 55 L35 45 L45 45"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          opacity="0.6"
                          className="animate-pulse"
                        />
                        <path
                          d="M80 55 L65 55 L65 65 L55 65"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          opacity="0.6"
                          className="animate-pulse"
                        />

                        {/* Database/storage representation */}
                        <rect
                          x="25"
                          y="60"
                          width="15"
                          height="8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          opacity="0.5"
                          rx="1"
                        />
                        <rect
                          x="25"
                          y="68"
                          width="15"
                          height="8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          opacity="0.4"
                          rx="1"
                        />
                        <rect
                          x="25"
                          y="76"
                          width="15"
                          height="8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          opacity="0.3"
                          rx="1"
                        />

                        {/* Cloud sync icon */}
                        <path
                          d="M70 75 Q75 70 80 75 Q80 72 78 70 Q76 68 73 70 Q71 68 70 70 Q68 72 70 75"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          opacity="0.5"
                        />
                        <line
                          x1="73"
                          y1="70"
                          x2="73"
                          y2="65"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          opacity="0.5"
                        />
                        <line
                          x1="76"
                          y1="70"
                          x2="76"
                          y2="67"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          opacity="0.5"
                        />

                        {/* Workflow arrows */}
                        <path
                          d="M45 80 L50 75 L55 80"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                          opacity="0.4"
                        />
                        <path
                          d="M55 80 L60 75 L65 80"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                          opacity="0.4"
                        />
                      </svg>
                    </div>

                    <div className="text-center text-slate-700 dark:text-slate-300 relative z-10 mt-4">
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                        Clinic Management System
                      </p>
                    </div>

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">💼</span>
                      </div>
                    </div>

                    {/* Floating data particles effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary rounded-full animate-bounce-slow"></div>
                      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-primary-dark rounded-full animate-bounce-slow"></div>
                      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-primary rounded-full animate-bounce-slow"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-200 leading-tight">
                      ChartLink Clinic Workflow System
                    </h3>
                    <div className="self-start sm:ml-4 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                      Freelance
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Scalable clinic workflow system built with Supabase for
                    authentication, real-time database, and storage. Features
                    responsive TypeScript + Next.js frontend.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>40% Efficiency Improvement</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>30% Faster Load Times</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span>3-month Development</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span>Real-time Features</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "TypeScript", "Supabase", "Real-time"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 hover:text-primary transition-colors duration-200"
                    >
                      <span>🏥</span>
                      <span>Case Study</span>
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 hover:text-primary transition-colors duration-200"
                    >
                      <span>📈</span>
                      <span>Performance Metrics</span>
                    </a>
                  </div>

                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 pt-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-all duration-200 group/link shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        <span>View Project</span>
                        <span className="group-hover/link:translate-x-1 transition-transform duration-200">
                          →
                        </span>
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-4 py-2.5 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-medium transition-all duration-200 hover:scale-105"
                      >
                        <span>Live Demo</span>
                        <span className="text-sm">🔗</span>
                      </a>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-right">
                      Professional Project
                    </div>
                  </div>
                </div>
              </div>
            </GlareHover>
          </FadeContent>
        </div>

        {/* Leadership Section */}
        <FadeContent blur={true} duration={800} delay={600}>
          <div className="bg-white/90 dark:bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-border shadow-xl mb-12">
            <h3 className="text-2xl font-medium mb-6 text-center">
              Leadership & Community
            </h3>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary dark:bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍💼</span>
              </div>
              <h4 className="text-xl font-medium mb-3">
                Director for Code Camps at DEVCON Iligan
              </h4>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Leading the planning and execution of multiple tech events from
                February 2024 to June 2025. Contributing strategic insights,
                coordinating cross-functional teams, and ensuring seamless event
                delivery while enhancing community engagement and learner
                participation.
              </p>
            </div>
          </div>
        </FadeContent>

        <div className="text-center">
          {/*
          <Link
            href="/projects"
            className="inline-block px-8 py-3 bg-white/80 dark:bg-white/80 border border-border text-neutral dark:text-neutral hover:bg-neutral/10 dark:hover:bg-neutral/10 transition-colors font-medium rounded-lg shadow-lg backdrop-blur-sm"
          >
            View All Projects
          </Link>
          */}
        </div>
      </div>
    </section>
  );
}
