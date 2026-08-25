
const portfolioData = {
  profile: {
    name: "Syed Ahmed Wasi",

    title: "Java Backend Developer | Cloud & Cybersecurity Enthusiast",

    headline:
      "Java Backend Developer | Cloud & Cybersecurity Enthusiast | MLSA Cloud Lead @ SISTec | Event & Training Manager @ Vyuh Community",

    tagline: "Building Secure & Cloud-Ready Applications",

    bio:
      "Computer Science student specializing in Cyber Security, focused on Java backend development, cloud computing, and secure application design.",

    bioExtended:
      "MLSA Cloud Lead at SISTec and Event & Training Manager at Vyuh Community. I build backend applications using Java and Spring Boot while exploring cloud technologies, cybersecurity, AI, and secure cloud-native architectures.",

    location: "Bhopal, India",

    phone: "",

    email: "[ahmedwasi4407@gmail.com](mailto:ahmedwasi4407@gmail.com)",

    linkedin:
      "[https://www.linkedin.com/in/syed-ahmed-wasi-244159402](https://www.linkedin.com/in/syed-ahmed-wasi-244159402)",

    github: "https://github.com/ahmedwasi946",

    githubHandle: "Syed Ahmed Wasi",

    linkedinHandle: "Syed Ahmed Wasi",

    leetcode:
      "[https://leetcode.com/u/MA1rzlmbxH/](https://leetcode.com/u/MA1rzlmbxH/)",

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
    Languages: [
      "Java",
      "C++",
      "C"
    ],

    Frameworks: [
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA"
    ],

    Databases: [
      "MySQL"
    ],

    "Cloud / DevOps": [
      "Microsoft Azure",
      "AWS",
      "Git",
      "GitHub"
    ],

    Tools: [
      "Postman",
      "Maven"
    ],

    Cybersecurity: [
      "Cloud Security",
      "Web Security",
      "Ethical Hacking"
    ],

    "Soft Skills": [
      "Event Management",
      "Technical Training",
      "Community Building"
    ]
  },

  experience: [
    {
      role: "MLSA Cloud Lead",
      company: "Microsoft Learn Student Ambassadors (SISTec)",
      period: "Present",
      location: "Bhopal",

      description:
        "Leading cloud-focused learning initiatives and technical activities for students.",

      highlights: [
        "Exploring Azure and cloud computing while helping students develop practical cloud skills.",
        "Organizing technical learning activities and workshops around cloud technologies.",
        "Helping students connect academic learning with industry-relevant cloud skills."
      ]
    },

    {
      role: "Event & Training Manager",
      company: "Vyuh Community",
      period: "Present",
      location: "Bhopal",

      description:
        "Managing technical events, training activities, and educational outreach.",

      highlights: [
        "Organizing technical events and training programs for students.",
        "Contributing to community growth through technical learning and engagement.",
        "Supporting hands-on learning through workshops and technical activities."
      ],

      link: "https://github.com/ahmedwasi946"
    }
  ],

  projects: [
    {
      title: "Riding Booking System",
      subtitle: "Backend Development",

      description:
        "A backend system for managing ride-booking operations, built to strengthen my understanding of real-world backend architecture, REST APIs, database management, and application design.",

      highlights: [
        "Developed REST APIs using Java and Spring Boot.",
        "Implemented database operations using Spring Data JPA and MySQL.",
        "Designed backend components for ride-booking functionality.",
        "Tested and validated APIs using Postman.",
        "Used Git and GitHub for version control."
      ],

      tech: [
        "Java",
        "Spring Boot",
        "Spring MVC",
        "Spring Data JPA",
        "MySQL",
        "REST API",
        "Postman",
        "Git",
        "GitHub"
      ],

      github: ""
    }
  ],

  certifications: [
    "Advent of Cyber 2025 — TryHackMe",
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

console.log(
  "Portfolio data loaded successfully for:",
  portfolioData.profile.name
);
