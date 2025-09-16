"use client";
import Link from "next/link";
import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SocialDropdown from "./SocialDropdown";

type Section = "home" | "about" | "skills" | "projects" | "contact";

export default function Header() {
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  const [targetSection, setTargetSection] = useState<Section | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userNavigatedSection, setUserNavigatedSection] =
    useState<Section | null>(null);
  const [indicatorProps, setIndicatorProps] = useState<{
    left: number;
    width: number;
    height: number;
    top: number;
    borderRadius: string;
    transform: string;
  }>({
    left: -10,
    width: 8,
    height: 8,
    top: 0,
    borderRadius: "50%",
    transform: "none",
  });

  const navRef = useRef<HTMLElement>(null);

  const homeRef = useRef<HTMLButtonElement>(null);
  const aboutRef = useRef<HTMLButtonElement>(null);
  const skillsRef = useRef<HTMLButtonElement>(null);
  const projectsRef = useRef<HTMLButtonElement>(null);
  const contactRef = useRef<HTMLButtonElement>(null);

  const refs = useMemo(
    () => ({
      home: homeRef,
      about: aboutRef,
      skills: skillsRef,
      projects: projectsRef,
      contact: contactRef,
    }),
    []
  );

  const scrollToSection = (sectionId: Section) => {
    setUserNavigatedSection(sectionId);
    setTargetSection(sectionId);
    setActiveSection(sectionId); // Set active immediately for instant visual feedback
    setIsMobileMenuOpen(false); // Close mobile menu when navigating

    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate exact position to scroll to the very beginning of the section
      const elementTop = element.offsetTop;

      // Scroll to the exact top of the section with smooth behavior
      window.scrollTo({
        top: elementTop,
        behavior: "smooth",
      });

      // Clear user navigation state after scroll completes
      setTimeout(() => {
        setUserNavigatedSection(null);
      }, 1500); // Longer timeout to ensure scroll is complete
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Don't override user navigation - keep the clicked button highlighted
      if (userNavigatedSection !== null) {
        // Only update if we've actually reached the target section
        const element = document.getElementById(userNavigatedSection);
        if (element) {
          const scrollPosition = window.scrollY;
          const elementTop = element.offsetTop;
          const elementHeight = element.offsetHeight;

          // Check if we're within the target section (at the very beginning)
          // Use a small threshold to account for smooth scrolling precision
          const threshold = 100; // pixels from the top of the section

          if (
            scrollPosition >= elementTop - threshold &&
            scrollPosition < elementTop + elementHeight - threshold
          ) {
            setUserNavigatedSection(null); // Allow normal scroll detection now
          }
        }
        return;
      }

      // Reset to home when at the very top
      if (window.scrollY < 100) {
        if (targetSection !== null) setTargetSection(null);
        return;
      }

      const sections: Section[] = [
        "home",
        "about",
        "skills",
        "projects",
        "contact",
      ];

      // Use exact scroll position without offset for precise detection
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      let newSection: Section | null = null;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementTop = element.offsetTop;
          const elementHeight = element.offsetHeight;

          // Check if the current scroll position is within this section
          // The section is considered active if:
          // 1. The scroll position is at or past the section start
          // 2. The scroll position is before the section end
          // 3. Or if we're near the end of the page and this is the last section
          if (
            scrollPosition >= elementTop - 50 && // Small threshold for precision
            (scrollPosition < elementTop + elementHeight - 50 ||
              (sectionId === "contact" &&
                scrollPosition + windowHeight >=
                  elementTop + elementHeight - 100))
          ) {
            newSection = sectionId;
            break;
          }
        }
      }

      if (newSection !== targetSection) setTargetSection(newSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetSection, userNavigatedSection]);

  useEffect(() => {
    if (targetSection === null) {
      const navHeight = navRef.current?.offsetHeight || 0;
      setIndicatorProps({
        left: -10,
        width: 8,
        height: 8,
        top: navHeight / 2 - 4,
        borderRadius: "50%",
        transform: "none",
      });
      setActiveSection(null);
    } else {
      const button = refs[targetSection]?.current || null;
      if (button) {
        setIndicatorProps({
          left: button.offsetLeft,
          width: button.offsetWidth,
          height: button.offsetHeight,
          top: button.offsetTop,
          borderRadius: "9999px",
          transform: "none",
        });
      }
      // Set activeSection immediately when targetSection changes
      setActiveSection(targetSection);
    }
  }, [targetSection, refs]);

  const getNavItemClass = (sectionId: Section) => {
    const baseClass =
      "px-3 md:px-4 py-2 md:py-1 rounded-full text-sm md:text-sm transition-all duration-20 ease-linear relative overflow-hidden cursor-pointer min-h-[40px] md:min-h-auto";
    const isCurrentSection = activeSection === sectionId;

    if (isCurrentSection) {
      return `${baseClass} font-medium text-secondary shadow-lg transform scale-105`;
    }

    return `${baseClass} text-neutral dark:text-neutral hover:bg-neutral/10 dark:hover:bg-neutral/10 hover:scale-105`;
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full px-4 md:px-6 lg:px-8 py-4 md:py-6 flex justify-between items-center bg-white dark:bg-white backdrop-blur-sm border-b border-border shadow-sm">
        <div className="text-lg md:text-xl font-medium flex items-center">
          <Link
            href="/"
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2"
          >
            <div className="flex items-center"></div>
            <span className="text-neutral dark:text-neutral font-bold">
              Xerxes Portfolio
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 items-center lg:top-1/2 lg:-translate-y-1/2">
          <nav
            ref={navRef}
            className="relative flex items-center gap-2 md:gap-4 rounded-full bg-white dark:bg-white backdrop-blur-sm px-2 py-2 shadow-md border border-border transition-all duration-20"
          >
            <motion.div
              className="absolute -z-10 bg-primary pointer-events-none"
              animate={indicatorProps}
              transition={{ type: "spring", stiffness: 600, damping: 30 }}
            />
            <button
              ref={homeRef}
              onClick={() => scrollToSection("home")}
              className={getNavItemClass("home")}
            >
              <span className="relative z-10">Home</span>
            </button>
            <button
              ref={aboutRef}
              onClick={() => scrollToSection("about")}
              className={getNavItemClass("about")}
            >
              <span className="relative z-10">About</span>
            </button>
            <button
              ref={skillsRef}
              onClick={() => scrollToSection("skills")}
              className={getNavItemClass("skills")}
            >
              <span className="relative z-10">Skills</span>
            </button>
            <button
              ref={projectsRef}
              onClick={() => scrollToSection("projects")}
              className={getNavItemClass("projects")}
            >
              <span className="relative z-10">Projects</span>
            </button>
            <button
              ref={contactRef}
              onClick={() => scrollToSection("contact")}
              className={getNavItemClass("contact")}
            >
              <span className="relative z-10">Contact</span>
            </button>
          </nav>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 p-1"
          aria-label="Toggle mobile menu"
        >
          <motion.span
            className="w-6 h-0.5 bg-neutral dark:bg-neutral block"
            animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 6 : 0,
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-neutral dark:bg-neutral block"
            animate={{
              opacity: isMobileMenuOpen ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-neutral dark:bg-neutral block"
            animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? -6 : 0,
            }}
            transition={{ duration: 0.2 }}
          />
        </button>

        {/* Desktop Social Dropdown */}
        <div className="hidden md:block">
          <SocialDropdown />
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white dark:bg-white backdrop-blur-sm border-b border-border shadow-lg"
          >
            <nav className="flex flex-col py-4 px-6 space-y-4">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id as Section)}
                  className={`text-left py-2 px-3 rounded-lg transition-all duration-200 ${
                    activeSection === id
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-neutral dark:text-neutral hover:bg-neutral/10"
                  }`}
                >
                  {label}
                </button>
              ))}
              <div className="pt-4 border-t border-border">
                <SocialDropdown />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
