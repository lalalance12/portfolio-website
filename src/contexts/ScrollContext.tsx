"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";

interface ScrollContextType {
  scrollY: number;
  scrollProgress: number;
}

const ScrollContext = createContext<ScrollContextType>({
  scrollY: 0,
  scrollProgress: 0,
});

export const useScrollContext = () => useContext(ScrollContext);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const ticking = useRef(false);

  const updateScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const maxScroll = documentHeight - windowHeight;
    const progress = maxScroll > 0 ? currentScrollY / maxScroll : 0;

    setScrollY(currentScrollY);
    setScrollProgress(progress);
    ticking.current = false;
  }, []);

  const requestTick = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(updateScroll);
      ticking.current = true;
    }
  }, [updateScroll]);

  useEffect(() => {
    // Initialize on mount
    updateScroll();

    window.addEventListener("scroll", requestTick, { passive: true });
    return () => window.removeEventListener("scroll", requestTick);
  }, [requestTick, updateScroll]);

  return (
    <ScrollContext.Provider value={{ scrollY, scrollProgress }}>
      {children}
    </ScrollContext.Provider>
  );
}
