export type ProjectImage = {
  src: string;
  caption: string;
};

export type CaseStudySection = {
  heading: string;
  body?: string;
  items?: string[];
};

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  year: string;
  discipline: string;
  featured: boolean;
  role?: string;
  stack: string[];
  links: {
    github?: string;
    live?: string;
  };
  /** Source code is private (client work) */
  isPrivate?: boolean;
  highlight?: string;
  cover?: ProjectImage;
  images?: ProjectImage[];
  caseStudy?: {
    intro: string;
    sections: CaseStudySection[];
  };
};

export const projects: Project[] = [
  {
    slug: "likai",
    title: "LikAI",
    oneLiner:
      "A B2B platform on the Internet Computer Protocol that helps Philippine shrimp processors transform their supplier network into compliant, resilient farms through AI coaching, real-time monitoring, and on-chain certification.",
    year: "2025",
    discipline: "AI · Blockchain",
    featured: true,
    role: "AI Integration & Frontend",
    stack: [
      "React 19",
      "Vite",
      "Python",
      "LangChain",
      "Grok API",
      "ICP Blockchain",
      "Motoko",
      "Radix UI",
      "Tailwind CSS",
    ],
    links: {
      github: "https://github.com/Web3-Iligan/LikAI",
      live: "https://s7zgf-2iaaa-aaaad-qhoyq-cai.icp0.io/",
    },
    highlight: "WCHL25 Global Finalist",
    cover: {
      src: "/projects/likAI/likai-intro.png",
      caption: "LikAI platform overview",
    },
    images: [
      {
        src: "/projects/likAI/likai-chatbot.png",
        caption: "AI chatbot — farmer assistance interface",
      },
      {
        src: "/projects/likAI/likai-farm-assessment.png",
        caption: "Farm assessment — compliance evaluation",
      },
      {
        src: "/projects/likAI/likai-milestones.png",
        caption: "Milestones — progress tracking",
      },
    ],
    caseStudy: {
      intro:
        "LikAI is a blockchain-powered B2B platform built on the Internet Computer Protocol that helps Philippine shrimp processors turn their supplier network into compliant, resilient farms — AI coaching for farmers, real-time monitoring for processors, and on-chain certification.",
      sections: [
        {
          heading: "Situation",
          body: "Philippine shrimp exporters depend on networks of small supplier farms, and keeping those farms compliant with GAqP (Good Aquaculture Practices) is a real, ongoing industry struggle — non-compliance threatens export accreditation. Our team, Web3-Iligan, took this problem to the World Computer Hacker League 2025, building on the Internet Computer Protocol.",
        },
        {
          heading: "Task",
          body: "In a team of five, I owned the AI side of the platform — the farmer-facing chatbot and onboarding intelligence — plus major frontend work, including migrating the entire architecture off Next.js.",
        },
        {
          heading: "Action",
          items: [
            "Built the AI chatbot with Python, LangChain, and the Grok API for 24/7 biosecurity guidance",
            "Developed the AI-driven farmer onboarding that generates personalized compliance action plans",
            "Migrated the frontend from Next.js to Vite React for better performance",
            "Implemented design improvements across the platform UI",
            "Worked alongside teammates building the ICP canisters, on-chain NFT certification, and Internet Identity auth",
          ],
        },
        {
          heading: "Result",
          items: [
            "Advanced to the WCHL 2025 Global Finale — top 30% of teams worldwide",
            "Live deployment on the Internet Computer Protocol",
            "A working AI coaching pipeline from onboarding to daily farmer guidance",
          ],
        },
      ],
    },
  },
  {
    slug: "chartlink",
    title: "ChartLink",
    oneLiner:
      "A scalable clinic workflow system with real-time database operations, authentication, and storage — built for doctors, nurses, medical technologists, and pharmacists.",
    year: "2024–2025",
    discipline: "Healthcare",
    featured: true,
    role: "Full-Stack Developer",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    links: {},
    isPrivate: true,
    cover: {
      src: "/projects/chartlink/admin-dashboard.png",
      caption: "Admin dashboard — system overview",
    },
    images: [
      {
        src: "/projects/chartlink/nurse-dashboard.png",
        caption: "Nurse dashboard — patient management",
      },
      {
        src: "/projects/chartlink/doctor-dashboard.png",
        caption: "Doctor dashboard — main interface",
      },
      {
        src: "/projects/chartlink/doctor-patientRecord-patientInfo.png",
        caption: "Doctor — patient information record",
      },
      {
        src: "/projects/chartlink/medtech-labRequest.png",
        caption: "Medical technologist — lab requests queue",
      },
      {
        src: "/projects/chartlink/pharmacist-inventory.png",
        caption: "Pharmacist — inventory management",
      },
    ],
    caseStudy: {
      intro:
        "ChartLink is a clinic workflow system covering the daily work of doctors, nurses, medical technologists, pharmacists, and admins — built on Supabase with a Next.js + TypeScript frontend.",
      sections: [
        {
          heading: "Situation",
          body: "The clinic was running on paper and manual records with no digital system, while its patient volume kept growing. Records were slow to find, and handoffs between roles — nurse to doctor to lab to pharmacy — were all manual.",
        },
        {
          heading: "Task",
          body: "I was engaged to deliver an MVP of a complete clinic workflow system within the engagement period. I handled all of the engineering — architecture, backend, frontend, and delivery — while a partner covered design and client management.",
        },
        {
          heading: "Action",
          items: [
            "Designed role-based workflows for five staff types: admin, nurse, doctor, medical technologist, and pharmacist",
            "Built the backend on Supabase — authentication, real-time database, and file storage",
            "Developed a responsive Next.js + TypeScript frontend tuned for fast load times",
            "Ran agile sprints with client feedback cycles between each delivery",
          ],
        },
        {
          heading: "Result",
          items: [
            "MVP delivered with 100% on-time feature delivery across all sprints",
            "Tested hands-on with the clinic's doctors and nurses — strongly positive response",
            "Substantially streamlined workflows compared to the clinic's manual, paper-based process",
          ],
        },
      ],
    },
  },
  {
    slug: "silahis-publication",
    title: "Silahis Publication Platform",
    oneLiner:
      "A cloud-native publication platform for student journalism — custom CMS, automated publishing, and AWS infrastructure serving a university community.",
    year: "2024–2025",
    discipline: "Web Platform",
    featured: true,
    role: "Full-Stack Developer",
    stack: ["React", "Laravel", "AWS EC2", "S3", "Route 53", "MySQL"],
    links: {
      live: "https://thesilahispublication.com",
    },
    isPrivate: true,
    cover: {
      src: "/projects/silahis-publication/publication-homepage.png",
      caption: "Homepage — main landing page",
    },
    images: [
      {
        src: "/projects/silahis-publication/publication-articles-page.png",
        caption: "Articles page — content listing",
      },
      {
        src: "/projects/silahis-publication/publication-article-page.png",
        caption: "Article view — individual article display",
      },
      {
        src: "/projects/silahis-publication/publication-palakasan-articles.png",
        caption: "Palakasan coverage — special event articles",
      },
      {
        src: "/projects/silahis-publication/publication-palakasan-medal-count.png",
        caption: "Palakasan medal count — live event tracker",
      },
      {
        src: "/projects/silahis-publication/publication-login-publishers.png",
        caption: "Publisher login — content management access",
      },
    ],
    caseStudy: {
      intro:
        "A cloud-native publication platform for the Silahis Student Publication — a custom React + Laravel CMS and public site on AWS that gave the university's student journalists a home of their own.",
      sections: [
        {
          heading: "Situation",
          body: "The publication had no website at all — every article went out through Facebook and Instagram, so students had to be logged into those platforms just to read campus news. Publishing was manual and scattered, and the organization wanted a platform of its own: an identity it could shape freely, especially for flagship coverage like the Palakasan university games.",
        },
        {
          heading: "Task",
          body: "As lead developer I was responsible for the platform end to end — from requirements with the publication staff, through design implementation, to building the CMS and public site and running the AWS infrastructure it lives on.",
        },
        {
          heading: "Action",
          items: [
            "Built a custom CMS with React and Laravel so publishers manage articles without technical help",
            "Automated the article publishing flow from draft to live",
            "Implemented mobile-responsive, Figma-faithful designs across the public site",
            "Built special Palakasan event coverage including a live medal-count tracker",
            "Deployed and managed the AWS infrastructure — EC2, S3, and Route 53",
          ],
        },
        {
          heading: "Result",
          items: [
            "The publication's first standalone website — articles readable by anyone, no social login required",
            "Roughly 50% less manual maintenance than the old scattered publishing process",
            "Real-time article publishing, live in production at thesilahispublication.com",
            "An owned platform the organization can configure and grow as it pleases",
          ],
        },
      ],
    },
  },
  {
    slug: "guideon-chatbot",
    title: "Guideon",
    oneLiner:
      "An AI learning assistant that recommends personalized learning paths using a locally hosted LLM (Llama 3 via Ollama) with hybrid filtering aligned to the Philippine Skills Framework.",
    year: "2025",
    discipline: "AI / ML",
    featured: true,
    role: "Full-Stack Developer",
    stack: ["Django", "React", "PostgreSQL", "pgvector", "Llama 3", "Ollama"],
    links: {
      github: "https://github.com/lalalance12/guideon-chatbot",
    },
    caseStudy: {
      intro:
        "Guideon is an intelligent learning assistant that recommends personalized learning paths using a locally hosted LLM — built as our BS Computer Science undergraduate thesis at MSU-IIT.",
      sections: [
        {
          heading: "Situation",
          body: "Filipino learners and jobseekers often don't know which skills to learn, in what order, to reach a target career. The Philippine Skills Framework (PSF) maps those skills, but it's hard for an individual to apply — the real difficulty is knowing which actual course satisfies which PSF requirement. On top of that, cloud LLMs raise privacy and cost concerns for a student-facing tool.",
        },
        {
          heading: "Task",
          body: "For our group undergraduate thesis, we set out to build and formally evaluate a recommender that turns the PSF into concrete, personalized learning paths — with the AI running entirely on local infrastructure. I worked as a full-stack developer across the system.",
        },
        {
          heading: "Action",
          items: [
            "Integrated a locally hosted Llama 3 via Ollama — no user data sent to cloud LLMs",
            "Built hybrid filtering that combines collaborative and content-based recommendations",
            "Aligned recommendations to the Philippine Skills Framework so courses map to real PSF skills",
            "Developed the full-stack architecture: Django backend, React frontend",
            "Used PostgreSQL with pgvector for embedding storage and similarity search",
          ],
        },
        {
          heading: "Result",
          items: [
            "CUQ usability score of 71.8 (SD ±11.7) in formal evaluation — high user satisfaction",
            "Working PSF-aligned recommendations from a fully local LLM pipeline",
            "Completed and defended as our undergraduate thesis",
          ],
        },
      ],
    },
  },
  {
    slug: "baltacars-ph",
    title: "BaltaCars PH",
    oneLiner:
      "A pre-owned vehicle dealership platform for Philippine car buyers — browsable inventory with smart filters, side-by-side vehicle comparison, test-drive scheduling, and reservations.",
    year: "2025",
    discipline: "Web Platform",
    featured: true,
    role: "Full-Stack Developer",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    links: {
      live: "https://baltacars-ph.vercel.app/",
    },
    caseStudy: {
      intro:
        "BaltaCars PH is a dealership platform for quality pre-owned vehicles in the Philippines — an ongoing freelance engagement where buyers browse a curated inventory, compare vehicles side by side, book test drives, and reserve cars with a deposit.",
      sections: [
        {
          heading: "Situation",
          body: "A Philippine pre-owned vehicle dealership needed a modern web platform to bring its buying experience online — inventory browsing, comparisons, and appointments — instead of handling everything through calls and walk-ins.",
        },
        {
          heading: "Task",
          body: "A two-developer freelance engagement, currently in progress, with me as the lead. Both of us work full-stack end to end; I additionally own the deployment side.",
        },
        {
          heading: "Action",
          items: [
            "Built a browsable vehicle inventory with filters for price range, vehicle type, and new arrivals",
            "Developed a side-by-side comparison tool for specs, pricing, and features",
            "Implemented test-drive scheduling with appointment booking",
            "Built the vehicle reservation flow with deposits",
            "Created dealership story and customer testimonial pages",
            "Own the deployment pipeline on Vercel",
          ],
        },
        {
          heading: "Result",
          items: [
            "Working platform live on Vercel with the full buyer journey — browse, compare, book, reserve",
            "Ongoing engagement — features still being built out with the client",
            "Fast, mobile-first experience for car shoppers",
          ],
        },
      ],
    },
  },
  {
    slug: "clinical-management",
    title: "Clinical Management System",
    oneLiner:
      "A management system for small and medium clinics that streamlines the workflow of receptionists, medical technologists, and doctors.",
    year: "2024",
    discipline: "Healthcare",
    featured: false,
    stack: ["React", "Node.js", "MongoDB", "Express"],
    links: {
      github: "https://github.com/lalalance12/clinical-management-system",
    },
  },
  {
    slug: "flower-classification",
    title: "CNN Flower Classification",
    oneLiner:
      "Deep learning with CNNs and transfer learning to classify flowers into five categories.",
    year: "2024",
    discipline: "Machine Learning",
    featured: false,
    stack: ["Python", "TensorFlow", "CNN", "Transfer Learning", "OpenCV"],
    links: {
      github:
        "https://github.com/lalalance12/CNN-based-multi-class-flower-classification",
    },
  },
  {
    slug: "heart-disease-prediction",
    title: "Heart Disease Prediction",
    oneLiner:
      "A Random Forest model that predicts heart disease risk from health parameters.",
    year: "2024",
    discipline: "Machine Learning",
    featured: false,
    stack: ["Python", "scikit-learn", "Random Forest", "Pandas", "NumPy"],
    links: {
      github:
        "https://github.com/lalalance12/heart-disease-prediction-model-using-random-forest",
    },
  },
  {
    slug: "monte-carlo-simulation",
    title: "CS2 Item Probability Simulation",
    oneLiner:
      "A Monte Carlo simulation modeling item drop probabilities in Counter-Strike 2 across rarity, wear, and StatTrak.",
    year: "2024",
    discipline: "Simulation",
    featured: false,
    stack: ["Python", "Monte Carlo", "Statistics", "Data Analysis"],
    links: {
      github:
        "https://github.com/lalalance12/monte-carlo-simulation-of-item-probability-in-counter-strike-2",
    },
  },
  {
    slug: "binary-classification",
    title: "Binary Classification Collection",
    oneLiner:
      "Jupyter notebooks for binary classification with TensorFlow — preprocessing, training, and evaluation.",
    year: "2024",
    discipline: "Machine Learning",
    featured: false,
    stack: ["Python", "TensorFlow", "Jupyter", "NumPy", "Pandas"],
    links: {
      github: "https://github.com/lalalance12/binary-classification",
    },
  },
  {
    slug: "multiplexing-videos",
    title: "Real-time Video Processing",
    oneLiner:
      "Parallel real-time video processing with MPI and OpenCV, applying multiple effects to a live feed simultaneously.",
    year: "2024",
    discipline: "Computer Vision",
    featured: false,
    stack: ["C++", "MPI", "OpenCV", "Parallel Computing"],
    links: {
      github: "https://github.com/lalalance12/multiplexing-videos",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const archiveProjects = projects.filter((p) => !p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
