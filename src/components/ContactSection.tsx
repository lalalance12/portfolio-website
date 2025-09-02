export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full px-8 py-24 bg-white dark:bg-white text-neutral dark:text-neutral relative overflow-hidden"
    >
      {/* Dark section decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 border border-primary-dark rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-primary rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral">
          Let&apos;s Work Together
        </h2>
        <p className="text-lg text-neutral/70 mb-12">
          I&apos;m always interested in new opportunities and exciting projects.
          Whether you have a project in mind or just want to connect, I&apos;d
          love to hear from you.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
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
            <h3 className="text-lg font-medium mb-2 text-neutral">Email</h3>
            <p className="text-neutral/70">
              lompon.xerxeslancelaurenz@gmail.com
            </p>
          </div>

          <a
            href="https://linkedin.com/in/xerxes-lompon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center block hover:scale-105 transition-transform duration-200"
          >
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary-dark transition-colors">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2 text-neutral">LinkedIn</h3>
            <p className="text-neutral/70">Connect with me</p>
          </a>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
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
            <h3 className="text-lg font-medium mb-2 text-neutral">Phone</h3>
            <p className="text-neutral/70">0956-6873-781</p>
          </div>
        </div>
      </div>
    </section>
  );
}
