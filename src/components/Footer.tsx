export default function Footer() {
  return (
    <footer className="w-full py-8 px-8 bg-[var(--background)] text-[var(--foreground)] font-sans mt-12 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="mb-8 md:mb-0">
          <div className="text-xl font-medium mb-6">Portfolio</div>
          <p className="text-sm max-w-xs text-[var(--foreground-muted)]">
            Creating elegant, sophisticated web experiences with meticulous
            attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          <div>
            <h3 className="text-sm font-medium mb-4">Work</h3>
            <ul className="space-y-2 text-sm text-[var(--foreground-muted)]">
              <li>
                <a href="#" className="hover:text-[var(--primary-dark)]">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--primary-dark)]">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--primary-dark)]">
                  Clients
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-[var(--foreground-muted)]">
              <li>
                <a href="#" className="hover:text-[var(--primary-dark)]">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--primary-dark)]">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--primary-dark)]">
                  Digital Strategy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">About</h3>
            <ul className="space-y-2 text-sm text-[var(--foreground-muted)]">
              <li>
                <a href="#" className="hover:text-[var(--primary-dark)]">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--primary-dark)]">
                  Process
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--primary-dark)]">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-[var(--foreground-muted)]">
              <li>
                <a
                  href="mailto:hello@portfolio.com"
                  className="hover:text-[var(--primary-dark)]"
                >
                  hello@portfolio.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--primary-dark)]">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--primary-dark)]">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-[var(--border-light)]">
        <p className="text-sm text-[var(--foreground-muted)]">
          &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="#"
            className="text-sm text-[var(--foreground-muted)] hover:text-[var(--primary-dark)]"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-sm text-[var(--foreground-muted)] hover:text-[var(--primary-dark)]"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-sm text-[var(--foreground-muted)] hover:text-[var(--primary-dark)]"
          >
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}
