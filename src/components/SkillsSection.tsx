import LogoLoop from "@/animations/LogoLoop/LogoLoop";
import { Icon } from "@iconify/react";

export default function SkillsSection() {
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
      <div
        className="mt-12"
        style={{ height: "200px", position: "relative", overflow: "hidden" }}
      >
        <LogoLoop
          logos={techLogos}
          speed={80}
          direction="right"
          logoHeight={64}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
      <div
        className="mt-0"
        style={{ height: "200px", position: "relative", overflow: "hidden" }}
      >
        <LogoLoop
          logos={techLogos}
          speed={80}
          direction="left"
          logoHeight={64}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
}
