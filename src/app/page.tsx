"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import HeroSection from "../components/HeroSection";
import { SectionErrorBoundary } from "../components/SectionErrorBoundary";

// Lazy load below-the-fold sections for better initial performance
const AboutSection = dynamic(() => import("../components/AboutSection"), {
  loading: () => <div className="w-full h-96 animate-pulse bg-slate-100" />,
});

const SkillsSection = dynamic(() => import("../components/SkillsSection"), {
  loading: () => <div className="w-full h-96 animate-pulse bg-slate-50" />,
});

const ProjectsSection = dynamic(() => import("../components/ProjectsSection"), {
  loading: () => <div className="w-full h-96 animate-pulse bg-slate-100" />,
});

const ContactSection = dynamic(() => import("../components/ContactSection"), {
  loading: () => <div className="w-full h-96 animate-pulse bg-slate-50" />,
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
        <SectionErrorBoundary sectionName="About">
          <AboutSection />
        </SectionErrorBoundary>
        <SectionErrorBoundary sectionName="Skills">
          <SkillsSection />
        </SectionErrorBoundary>
        <SectionErrorBoundary sectionName="Projects">
          <ProjectsSection />
        </SectionErrorBoundary>
        <SectionErrorBoundary sectionName="Contact">
          <ContactSection />
        </SectionErrorBoundary>
      </div>
    </motion.div>
  );
}
