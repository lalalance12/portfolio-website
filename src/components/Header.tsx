"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import SocialDropdown from "./SocialDropdown";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setActiveSection(sectionId);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavItemClass = (sectionId: string) => {
    const baseClass =
      "px-4 py-1 rounded-full text-sm transition-all duration-500 ease-out relative overflow-hidden";
    const isCurrentSection = activeSection === sectionId;

    if (isCurrentSection) {
      return `${baseClass} font-medium text-secondary bg-primary dark:bg-primary shadow-lg transform scale-105`;
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
        <div className="w-2 h-2 rounded-full bg-primary dark:bg-primary absolute left-[-10px]"></div>
        <nav className="flex items-center rounded-full bg-white dark:bg-white backdrop-blur-sm px-2 py-2 shadow-md border border-border transition-all duration-300">
          <button
            onClick={() => scrollToSection("home")}
            className={getNavItemClass("home")}
          >
            <span className="relative z-10">Home</span>
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={getNavItemClass("about")}
          >
            <span className="relative z-10">About</span>
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className={getNavItemClass("skills")}
          >
            <span className="relative z-10">Skills</span>
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={getNavItemClass("projects")}
          >
            <span className="relative z-10">Projects</span>
          </button>
          <button
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
