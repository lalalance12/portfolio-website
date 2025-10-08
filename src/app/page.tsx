"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import HeroSection from "../components/HeroSection";

// Lazy load below-the-fold sections for better initial performance
const AboutSection = dynamic(() => import("../components/AboutSection"), {
  loading: () => <div className="w-full h-96" />,
});

const SkillsSection = dynamic(() => import("../components/SkillsSection"), {
  loading: () => <div className="w-full h-96" />,
});

const ProjectsSection = dynamic(() => import("../components/ProjectsSection"), {
  loading: () => <div className="w-full h-96" />,
});

const ContactSection = dynamic(() => import("../components/ContactSection"), {
  loading: () => <div className="w-full h-96" />,
});

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
    >
      <HeroSection />
      <div className="max-w-7xl mx-auto">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </motion.div>
  );
}
