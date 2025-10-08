"use client";
import Link from "next/link";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SocialDropdown from "./SocialDropdown";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useScrollContext } from "@/contexts/ScrollContext";

type Section = "home" | "about" | "skills" | "projects" | "contact";

export default function Header() {
  const scrollToSection = useScrollToSection();
  const { scrollY } = useScrollContext(); // Use shared scroll context
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [targetSection, setTargetSection] = useState<Section>("home");
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

  // Cache section positions to avoid repeated DOM queries
  const sectionPositionsRef = useRef<
    Map<Section, { top: number; bottom: number }>
  >(new Map());

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

  const handleScrollToSection = (sectionId: Section) => {
    // Set active section immediately for visual feedback
    setActiveSection(sectionId);
    setTargetSection(sectionId);
    setUserNavigatedSection(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu when navigating

    scrollToSection(sectionId);

    // Clear user navigation state after scroll completes
    setTimeout(() => {
      setUserNavigatedSection(null);
    }, 1200);
  };

  // Update section positions cache (only on resize or mount)
  const updateSectionPositions = useCallback(() => {
    const sections: Section[] = [
      "home",
      "about",
      "skills",
      "projects",
      "contact",
    ];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        sectionPositionsRef.current.set(sectionId, {
          top: element.offsetTop,
          bottom: element.offsetTop + element.offsetHeight,
        });
      }
    });
  }, []);

  // Initialize section positions on mount and window resize
  useEffect(() => {
    updateSectionPositions();

    const handleResize = () => {
      updateSectionPositions();
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [updateSectionPositions]);

  // Optimized scroll detection using cached positions and shared scroll context
  useEffect(() => {
    // Don't override user navigation immediately after clicking
    if (userNavigatedSection !== null) {
      const sectionPos = sectionPositionsRef.current.get(userNavigatedSection);
      if (sectionPos) {
        const threshold = 100;
        if (
          scrollY >= sectionPos.top - threshold &&
          scrollY < sectionPos.bottom - threshold
        ) {
          setUserNavigatedSection(null);
        }
      }
      return;
    }

    // Reset to home when at the very top
    if (scrollY < 100) {
      if (targetSection !== "home") setTargetSection("home");
      return;
    }

    const windowHeight = window.innerHeight;
    const sections: Section[] = [
      "home",
      "about",
      "skills",
      "projects",
      "contact",
    ];

    // Find which section is currently most visible
    let currentSection: Section = "home";
    let maxVisibility = 0;

    for (const sectionId of sections) {
      const sectionPos = sectionPositionsRef.current.get(sectionId);
      if (sectionPos) {
        // Calculate how much of the section is visible
        const sectionTop = sectionPos.top;
        const sectionBottom = sectionPos.bottom;
        const viewportTop = scrollY;
        const viewportBottom = scrollY + windowHeight;

        // Calculate visible portion
        const visibleTop = Math.max(sectionTop, viewportTop);
        const visibleBottom = Math.min(sectionBottom, viewportBottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        // Prioritize sections near the top of viewport
        const distanceFromTop = Math.abs(sectionTop - scrollY);
        const visibility = visibleHeight - distanceFromTop * 0.3;

        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          currentSection = sectionId;
        }
      }
    }

    // Special case: if we're near the bottom, highlight contact
    const docHeight = document.documentElement.scrollHeight;
    const scrollBottom = scrollY + windowHeight;
    if (docHeight - scrollBottom < 100) {
      currentSection = "contact";
    }

    if (currentSection !== targetSection) {
      setTargetSection(currentSection);
    }
  }, [scrollY, targetSection, userNavigatedSection]);

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
      setActiveSection("home");
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

    return `${baseClass} text-neutral hover:bg-neutral/10 hover:scale-105`;
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full px-4 md:px-6 lg:px-8 py-4 md:py-6 flex justify-between items-center bg-white backdrop-blur-sm border-b border-border shadow-sm">
        <div className="text-lg md:text-xl font-medium flex items-center">
          <Link
            href="/"
            onClick={() => handleScrollToSection("home")}
            className="flex items-center gap-2"
          >
            <div className="flex items-center"></div>
            <span className="text-neutral font-bold">Xerxes Portfolio</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 items-center lg:top-1/2 lg:-translate-y-1/2">
          <nav
            ref={navRef}
            className="relative flex items-center gap-2 md:gap-4 rounded-full bg-white backdrop-blur-sm px-2 py-2 shadow-md border border-border transition-all duration-20"
          >
            <motion.div
              className="absolute -z-10 bg-primary pointer-events-none"
              animate={indicatorProps}
              transition={{ type: "spring", stiffness: 600, damping: 30 }}
            />
            <button
              ref={homeRef}
              onClick={() => handleScrollToSection("home")}
              className={getNavItemClass("home")}
              aria-label="Navigate to home section"
              aria-current={activeSection === "home" ? "page" : undefined}
            >
              <span className="relative z-10">Home</span>
            </button>
            <button
              ref={aboutRef}
              onClick={() => handleScrollToSection("about")}
              className={getNavItemClass("about")}
              aria-label="Navigate to about section"
              aria-current={activeSection === "about" ? "page" : undefined}
            >
              <span className="relative z-10">About</span>
            </button>
            <button
              ref={skillsRef}
              onClick={() => handleScrollToSection("skills")}
              className={getNavItemClass("skills")}
              aria-label="Navigate to skills section"
              aria-current={activeSection === "skills" ? "page" : undefined}
            >
              <span className="relative z-10">Skills</span>
            </button>
            <button
              ref={projectsRef}
              onClick={() => handleScrollToSection("projects")}
              className={getNavItemClass("projects")}
              aria-label="Navigate to projects section"
              aria-current={activeSection === "projects" ? "page" : undefined}
            >
              <span className="relative z-10">Projects</span>
            </button>
            <button
              ref={contactRef}
              onClick={() => handleScrollToSection("contact")}
              className={getNavItemClass("contact")}
              aria-label="Navigate to contact section"
              aria-current={activeSection === "contact" ? "page" : undefined}
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
            className="w-6 h-0.5 bg-neutral block"
            animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 6 : 0,
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-neutral block"
            animate={{
              opacity: isMobileMenuOpen ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-neutral block"
            animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? -6 : 0,
            }}
            transition={{ duration: 0.2 }}
          />
        </button>

        {/* Desktop Resume & Social */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Xerxes_Lompon_SoftwareEngineer.pdf"
            download="Xerxes_Lompon_Resume.pdf"
            className="group relative inline-flex items-center justify-center gap-2 bg-primary rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 w-10 h-10 p-0 xl:w-auto xl:h-auto xl:px-4 xl:py-2 overflow-hidden"
            style={{ color: "#FFFFFF" }}
            aria-label="Download resume"
            title="Download Resume"
          >
            <svg
              className="w-5 h-5 xl:w-4 xl:h-4 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="hidden xl:inline">Resume</span>
          </a>
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
            className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white backdrop-blur-sm border-b border-border shadow-lg"
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
                  onClick={() => handleScrollToSection(id as Section)}
                  className={`text-left py-2 px-3 rounded-lg transition-all duration-200 ${
                    activeSection === id
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-neutral hover:bg-neutral/10"
                  }`}
                  aria-label={`Navigate to ${label.toLowerCase()} section`}
                  aria-current={activeSection === id ? "page" : undefined}
                >
                  {label}
                </button>
              ))}
              <div className="pt-4 border-t border-border space-y-4 justify-center items-center">
                <a
                  href="/Xerxes_Lompon_SoftwareEngineer.pdf"
                  download="Xerxes_Lompon_SoftwareEngineer.pdf"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-primary rounded-lg font-medium transition-all duration-200"
                  style={{ color: "#FFFFFF" }}
                  aria-label="Download resume"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Resume
                </a>
                <SocialDropdown isMobile={true} />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
