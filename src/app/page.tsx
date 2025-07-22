import Link from "next/link";
import Image from "next/image";
import RotatingText from "../components/RotatingText";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section id="home" className="w-full px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Picture Space - */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Animated Background Blobs */}
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400/20 dark:bg-blue-400/30 rounded-full animate-bounce-slow"></div>
                <div className="absolute top-1/4 right-0 w-24 h-24 bg-indigo-400/25 dark:bg-indigo-400/35 rounded-full animate-float"></div>
                <div className="absolute bottom-0 left-1/4 w-20 h-20 bg-purple-400/20 dark:bg-purple-400/30 rounded-full animate-pulse-slow"></div>
                <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-blue-400/15 dark:bg-blue-400/25 rounded-full animate-spin-slow"></div>
              </div>

              {/* Main Circular Picture Container */}
              <div className="relative w-full h-full bg-white/80 dark:bg-slate-800/80 border-4 border-blue-200/50 dark:border-slate-600/50 rounded-full shadow-2xl flex items-center justify-center overflow-hidden backdrop-blur-sm">
                <div className="text-center text-slate-500 dark:text-slate-400">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 opacity-50"
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

              {/* Floating Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-400/60 dark:bg-blue-400/70 rounded-full animate-float-delayed"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-indigo-400/70 dark:bg-indigo-400/80 rounded-full animate-bounce-slow"></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-purple-400/50 dark:bg-purple-400/60 rounded-full animate-pulse-slow"></div>
            </div>
          </div>

          {/* Text Content - Now on Right */}
          <div className="order-1 lg:order-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              <div className="mb-2">
                Hi! I am{" "}
                <span className="text-blue-600 dark:text-blue-400">Xerxes</span>
                , a
              </div>
              <div className="w-[10em] flex items-start">
                <RotatingText />
              </div>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg">
              I specialize in building scalable, efficient, and user-centric web
              applications/systems. With hands-on experience across the full
              stack, I&apos;ve delivered real-world projects using technologies
              like React, Next.js, Laravel, Supabase, PostgreSQL, and AWS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition-colors font-medium rounded-lg text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-block px-8 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-medium rounded-lg text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section - Light neutral background with decorative patterns */}
      <section
        id="about"
        className="w-full px-8 py-24 bg-white/50 dark:bg-slate-800/30 relative overflow-hidden"
      >
        {/* Decorative background patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400 rounded-full"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 border border-indigo-400 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-purple-400 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                I&apos;m Xerxes Lance Laurenz A. Lompon, a Computer Science
                student at Mindanao State University – Iligan Institute of
                Technology, graduating in 2025 with Cum Laude honors. Based in
                Cagayan de Oro, I&apos;m passionate about creating meaningful
                digital experiences and solving real-world problems through
                code.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                My journey includes full-stack development work at Silahis
                Student Publication, freelance projects like ChartLink clinic
                management system, and an internship at OneQuantum Philippines.
                I&apos;m actively involved in DEVCON Iligan as Director for Code
                Camps, Computer Society (ComSoc), and the Silahis Student
                Publication.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  Cum Laude
                </span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">
                  Tech Leader
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                  Full-Stack Developer
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-white/80 dark:bg-slate-700/50 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-600/50 backdrop-blur-sm relative overflow-hidden">
                {/* Decorative geometric shapes */}
                <div className="absolute inset-0">
                  <div className="absolute top-8 left-8 w-16 h-16 bg-blue-400/20 dark:bg-blue-400/30 rounded-full animate-pulse-slow"></div>
                  <div className="absolute top-16 right-12 w-12 h-12 bg-indigo-400/25 dark:bg-indigo-400/35 rounded-lg rotate-45 animate-spin-slow"></div>
                  <div className="absolute bottom-20 left-12 w-14 h-14 bg-purple-400/20 dark:bg-purple-400/30 rounded-full animate-bounce-slow"></div>
                  <div className="absolute bottom-8 right-8 w-10 h-10 bg-blue-400/15 dark:bg-blue-400/25 rounded-lg animate-float"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-4 border-indigo-300/30 dark:border-indigo-400/40 rounded-full animate-pulse"></div>
                </div>

                {/* Central content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <span className="text-2xl text-white">🎓</span>
                    </div>
                  </div>
                  <div className="text-slate-700 dark:text-slate-300">
                    <h4 className="text-lg font-semibold mb-2">MSU-IIT</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Computer Science
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Class of 2025
                    </p>
                    <div className="mt-3 px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                      Cum Laude
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - New section */}
      <section className="w-full px-8 py-24 bg-slate-50/50 dark:bg-slate-900/50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {/* Silahis Experience */}
            <div className="bg-white/70 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200/50 dark:border-slate-600/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium">Full Stack Developer</h3>
                  <p className="text-blue-600 dark:text-blue-400">
                    Silahis Student Publication Website
                  </p>
                </div>
                <span className="text-slate-500 dark:text-slate-400">
                  Sep 2024 – July 2025
                </span>
              </div>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                <li>
                  • Deployed cloud-native publication platform using AWS (EC2,
                  S3, Route 53) with Laravel Forge
                </li>
                <li>
                  • Developed custom CMS using React and Laravel with automated
                  article publishing
                </li>
                <li>
                  • Implemented mobile-responsive UI/UX from Figma designs,
                  improving engagement across devices
                </li>
              </ul>
            </div>

            {/* ChartLink Experience */}
            <div className="bg-white/70 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200/50 dark:border-slate-600/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium">
                    Full Stack Developer (Freelance)
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400">ChartLink</p>
                </div>
                <span className="text-slate-500 dark:text-slate-400">
                  Aug 2024 – Feb 2025
                </span>
              </div>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                <li>
                  • Built scalable clinic workflow system using Supabase (auth,
                  real-time DB, storage)
                </li>
                <li>
                  • Created responsive TypeScript + Next.js frontend with 30%
                  faster load times
                </li>
                <li>
                  • Executed agile development processes ensuring 100% on-time
                  feature delivery
                </li>
              </ul>
            </div>

            {/* OneQuantum Experience */}
            <div className="bg-white/70 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200/50 dark:border-slate-600/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium">
                    Software Engineer Intern
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400">
                    OneQuantum Philippines
                  </p>
                </div>
                <span className="text-slate-500 dark:text-slate-400">
                  Feb 2024 – Nov 2024
                </span>
              </div>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                <li>
                  • Engineered robust backend architecture using Node.js and
                  Express.js
                </li>
                <li>
                  • Deployed React-based frontend to Vercel with performance
                  optimizations
                </li>
                <li>
                  • Coordinated requirements gathering and stakeholder
                  communication
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Diagonal split background */}
      <section
        id="skills"
        className="w-full px-8 py-24 relative overflow-hidden"
      >
        {/* Diagonal background split */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/40 dark:from-slate-800/50 dark:via-slate-700/30 dark:to-slate-800/40"></div>
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

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-slate-600/50 shadow-lg">
              <div className="w-16 h-16 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4">Frontend</h3>
              <div className="space-y-2">
                <p className="text-slate-600 dark:text-slate-300">
                  React & Next.js
                </p>
                <p className="text-slate-600 dark:text-slate-300">TypeScript</p>
                <p className="text-slate-600 dark:text-slate-300">
                  Tailwind CSS
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Responsive Design
                </p>
              </div>
            </div>

            {/* Backend */}
            <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-slate-600/50 shadow-lg">
              <div className="w-16 h-16 bg-indigo-500 dark:bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.5 9L12 5l7.5 4v6l-7.5 4L4.5 15V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4">Backend</h3>
              <div className="space-y-2">
                <p className="text-slate-600 dark:text-slate-300">
                  Laravel & PHP
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Django & Python
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Node.js & Express
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  RESTful APIs
                </p>
              </div>
            </div>

            {/* Database & Cloud */}
            <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-slate-600/50 shadow-lg">
              <div className="w-16 h-16 bg-purple-500 dark:bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1L3 5v6c0 6.55 4.84 12.86 9 14 4.16-1.14 9-7.45 9-14V5l-9-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4">Database & Cloud</h3>
              <div className="space-y-2">
                <p className="text-slate-600 dark:text-slate-300">
                  PostgreSQL & pgvector
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  AWS & Supabase
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  AI/ML (Llama 3, Ollama)
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Git & Agile
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Gradient mesh background */}
      <section
        id="projects"
        className="w-full px-8 py-24 bg-gradient-to-r from-blue-50/50 via-indigo-50/30 to-purple-50/40 dark:from-slate-900/50 dark:via-slate-800/30 dark:to-slate-900/40 relative"
      >
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/30 dark:bg-blue-400/40 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-400/30 dark:bg-indigo-400/40 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-purple-400/30 dark:bg-purple-400/40 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Guideon AI Project */}
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-slate-600/50 shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100/50 to-indigo-100/50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center text-slate-700 dark:text-slate-300">
                  <span className="block text-4xl mb-2">🤖</span>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    AI-Powered Learning Platform
                  </p>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3">
                Guideon – AI Learning Pathway Recommender
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Full-stack intelligent assistant that recommends personalized
                learning paths using locally hosted LLM (Llama 3 via Ollama).
                Features hybrid filtering aligned with Philippine Skills
                Framework (PSF). Achieved 71.8 CUQ usability score (SD = ±11.7).
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-sm">
                  Django
                </span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-sm">
                  React
                </span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-sm">
                  Llama 3
                </span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-sm">
                  PostgreSQL
                </span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-sm">
                  pgvector
                </span>
              </div>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                View Code →
              </a>
            </div>

            {/* ChartLink Project */}
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-slate-600/50 shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-indigo-100/50 to-purple-100/50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center text-slate-700 dark:text-slate-300">
                  <span className="block text-4xl mb-2">🏥</span>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Clinic Management System
                  </p>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3">
                ChartLink Clinic Workflow System
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Scalable clinic workflow system built with Supabase for
                authentication, real-time database, and storage. Features
                responsive TypeScript + Next.js frontend with 40% improved
                operational efficiency and 30% faster load times.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-sm">
                  Next.js
                </span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-sm">
                  TypeScript
                </span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-sm">
                  Supabase
                </span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-sm">
                  Real-time
                </span>
              </div>
              <span className="text-slate-500 dark:text-slate-400 text-sm">
                Freelance Project
              </span>
            </div>
          </div>

          {/* Leadership Section */}
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl p-8 border border-slate-200/50 dark:border-slate-600/50 shadow-xl mb-12">
            <h3 className="text-2xl font-medium mb-6 text-center">
              Leadership & Community
            </h3>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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

          <div className="text-center">
            {/*
            <Link
              href="/projects"
              className="inline-block px-8 py-3 bg-white/80 dark:bg-slate-700/80 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors font-medium rounded-lg shadow-lg backdrop-blur-sm"
            >
              View All Projects
            </Link>
            */}
          </div>
        </div>
      </section>

      {/* Contact Section - Dark theme with inverted colors */}
      <section
        id="contact"
        className="w-full px-8 py-24 bg-slate-900 dark:bg-slate-950 text-white relative overflow-hidden"
      >
        {/* Dark section decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 border border-blue-400 rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 border border-indigo-400 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-blue-500 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-slate-300 mb-12">
            I&apos;m always interested in new opportunities and exciting
            projects. Whether you have a project in mind or just want to
            connect, I&apos;d love to hear from you.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2 text-white">Email</h3>
              <p className="text-slate-300">
                lompon.xerxeslancelaurenz@gmail.com
              </p>
            </div>

            <a
              href="https://linkedin.com/in/xerxes-lompon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center block hover:scale-105 transition-transform duration-200"
            >
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-indigo-700 transition-colors">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2 text-white">LinkedIn</h3>
              <p className="text-slate-300">Connect with me</p>
            </a>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2 text-white">Phone</h3>
              <p className="text-slate-300">0956-6873-781</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
