"use client";

import FadeContent from "../animations/FadeContent/FadeContent";
import GlareHover from "../animations/GlareHover/GlareHover";
import DecryptedText from "../textanimations/DecryptedText/DecryptedText";
import { useState } from "react";
import { useModal } from "./ModalProvider";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { setSelectedProject } = useModal();

  const projects = [
    // Professional projects first (sorted by latest date)
    {
      id: "chartlink",
      title: "ChartLink Clinic Workflow System",
      description:
        "A scalable clinic workflow system built with Supabase for real-time database operations, authentication, and storage. Features responsive TypeScript + Next.js frontend with enhanced UX for medical staff.",
      fullDescription:
        "Constructed a scalable clinic workflow system using Supabase (auth, real-time DB, storage), boosting operational efficiency by 40%. Created a responsive TypeScript + Next.js front-end, resulting in faster load times 30% and enhanced UX for staff. Executed agile development processes and managed client feedback cycles, ensuring 100% on time delivery of features.",
      category: "professional",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "Real-time",
        "Healthcare",
      ],
      type: "Web Application",
      date: "Aug 2024 – Feb 2025",
      isPublic: false, // Client project - no public GitHub
      features: [
        "Scalable clinic workflow system",
        "Supabase real-time database integration",
        "Authentication and storage management",
        "Responsive TypeScript + Next.js frontend",
        "Agile development processes",
        "Client feedback management",
      ],
      achievements: [
        "40% boost in operational efficiency",
        "30% faster load times",
        "100% on-time feature delivery",
        "Enhanced UX for medical staff",
        "Successful client project completion",
      ],
    },
    {
      id: "clinical-management",
      title: "Clinical Management System",
      description:
        "A management system designed for small and medium-sized clinics that aims to streamline the workflow of receptionists, medical technologists, and doctors.",
      fullDescription:
        "A comprehensive management system designed specifically for small and medium-sized clinics. The system streamlines workflows for receptionists, medical technologists, and doctors, improving operational efficiency and patient care delivery.",
      category: "professional",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Healthcare"],
      type: "Web Application",
      date: "Jan 24, 2024",
      isPublic: true,
      githubUrl: "https://github.com/lalalance12/clinical-management-system",
      features: [
        "Multi-role user management",
        "Patient record management",
        "Appointment scheduling",
        "Workflow optimization",
        "Real-time notifications",
      ],
      achievements: [
        "Streamlined clinic operations",
        "Improved patient care workflow",
        "Multi-user role support",
      ],
    },
    {
      id: "silahis-publication",
      title: "Silahis Student Publication Platform",
      description:
        "A cloud-native publication platform built with modern web technologies for student journalism and content management.",
      fullDescription:
        "A modern, cloud-native publication platform developed using AWS services including EC2, S3, and Route 53. Features custom CMS built with React and Laravel, automated content publishing, and mobile-responsive design. Successfully deployed and managing the Silahis Student Publication website.",
      category: "professional",
      technologies: ["React", "Laravel", "AWS", "EC2", "S3", "Route 53"],
      type: "Web Platform",
      date: "Sep 2024 – Jul 2025",
      isPublic: false,
      liveUrl: "https://thesilahispublication.com",
      features: [
        "Cloud-native architecture",
        "Custom CMS with React & Laravel",
        "Automated article publishing",
        "Mobile-responsive design",
        "AWS infrastructure management",
      ],
      achievements: [
        "50% reduction in manual maintenance",
        "100% real-time article accessibility",
        "Successful cloud deployment",
        "Mobile-optimized user experience",
      ],
    },
    // Featured academic project
    {
      id: "guideon-chatbot",
      title: "Guideon – AI-Powered Learning Pathway Recommender",
      description:
        "An AI-powered learning assistant that recommends personalized learning paths using a locally hosted LLM (Llama 3 via Ollama). Built with Django, PostgreSQL (pgvector), and React, featuring hybrid filtering aligned with the Philippine Skills Framework.",
      fullDescription:
        "Built a full-stack intelligent assistant that recommends personalized learning paths using a locally hosted LLM (Llama 3 via Ollama), integrated with Django, PostgreSQL (pgvector), and React. Created hybrid filtering (collaborative + content-based) aligned with the Philippine Skills Framework (PSF). Achieved a CUQ usability score of 71.8 (SD = ±11.7), indicating high user satisfaction and effective design.",
      category: "academic",
      technologies: [
        "Django",
        "React",
        "PostgreSQL",
        "pgvector",
        "Llama 3",
        "Ollama",
      ],
      type: "AI/ML Application",
      date: "Latest Research",
      isPublic: true,
      githubUrl: "https://github.com/lalalance12/guideon-chatbot",
      features: [
        "AI-powered learning path recommendations",
        "Locally hosted LLM (Llama 3 via Ollama)",
        "Hybrid filtering system (collaborative + content-based)",
        "Philippine Skills Framework (PSF) alignment",
        "Full-stack Django + React architecture",
        "PostgreSQL with pgvector for embeddings",
      ],
      achievements: [
        "CUQ usability score of 71.8 (SD = ±11.7)",
        "High user satisfaction rating",
        "PSF-aligned learning recommendations",
        "Successful hybrid filtering implementation",
        "Research-grade AI application",
      ],
    },
    // Academic projects (sorted by latest date)
    {
      id: "flower-classification",
      title: "CNN-based Multi-Class Flower Classification",
      description:
        "A deep learning project that leverages Convolutional Neural Networks (CNN) and transfer learning to classify images of flowers into five distinct categories: Lilly, Lotus, Sunflower, Orchid, and Tu...",
      fullDescription:
        "A comprehensive deep learning project that leverages Convolutional Neural Networks (CNN) and transfer learning to classify images of flowers into five distinct categories: Lilly, Lotus, Sunflower, Orchid, and Tulip. This project demonstrates advanced computer vision techniques and machine learning model deployment.",
      category: "academic",
      technologies: [
        "Python",
        "TensorFlow",
        "CNN",
        "Transfer Learning",
        "OpenCV",
      ],
      type: "Machine Learning",
      date: "Dec 25, 2024",
      isPublic: true,
      githubUrl:
        "https://github.com/lalalance12/CNN-based-multi-class-flower-classification",
      features: [
        "Multi-class flower classification (5 categories)",
        "Transfer learning implementation",
        "CNN architecture optimization",
        "Data preprocessing pipeline",
        "Model evaluation and metrics",
      ],
      achievements: [
        "High accuracy classification model",
        "Efficient transfer learning approach",
        "Comprehensive dataset handling",
      ],
    },
    {
      id: "monte-carlo-simulation",
      title: "Counter-Strike 2 Item Probability Simulation",
      description:
        "A Monte Carlo simulation to model the probabilities of obtaining items of varying rarity, wear condition, and StatTrek availability in the first-person shooter video game Counter-Strike 2.",
      fullDescription:
        "An advanced Monte Carlo simulation that accurately models the complex probability systems in Counter-Strike 2. The simulation predicts item drop rates considering rarity levels, wear conditions, and StatTrek availability, providing valuable insights for players and game economists.",
      category: "academic",
      technologies: ["Python", "Monte Carlo", "Statistics", "Data Analysis"],
      type: "Simulation",
      date: "Latest",
      isPublic: true,
      githubUrl:
        "https://github.com/lalalance12/monte-carlo-simulation-of-item-probability-in-counter-strike-2",
      features: [
        "Monte Carlo probability modeling",
        "Multi-factor item simulation",
        "Statistical analysis tools",
        "Wear condition calculations",
        "StatTrek probability modeling",
      ],
      achievements: [
        "Accurate probability modeling",
        "Complex gaming economics simulation",
        "Statistical analysis framework",
      ],
    },
    {
      id: "heart-disease-prediction",
      title: "Heart Disease Prediction Model",
      description:
        "A machine learning project designed to predict heart disease risk using the Random Forest classification algorithm.",
      fullDescription:
        "A comprehensive machine learning project that utilizes the Random Forest classification algorithm to predict heart disease risk. This model analyzes various health parameters to provide accurate risk assessments and supports medical decision-making processes.",
      category: "academic",
      technologies: [
        "Python",
        "Scikit-learn",
        "Random Forest",
        "Pandas",
        "NumPy",
      ],
      type: "Machine Learning",
      date: "Nov 27, 2024",
      isPublic: true,
      githubUrl:
        "https://github.com/lalalance12/heart-disease-prediction-model-using-random-forest",
      features: [
        "Random Forest classification",
        "Feature importance analysis",
        "Risk prediction scoring",
        "Data visualization",
        "Model performance metrics",
      ],
      achievements: [
        "High prediction accuracy",
        "Feature importance insights",
        "Medical decision support",
      ],
    },
    {
      id: "binary-classification",
      title: "Binary Classification Collection",
      description:
        "A collection of Jupyter notebooks for binary classification tasks. Includes simple and mid-level TensorFlow models with steps for data preprocessing, training, and evaluation.",
      fullDescription:
        "A comprehensive collection of Jupyter notebooks demonstrating binary classification techniques using TensorFlow. Perfect for students and practitioners looking to understand classification algorithms, from basic implementations to advanced techniques.",
      category: "academic",
      technologies: ["Python", "TensorFlow", "Jupyter", "NumPy", "Pandas"],
      type: "Machine Learning",
      date: "Nov 21, 2024",
      isPublic: true,
      githubUrl: "https://github.com/lalalance12/binary-classification",
      features: [
        "Multiple classification algorithms",
        "Data preprocessing techniques",
        "Model training and evaluation",
        "Performance comparison",
        "Interactive Jupyter notebooks",
      ],
      achievements: [
        "Educational resource creation",
        "Comprehensive algorithm coverage",
        "Practical implementation examples",
      ],
    },
    {
      id: "multiplexing-videos",
      title: "Real-time Video Processing System",
      description:
        "Real-time parallel video processing using MPI and OpenCV. Applies multiple effects simultaneously to live video feed.",
      fullDescription:
        "A high-performance real-time video processing system that utilizes MPI (Message Passing Interface) and OpenCV to apply multiple visual effects simultaneously to live video streams. Demonstrates parallel computing and computer vision techniques.",
      category: "academic",
      technologies: ["C++", "MPI", "OpenCV", "Parallel Computing"],
      type: "Computer Vision",
      date: "Updated recently",
      isPublic: true,
      githubUrl: "https://github.com/lalalance12/multiplexing-videos",
      features: [
        "Real-time video processing",
        "MPI parallel computing",
        "Multiple simultaneous effects",
        "Live video feed handling",
        "Performance optimization",
      ],
      achievements: [
        "High-performance parallel processing",
        "Real-time video manipulation",
        "Advanced computer vision techniques",
      ],
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "academic",
      label: "Academic",
      count: projects.filter((p) => p.category === "academic").length,
    },
    {
      id: "professional",
      label: "Professional",
      count: projects.filter((p) => p.category === "professional").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="w-full px-8 py-24 bg-white dark:bg-white relative"
    >
      {/* Clean background without overlay issues */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-slate-50/50 dark:from-slate-900/50 dark:via-slate-800 dark:to-slate-900/50"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of my technical expertise across machine learning, web
            development, and software engineering
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-105"
              }`}
            >
              <span>{filter.label}</span>
              <span
                className={`px-2 py-0.5 rounded-full text-xs ${
                  activeFilter === filter.id
                    ? "bg-white/20 text-white"
                    : "bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-400"
                }`}
              >
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project, index) => (
            <FadeContent
              key={project.id}
              blur={true}
              duration={800}
              delay={index * 100}
              className="h-full"
            >
              <div
                className="group bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-2xl p-6 border border-slate-200 dark:border-slate-600 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 h-full cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image/Icon Placeholder */}
                <div className="relative overflow-hidden rounded-xl mb-6 bg-gradient-to-br from-primary/60 via-primary/50 to-primary-dark/60 dark:from-primary/40 dark:via-primary/30 dark:to-primary-dark/40 flex items-center justify-center aspect-[4/3] group-hover:shadow-lg transition-shadow duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Project Type Icon */}
                  <div className="relative z-10">
                    {project.type === "Machine Learning" && (
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                        className="text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform duration-500"
                      >
                        <path
                          fill="currentColor"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                        />
                      </svg>
                    )}
                    {project.type === "Computer Vision" && (
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                        className="text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform duration-500"
                      >
                        <path
                          fill="currentColor"
                          d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 8a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z"
                        />
                      </svg>
                    )}
                    {project.type === "Web Application" && (
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                        className="text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform duration-500"
                      >
                        <path
                          fill="currentColor"
                          d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"
                        />
                      </svg>
                    )}
                    {project.type === "Simulation" && (
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                        className="text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform duration-500"
                      >
                        <path
                          fill="currentColor"
                          d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-12H7v2h8V5z"
                        />
                      </svg>
                    )}
                    {project.type === "Web Platform" && (
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                        className="text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform duration-500"
                      >
                        <path
                          fill="currentColor"
                          d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM21 18H3V6h18v12z"
                        />
                      </svg>
                    )}
                  </div>

                  {/* Click to view overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <svg
                        className="w-8 h-8 mx-auto mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      <p className="text-sm font-medium">
                        Click to view details
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 leading-tight flex-1">
                      {project.title}
                    </h3>
                    <div
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.category === "academic"
                          ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                          : "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                      }`}
                    >
                      {project.category === "academic"
                        ? "Academic"
                        : "Professional"}
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>{project.type}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-md text-xs font-medium border border-slate-200 dark:border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-md text-xs font-medium border border-slate-200 dark:border-slate-600">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="text-xs text-slate-500 dark:text-slate-400 pt-2">
                    {project.date}
                  </div>
                </div>
              </div>
            </FadeContent>
          ))}
        </div>

        {/* Enticing GitHub Section */}
        <FadeContent blur={true} duration={1000} delay={800}>
          <div className="mt-16 mb-12">
            <div className="relative">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary-dark/5 to-primary/10 rounded-2xl blur-3xl"></div>

              <div className="relative bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-slate-200 dark:border-slate-600 shadow-2xl">
                <div className="text-center space-y-6">
                  {/* Animated GitHub Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                      <svg
                        className="relative w-16 h-16 text-slate-700 dark:text-slate-200"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                  </div>

                  {/* Animated Text */}
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200">
                      <DecryptedText
                        text="Discover More Code"
                        speed={150}
                        maxIterations={15}
                        sequential={true}
                        animateOn="view"
                        className="text-slate-800 dark:text-slate-200"
                        encryptedClassName="text-primary"
                      />
                    </h3>

                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">

                    <DecryptedText
                        text="Explore my complete collection of projects, experiments,
                        and contributions on GitHub. From machine learning models
                        to full-stack applications, there&apos;s always something
                        new to discover."
                        speed={40}
                        maxIterations={15}
                        sequential={true}
                        animateOn="view"
                        className="text-slate-800 dark:text-slate-200"
                        encryptedClassName="text-primary"
                      />
                      
                    </p>
                  </div>

                  {/* Interactive Button */}
                  <div className="flex justify-center pt-4">
                    <GlareHover
                      width="auto"
                      height="auto"
                      background="transparent"
                      borderRadius="1rem"
                      borderColor="transparent"
                      glareColor="#f97316"
                      glareOpacity={0.1}
                      glareSize={200}
                      transitionDuration={600}
                    >
                      <a
                        href="https://github.com/lalalance12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-700 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                      >
                        <svg
                          className="w-6 h-6 text-neutral-200 group-hover:rotate-12 transition-transform duration-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span className="text-neutral-200">
                          Visit My GitHub
                        </span>
                        <svg
                          className="w-5 h-5 text-neutral-200 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    </GlareHover>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-600">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">17+</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Repositories
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">11</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Stars
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Commits
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
