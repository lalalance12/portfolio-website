"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SocialDropdown from "./SocialDropdown";

type Section = "home" | "about" | "skills" | "projects" | "contact";

export default function Header() {
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  const [targetSection, setTargetSection] = useState<Section | null>(null);
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

  const refs: Record<Section, React.RefObject<HTMLButtonElement | null>> = {
    home: useRef<HTMLButtonElement>(null),
    about: useRef<HTMLButtonElement>(null),
    skills: useRef<HTMLButtonElement>(null),
    projects: useRef<HTMLButtonElement>(null),
    contact: useRef<HTMLButtonElement>(null),
  };

  const scrollToSection = (sectionId: Section) => {
    setTargetSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
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
      const scrollPosition = window.scrollY + 100;

      let newSection: Section | null = null;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
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
  }, [targetSection]);

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
    } else {
      const button = refs[targetSection]?.current;
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
    }
  }, [targetSection]);

  const getNavItemClass = (sectionId: Section) => {
    const baseClass =
      "px-4 py-1 rounded-full text-sm transition-all duration-300 ease-out relative overflow-hidden";
    const isCurrentSection = activeSection === sectionId;

    if (isCurrentSection) {
      return `${baseClass} font-medium text-secondary shadow-lg transform scale-105`;
    }

    return `${baseClass} text-neutral dark:text-neutral hover:bg-neutral/10 dark:hover:bg-neutral/10 hover:scale-105`;
  };

  return (
    <header className="sticky top-0 z-50 w-full px-8 py-6 flex justify-between items-center bg-white dark:bg-white backdrop-blur-sm border-b border-border shadow-sm">
      <div className="text-xl font-medium flex items-center">
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
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
        <nav
          ref={navRef}
          className="relative flex items-center gap-4 rounded-full bg-white dark:bg-white backdrop-blur-sm px-2 py-2 shadow-md border border-border transition-all duration-300"
        >
          <motion.div
            className="absolute z-0 bg-primary"
            animate={indicatorProps}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            onAnimationComplete={() => setActiveSection(targetSection)}
          />
          <button
            ref={refs.home}
            onClick={() => scrollToSection("home")}
            className={getNavItemClass("home")}
          >
            <span className="relative z-10">Home</span>
          </button>
          <button
            ref={refs.about}
            onClick={() => scrollToSection("about")}
            className={getNavItemClass("about")}
          >
            <span className="relative z-10">About</span>
          </button>
          <button
            ref={refs.skills}
            onClick={() => scrollToSection("skills")}
            className={getNavItemClass("skills")}
          >
            <span className="relative z-10">Skills</span>
          </button>
          <button
            ref={refs.projects}
            onClick={() => scrollToSection("projects")}
            className={getNavItemClass("projects")}
          >
            <span className="relative z-10">Projects</span>
          </button>
          <button
            ref={refs.contact}
            onClick={() => scrollToSection("contact")}
            className={getNavItemClass("contact")}
          >
            <span className="relative z-10">Contact</span>
          </button>
        </nav>
      </div>
      <SocialDropdown />
    </header>
  );
}
