export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full px-8 py-24 bg-white dark:bg-white relative overflow-hidden"
    >
      {/* Diagonal background split */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary-dark/5 to-primary/10 dark:from-primary/10 dark:via-primary-dark/5 dark:to-primary/10"></div>
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
          <div className="text-center bg-white/80 dark:bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-border shadow-lg">
            <div className="w-16 h-16 bg-primary dark:bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
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
              <p className="text-slate-600 dark:text-slate-300">Tailwind CSS</p>
              <p className="text-slate-600 dark:text-slate-300">
                Responsive Design
              </p>
            </div>
          </div>

          {/* Backend */}
          <div className="text-center bg-white/80 dark:bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-border shadow-lg">
            <div className="w-16 h-16 bg-primary dark:bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
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
              <p className="text-slate-600 dark:text-slate-300">RESTful APIs</p>
            </div>
          </div>

          {/* Database & Cloud */}
          <div className="text-center bg-white/80 dark:bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-border shadow-lg">
            <div className="w-16 h-16 bg-primary dark:bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
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
              <p className="text-slate-600 dark:text-slate-300">Git & Agile</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
