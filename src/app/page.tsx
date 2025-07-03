import Link from "next/link";
import Image from "next/image";
import RotatingText from "../components/RotatingText";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section - Subtle gradient background */}
      <section className="w-full px-8 py-24 md:py-32 bg-gradient-to-br from-background via-background to-neutral/20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Picture Space - */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Animated Background Blobs */}
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <div className="absolute top-0 left-0 w-32 h-32 bg-primary opacity-20 rounded-full animate-bounce-slow"></div>
                <div className="absolute top-1/4 right-0 w-24 h-24 bg-accent opacity-30 rounded-full animate-float"></div>
                <div className="absolute bottom-0 left-1/4 w-20 h-20 bg-primary-dark opacity-25 rounded-full animate-pulse-slow"></div>
                <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-primary opacity-15 rounded-full animate-spin-slow"></div>
              </div>

              {/* Main Circular Picture Container */}
              <div className="relative w-full h-full bg-neutral border-4 border-border rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center text-foreground-muted">
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
                alt="Lance - Software Engineer"
                fill
                className="object-cover rounded-full shadow-2xl"
                priority
              />

              {/* Floating Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary rounded-full opacity-60 animate-float-delayed"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-accent rounded-full opacity-70 animate-bounce-slow"></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-primary-dark rounded-full opacity-50 animate-pulse-slow"></div>
            </div>
          </div>

          {/* Text Content - Now on Right */}
          <div className="order-1 lg:order-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              <div className="mb-2">
                Hi! I am <span className="text-primary">Lance</span>, a
              </div>
              <div className="w-[10em] flex items-start">
                <RotatingText />
              </div>
            </h1>
            <p className="text-lg text-foreground-muted mb-8 max-w-lg">
              I specialize in building scalable, efficient, and user-centric web
              applications/systems. With hands-on experience across the full
              stack, I have delivered real-world projects using technologies
              like React, Next.js, Laravel, Supabase, PostgreSQL, and AWS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="inline-block px-8 py-3 bg-primary text-secondary hover:bg-primary-dark transition-colors font-medium rounded-lg text-center"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-secondary transition-colors font-medium rounded-lg text-center"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section - Light neutral background with decorative patterns */}
      <section className="w-full px-8 py-24 bg-neutral/30 relative overflow-hidden">
        {/* Decorative background patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-primary rounded-full"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 border border-accent rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary-dark rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-foreground-muted mb-6">
                I&apos;m a passionate software engineer based in the Philippines
                with a strong focus on creating meaningful digital experiences.
                My journey in tech has been driven by curiosity and a desire to
                solve real-world problems through code.
              </p>
              <p className="text-lg text-foreground-muted mb-6">
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, contributing to open-source projects, or sharing
                knowledge with the developer community. I believe in continuous
                learning and staying up-to-date with the latest industry trends.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-primary text-secondary rounded-full text-sm">
                  Problem Solver
                </span>
                <span className="px-3 py-1 bg-accent text-secondary rounded-full text-sm">
                  Team Player
                </span>
                <span className="px-3 py-1 bg-primary-dark text-secondary rounded-full text-sm">
                  Continuous Learner
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-background rounded-2xl shadow-xl border border-border flex items-center justify-center">
                <p className="text-foreground-muted text-center">
                  <span className="block text-2xl mb-2">🚀</span>
                  Additional photo or
                  <br />
                  illustration space
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Diagonal split background */}
      <section className="w-full px-8 py-24 relative overflow-hidden">
        {/* Diagonal background split */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10"></div>
        <div className="absolute inset-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon
              fill="rgba(100, 181, 246, 0.05)"
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
            <div className="text-center bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-border shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-secondary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4">Frontend</h3>
              <div className="space-y-2">
                <p className="text-foreground-muted">React & Next.js</p>
                <p className="text-foreground-muted">TypeScript</p>
                <p className="text-foreground-muted">Tailwind CSS</p>
                <p className="text-foreground-muted">HTML5 & CSS3</p>
              </div>
            </div>

            {/* Backend */}
            <div className="text-center bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-border shadow-lg">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-secondary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.5 9L12 5l7.5 4v6l-7.5 4L4.5 15V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4">Backend</h3>
              <div className="space-y-2">
                <p className="text-foreground-muted">Laravel & PHP</p>
                <p className="text-foreground-muted">Node.js</p>
                <p className="text-foreground-muted">Supabase</p>
                <p className="text-foreground-muted">RESTful APIs</p>
              </div>
            </div>

            {/* Database & Cloud */}
            <div className="text-center bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-border shadow-lg">
              <div className="w-16 h-16 bg-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-secondary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1L3 5v6c0 6.55 4.84 12.86 9 14 4.16-1.14 9-7.45 9-14V5l-9-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4">Database & Cloud</h3>
              <div className="space-y-2">
                <p className="text-foreground-muted">PostgreSQL</p>
                <p className="text-foreground-muted">AWS Services</p>
                <p className="text-foreground-muted">Git & GitHub</p>
                <p className="text-foreground-muted">Docker</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Gradient mesh background */}
      <section className="w-full px-8 py-24 bg-gradient-to-r from-primary/10 via-accent/5 to-primary-dark/10 relative">
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-primary-dark rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-background/90 backdrop-blur-sm rounded-xl p-6 border border-border shadow-xl">
              <div className="aspect-[4/3] bg-neutral rounded-lg mb-6 flex items-center justify-center">
                <p className="text-foreground-muted text-center">
                  <span className="block text-2xl mb-2">🌐</span>
                  Project Screenshot
                </p>
              </div>
              <h3 className="text-xl font-medium mb-3">E-Commerce Platform</h3>
              <p className="text-foreground-muted mb-4">
                A full-featured e-commerce solution built with Next.js and
                Laravel, featuring user authentication, payment processing, and
                real-time inventory management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-border rounded text-sm">
                  Next.js
                </span>
                <span className="px-2 py-1 bg-border rounded text-sm">
                  Laravel
                </span>
                <span className="px-2 py-1 bg-border rounded text-sm">
                  PostgreSQL
                </span>
              </div>
              <Link
                href="/projects"
                className="text-primary hover:text-primary-dark font-medium"
              >
                View Project →
              </Link>
            </div>

            <div className="bg-background/90 backdrop-blur-sm rounded-xl p-6 border border-border shadow-xl">
              <div className="aspect-[4/3] bg-neutral rounded-lg mb-6 flex items-center justify-center">
                <p className="text-foreground-muted text-center">
                  <span className="block text-2xl mb-2">📱</span>
                  Project Screenshot
                </p>
              </div>
              <h3 className="text-xl font-medium mb-3">Task Management App</h3>
              <p className="text-foreground-muted mb-4">
                A collaborative task management application with real-time
                updates, team collaboration features, and intelligent project
                insights built with React and Supabase.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-border rounded text-sm">
                  React
                </span>
                <span className="px-2 py-1 bg-border rounded text-sm">
                  Supabase
                </span>
                <span className="px-2 py-1 bg-border rounded text-sm">
                  Tailwind
                </span>
              </div>
              <Link
                href="/projects"
                className="text-primary hover:text-primary-dark font-medium"
              >
                View Project →
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-block px-8 py-3 bg-background border border-foreground text-foreground hover:bg-foreground hover:text-secondary transition-colors font-medium rounded-lg shadow-lg"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section - Dark theme with inverted colors */}
      <section className="w-full px-8 py-24 bg-foreground text-background relative overflow-hidden">
        {/* Dark section decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 border border-primary rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 border border-accent rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-primary rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-background">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-background/80 mb-12">
            I&apos;m always interested in new opportunities and exciting
            projects. Whether you have a project in mind or just want to
            connect, I&apos;d love to hear from you.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-secondary"
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
              <h3 className="text-lg font-medium mb-2 text-background">
                Email
              </h3>
              <p className="text-background/80">your-email@example.com</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-secondary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2 text-background">
                LinkedIn
              </h3>
              <p className="text-background/80">Connect with me</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-secondary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2 text-background">
                GitHub
              </h3>
              <p className="text-background/80">View my code</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-secondary hover:bg-primary-dark transition-colors font-medium rounded-lg"
            >
              Send Message
            </Link>
            <Link
              href="/resume"
              className="inline-block px-8 py-3 border border-background text-background hover:bg-background hover:text-foreground transition-colors font-medium rounded-lg"
            >
              Download Resume
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
