export default function ProjectsSection() {
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
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Guideon AI Project */}
          <div className="bg-white/90 dark:bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-border shadow-xl">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/50 to-primary-dark/50 dark:from-primary/30 dark:to-primary-dark/30 rounded-lg mb-6 flex items-center justify-center">
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
              Features hybrid filtering aligned with Philippine Skills Framework
              (PSF). Achieved 71.8 CUQ usability score (SD = ±11.7).
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
              className="text-primary dark:text-primary hover:text-primary-dark dark:hover:text-primary-dark font-medium"
            >
              View Code →
            </a>
          </div>

          {/* ChartLink Project */}
          <div className="bg-white/90 dark:bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-border shadow-xl">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/50 to-primary-dark/50 dark:from-primary/30 dark:to-primary-dark/30 rounded-lg mb-6 flex items-center justify-center">
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
