import { useCallback } from "react";

/**
 * Custom hook for smooth scrolling to sections with header offset
 * @returns Function to scroll to a section by ID
 */
export const useScrollToSection = () => {
  return useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const header = document.querySelector("header");
    const headerHeight = header?.offsetHeight ?? 100;
    const offset = 20; // Additional spacing
    const scrollPosition = Math.max(
      0,
      element.offsetTop - headerHeight - offset
    );

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  }, []);
};

