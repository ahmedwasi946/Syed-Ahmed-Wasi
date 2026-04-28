const portfolioData = {
  profile: {
    name: "Syed Ahmed Wasi",
    title: "Full Stack Developer",
    location: "Bhopal, India",
    contact: {
      email: "ahmedwasi4407@gmail.com",
    },
    socials: {
      linkedin: "https://www.linkedin.com/in/syed-ahmed-wasi-244159402",
      github: "https://github.com/ahmedwasi946",
      leetcode: "https://leetcode.com/u/MA1rzlmbxH/",
    },
    summary: {
      headline: "Cloud & Cybersecurity Enthusiast | MLSA Cloud Lead @ SISTec | Event & Training Manager @ Vyuh Community",
      bio: "Full Stack Developer.",
    }
  },

  education: {
    institution: "Sagar Institute of Science and Technology",
    degree: "B.Tech in Computer Science (Specialization: Cyber Security)",
    period: "2025 - 2029",
  },

  skills: {
    languages: ["Java", "C++", "C"],
    backend: ["Spring Boot"],
    databases: ["MySQL"],
    cloudDevOps: ["Azure"],
    tools: ["Git", "GitHub"],
    softSkills: ["Event Management"]
  },

  experience: [
    {
      role: "MLSA Cloud Lead",
      organization: "Microsoft Learn Student Ambassadors (SISTec)",
      keywords: ["Azure", "Cloud Computing"]
    },
    {
      role: "Event & Training Manager",
      organization: "Vyuh Community",
      link: "https://github.com/ahmedwasi946"
    }
  ],

  certifications: [
    "Advent of Cyber 2025 (TryHackMe)",
    "C Essentials 1 & 2",
    "Deloitte Cyber Job Simulation"
  ],

  
  config: {
    navLinks: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" }
    ]
  }
};

// Test log to verify it runs
console.log("Portfolio data loaded successfully for:", portfolioData.profile.name);
