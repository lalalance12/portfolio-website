"use client";
import { useState, useEffect } from "react";

const titles = [
  "Software Engineer",
  "Full-Stack Developer",
  "Web Developer",
  "Frontend Developer",
  "Backend Developer",
  "AI/ML Enthusiast",
];

export default function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      // Typing animation
      if (displayedText.length < currentTitle.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        }, 100); // Typing speed: 100ms per character
      } else {
        // Finished typing, wait before starting to delete
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause for 2 seconds after typing
      }
    } else {
      // Deleting animation
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50); // Deleting speed: 50ms per character (faster)
      } else {
        // Finished deleting, move to next title
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [currentIndex, displayedText, isTyping]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Blink every 500ms

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="text-primary dark:text-primary">
      {displayedText}
      <span
        className={`${
          showCursor ? "opacity-100" : "opacity-0"
        } transition-opacity duration-100`}
      >
        |
      </span>
    </span>
  );
}
