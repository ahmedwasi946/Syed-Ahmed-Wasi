const portfolioData = {
  profile: {
    name: "Syed Ahmed Wasi",
    title: "Full Stack Developer",
    headline: "Cloud & Cybersecurity Enthusiast | MLSA Cloud Lead @ SISTec | Event & Training Manager @ Vyuh Community",
    tagline: "Securing the Cloud",
    bio: "Full Stack Developer with a focus on Cloud Computing and Cybersecurity.",
    bioExtended: "Cloud & Cybersecurity Enthusiast and MLSA Cloud Lead at SISTec. I specialize in building full-stack applications with a strong emphasis on security and cloud-native architectures. Currently managing events and training at Vyuh Community.",
    location: "Bhopal, India",
    phone: "",
    email: "[ahmedwasi4407@gmail.com](mailto:ahmedwasi4407@gmail.com)",
    linkedin: "[https://www.linkedin.com/in/syed-ahmed-wasi-244159402](https://www.linkedin.com/in/syed-ahmed-wasi-244159402)",
    github: "[https://github.com/ahmedwasi946](https://github.com/ahmedwasi946)",
    githubHandle: "ahmedwasi946",
    linkedinHandle: "Syed Ahmed Wasi",
    leetcode: "[https://leetcode.com/u/MA1rzlmbxH/](https://leetcode.com/u/MA1rzlmbxH/)",
    gfg: "",
    codechef: ""
  },
  education: {
    institution: "Sagar Institute of Science and Technology",
    degree: "B.Tech in Computer Science (Specialization: Cyber Security)",
    period: "2025 - 2029",
    cgpa: ""
  },
  skills: {
    Languages: ["Java", "C++", "C"],
    Frameworks: ["Spring Boot"],
    Databases: ["MySQL"],
    "Cloud / DevOps": ["Azure", "AWS" ],
    Tools: ["Git", "GitHub"],
    "Soft Skills": ["Event Management"]
  },
  experience: [
    {
      role: "MLSA Cloud Lead",
      company: "Microsoft Learn Student Ambassadors (SISTec)",
      period: "Present",
      location: "Bhopal",
      description: "Leading cloud-related initiatives and training sessions for students.",
      highlights: [
        "Specializing in Azure and Cloud Computing.",
        "Organizing workshops to bridge the gap between academia and industry cloud standards."
      ]
    },
    {
      role: "Event & Training Manager",
      company: "Vyuh Community",
      period: "Present",
      location: "Bhopal",
      description: "Managing technical events and training programs for the community.",
      highlights: [
        "Overseeing community growth and educational outreach.",
        "Coordinating between trainers and participants for seamless event execution."
      ],
      link: "[View Community](https://github.com/ahmedwasi946)"
    }
  ],
  projects: [], // Add your projects here following the same format as Nitin's
  certifications: [
    "Advent of Cyber 2025 (TryHackMe)",
    "C Essentials 1 & 2",
    "Deloitte Cyber Job Simulation"
  ],
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ]
};
// Test log to verify it runs
console.log("Portfolio data loaded successfully for:", portfolioData.profile.name);
