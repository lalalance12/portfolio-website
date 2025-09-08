import AnimatedContent from "../animations/AnimatedContent/AnimatedContent";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full px-8 py-24 bg-white dark:bg-white relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Crafting innovative digital solutions as a passionate software
            engineer based in Cagayan de Oro, Philippines.
          </p>
        </div>

        <AnimatedContent>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-dark/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Full-Stack</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                End-to-end development
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">AI/ML</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Intelligent solutions
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Cloud Tech</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Scalable architecture
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-12">Experience</h3>

            {/* Silahis Experience */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-dark/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white/80 dark:bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h4 className="text-xl font-semibold mb-2">
                      Full Stack Developer
                    </h4>
                    <p className="text-primary font-medium">
                      Silahis Student Publication
                    </p>
                  </div>
                  <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                    Sep 2024 – July 2025
                  </span>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-medium text-primary">
                      Cloud Deployment:
                    </span>{" "}
                    AWS infrastructure with Laravel Forge
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-medium text-primary">
                      CMS Development:
                    </span>{" "}
                    React & Laravel with automation
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-medium text-primary">UI/UX:</span>{" "}
                    Mobile-responsive design from Figma
                  </div>
                </div>
              </div>
            </div>

            {/* ChartLink Experience */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white/80 dark:bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-accent/20 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h4 className="text-xl font-semibold mb-2">
                      Full Stack Developer
                    </h4>
                    <p className="text-accent font-medium">
                      ChartLink (Freelance)
                    </p>
                  </div>
                  <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                    Aug 2024 – Feb 2025
                  </span>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-medium text-accent">Backend:</span>{" "}
                    Supabase real-time database
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-medium text-accent">Frontend:</span>{" "}
                    Next.js with 30% faster load times
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-medium text-accent">Delivery:</span>{" "}
                    100% on-time agile development
                  </div>
                </div>
              </div>
            </div>

            {/* OneQuantum Experience */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white/80 dark:bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h4 className="text-xl font-semibold mb-2">
                      Software Engineer Intern
                    </h4>
                    <p className="text-primary font-medium">
                      OneQuantum Philippines
                    </p>
                  </div>
                  <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                    Feb 2024 – Nov 2024
                  </span>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-medium text-primary">Backend:</span>{" "}
                    Node.js & Express.js architecture
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-medium text-primary">
                      Deployment:
                    </span>{" "}
                    Vercel with performance optimization
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-medium text-primary">
                      Communication:
                    </span>{" "}
                    Stakeholder coordination
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
