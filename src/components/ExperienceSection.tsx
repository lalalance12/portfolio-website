export default function ExperienceSection() {
  return (
    <section className="w-full px-8 py-24 bg-white dark:bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {/* Silahis Experience */}
          <div className="bg-white/70 dark:bg-white/70 rounded-xl p-6 border border-border backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-medium">Full Stack Developer</h3>
                <p className="text-primary dark:text-primary">
                  Silahis Student Publication Website
                </p>
              </div>
              <span className="text-slate-500 dark:text-slate-400">
                Sep 2024 – July 2025
              </span>
            </div>
            <ul className="text-slate-600 dark:text-slate-300 space-y-2">
              <li>
                • Deployed cloud-native publication platform using AWS (EC2, S3,
                Route 53) with Laravel Forge
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
          <div className="bg-white/70 dark:bg-white/70 rounded-xl p-6 border border-border backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-medium">
                  Full Stack Developer (Freelance)
                </h3>
                <p className="text-primary dark:text-primary">ChartLink</p>
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
          <div className="bg-white/70 dark:bg-white/70 rounded-xl p-6 border border-border backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-medium">
                  Software Engineer Intern
                </h3>
                <p className="text-primary dark:text-primary">
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
  );
}
