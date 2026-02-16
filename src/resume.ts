import { FiCpu, FiGithub } from "react-icons/fi";
import { FaAws, FaGitAlt, FaGolang, FaXTwitter } from "react-icons/fa6"
import { FiLinkedin } from "react-icons/fi";
import { IconType } from "react-icons/lib"
import { FaDocker, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { LuMail, LuPhone } from "react-icons/lu";
import { SiArduino, SiDocker, SiExpo, SiGithub, SiJavascript, SiMongodb, SiPostman, SiPython, SiRailway, SiReact, SiSolidity, SiTypescript, SiVercel } from "react-icons/si";
import { TbBrandGolang, TbBrandNextjs, TbBrandReactNative, TbSql } from "react-icons/tb";
import { BsApp } from "react-icons/bs";

export interface ResumeType {
  title: string,
  role: string,
  subTitle: string,
  summary: string,
  techStack: {
    icon: IconType,
    label: string,
  }[],
  resumeLinks: {
    icon: IconType,
    title: string,
    label: string,
    link: string
  }[],
  links: {
    icon: IconType,
    title: string,
    label: string,
    link: string
  }[],
  experiences: {
    title: string,
    subTitle: string,
    link: string,
    location: string,
    duration: {
      type: string,
      start: string,
      end: string,
    }[]
    description: string,
    bullets: string[],
    tags: string[],
  }[],
  skills: {
    title: string,
    tags: {
      label: string,
      icon: IconType | null,
    }[]
  }[],
  educations: {
    title: string,
    subTitle: string,
    link: string,
    start: string,
    end: string,
    description: string,
    bullets: string[],
    tags: string[],
  }[],
  projects: {
    status: "Concept" | "In Progress" | "Production" | "Archive"
    title: string,
    subTitle: string,
    path: string | null,
    link: string | null,
    source: string | null,
    bullets: string[],
    tags: string[],
  }[]
}

export const Resume: ResumeType = {
  title: "Jyotirmoy Barman",
  role: "Software Engineer",
  subTitle: "Bringing Ideas to live",
  summary: "I'm a software developer with **1+ years of experience** working with **Go, Solidity, Next.js, and React Native**. I've built and shipped a **production-ready application** used by a real company, which taught me how to build software that actually matters. I'm highly quality-driven, if something doesn't meet my standards, I refactor it or start over. I learn fast, take full ownership of my work, and always give **100% effort**. Outside of code, I love traveling and exploring nature because for me, travel isn't about checklists, it's about experiences.",
  techStack: [
    {
      icon: FaGolang,
      label: "Golang",
    },
    {
      icon: BiLogoPostgresql,
      label: "Postgres"
    },
    {
      icon: FaDocker,
      label: "Docker"
    },
    {
      icon: BiLogoTypescript,
      label: "Typescript",
    },
    {
      icon: RiNextjsFill,
      label: "Next.js"
    },
    {
      icon: FaReact,
      label: "React Native"
    },
    {
      icon: SiSolidity,
      label: "Solidity"
    }
  ],
  resumeLinks: [
    {
      icon: LuMail,
      title: "Mail",
      label: "jyotirmoydotdev@gmail.com",
      link: "mailto:jyotirmoydotdev@gmail.com"
    },
    {
      icon: LuPhone,
      title: "Phone",
      label: "(+91) 8798162808",
      link: "tel:+918798162808"
    },
    {
      icon: GoPerson,
      title: "Portfolio",
      label: "jyotirmoy.dev",
      link: "https://jyotirmoy.dev"
    },
  ],
  links: [
    {
      icon: LuMail,
      title: "Mail",
      label: "jyotirmoydotdev@gmail.com",
      link: "mailto:jyotirmoydotdev@gmail.com"
    },
    {
      icon: FiGithub,
      title: "Github",
      label: "github/jyotirmoydotdev",
      link: "https://github.com/jyotirmoydotdev"
    },
    {
      icon: FiLinkedin,
      title: "LinkedIn",
      label: "linkedin/jyotirmoydotdev",
      link: "https://linkedin.com/in/jyotirmoydotdev",
    },
    {
      icon: FaXTwitter,
      title: "X (Twitter)",
      label: "x.com/jyotirmoydotdev",
      link: "https://x.com/jyotirmoydotdev"
    }
  ],
  experiences: [
    {
      title: "Technical Associate",
      subTitle: "Rushlane Technologies",
      link: "https://rushlane.net",
      location: "Tura, Meghalaya, India",
      duration: [
        {
          type: "Technical Associate, Full-time",
          start: "Jun 2025",
          end: "Present",
        },
        {
          type: "Internship",
          start: "Apr 2025",
          end: "May 2025 (2 mos)"
        }
      ],
      description: "A fast growing food delivery company based in Tura.",
      bullets: [
        "Led the development and ongoing maintenance of Rushlane’s food delivery mobile app and restaurant dashboard.",
        "As an early-stage startup team member, contributed to management, planning, and cross-functional collaboration across product, design, and operations."
      ],
      tags: ["Mobile Development", "Management", "Field Operations"]
    },
    {
      title: "Ethereum Engineer",
      subTitle: "Loreum DAO",
      link: "https://www.loreum.org/",
      location: "Remote",
      duration: [
        {
          type: "Ethereum Engineer, Freelance",
          start: "Jan 2024",
          end: "Apr 2024 (4 mos)",
        }
      ],
      description: "A decentralised autonomous organisation focused on Ethereum development.",
      bullets: [
        "Contributed to the development of the chamber module by designing and implementing key features for voting and proposal processing using Solidity and related blockchain technologies.",
        "Assisted in building an intuitive user interface for the decentralised application, ensuring a seamless user experience through modern web frameworks.",
        "Collaborated with cross-functional teams in an Agile environment to ensure timely delivery and continuous improvement of the platform."
      ],
      tags: ["Solidity", "Ethereum", "React.js"]
    },
    {
      title: "Technical Writer",
      subTitle: "DAO Times",
      link: "https://daotimes.com/",
      location: "Remote",
      duration: [
        {
          type: "Technical Writer, Freelance",
          start: "Mar 2023",
          end: "June 2023 (4 mos)",
        }
      ],
      description: "A publication covering news and insights in the decentralised autonomous organisation space.",
      bullets: [
        "Researched and analysed topics in decentralised finance (DeFi), non-fungible tokens (NFTs), and blockchain technology to produce well-structured technical articles.",
        "Collaborated with editors and subject matter experts to refine content, ensuring clarity and adherence to publication standards.",
        "Utilised SEO best practices to improve the discoverability of content and drive audience engagement."
      ],
      tags: ["Search Engine Optimization (SEO)", "Technical Publication"]
    }
  ],
  educations: [
    {
      title: "Bachelor of Computer Application",
      subTitle: "Chandigarh University",
      link: "https://www.cuchd.in/",
      start: "Jun 2021",
      end: "Jun 2024",
      description: "Graduated with a 7.23 CGPA.",
      bullets: [
        "Developed a strong foundation in data structures, algorithms, and software development principles.",
        "Actively participated in hackathons and collaborative projects, demonstrating practical problem-solving skills.",
      ],
      tags: ["Data Structures", "Algorithms", "Programming"]
    },
    {
      title: "Higher Secondary Science",
      subTitle: "Kendriya Vidyalaya",
      link: "http://kvsangathan.nic.in/",
      start: "Apr 2020",
      end: "Feb 2021",
      description: "Graduated with a 75%.",
      bullets: [
        "Achieved 75% in the Science stream with a focus on computer science and practical applications."
      ],
      tags: ["Computer Science", "Academic Excellence", "Extracurricular Activities"]
    }
  ],
  skills: [
    {
      title: "Programming Language",
      tags: [
        {
          label: "Golang",
          icon: TbBrandGolang,
        },
        {
          label: "Typescript",
          icon: SiTypescript,
        },
        {
          label: "JavaScript",
          icon: SiJavascript,
        },
        {
          label: "Python",
          icon: SiPython,
        },
        {
          label: "Solidity",
          icon: SiSolidity,
        },
        {
          label: "SQL",
          icon: TbSql,
        }
      ]
    },
    {
      title: "Libraries & Frameworks",
      tags: [
        {
          label: "React",
          icon: SiReact,
        },
        {
          label: "React Native",
          icon: TbBrandReactNative,
        },
        {
          label: "Next.js",
          icon: TbBrandNextjs
        },
        {
          label: "Expo",
          icon: SiExpo,
        },
        {
          label: "PostgreSQL",
          icon: BiLogoPostgresql
        },
        {
          label: "MongoDB",
          icon: SiMongodb,
        }
      ]
    },
    {
      title: "Infrastructure & Deployment",
      tags: [
        {
          label: "Git",
          icon: FaGitAlt,
        },
        {
          label: "Github",
          icon: SiGithub
        },
        {
          label: "Docker",
          icon: SiDocker,
        },
        {
          label: "AWS",
          icon: FaAws
        },
        {
          label: "Vercel",
          icon: SiVercel,
        },
        {
          label: "Railway",
          icon: SiRailway
        },
        {
          label: "Postman",
          icon: SiPostman
        },
        {
          label: "Arduino",
          icon: SiArduino
        }
      ]
    },
    {
      title: "Specializations",
      tags: [
        { label: "Backend Development", icon: FiCpu },
        { label: "Mobile Development", icon: BsApp }
      ]
    },
  ],
  projects: [
    {
      status: "Production",
      title: "Rushlane: Food-in & Grocery",
      subTitle: "A Food Delivery application.",
      path: "/about/projects/rushlane",
      link: null,
      source: null,
      bullets: [
        "A food and grocery delivery app for local restaurants using React Native with Expo, enabling seamless cross-platform support.",
        "Serving 1,000+ daily active users, with active plans to expand into additional cities."
      ],
      tags: ["Mobile App", "Cross Platforms"]
    },
    {
      status: "In Progress",
      title: "Openfy Backend",
      subTitle: "Openfy is a self-hosted e-commerce platform built with Go and Gin.",
      path: null,
      link: null,
      source: "https://github.com/jyotirmoydotdev/openfy",
      bullets: [
        "Developed using Go and the Gin framework to provide a customisable solution for product management and user authentication.",
        "Integrated RESTful APIs and database solutions to ensure scalability and security."
      ],
      tags: ["Golang", "Gin"]
    },
    {
      status: "Concept",
      title: "Vendogen",
      subTitle: "A full business software that is built for the next generation entrepreneurs.",
      path: "/about/projects/vendogen",
      link: "https://vendogen.com",
      source: null,
      bullets: [
        "A multi-tenant, domain-driven, modular monolith platform with capability-based enablement that empowers businesses of all types to launch, connect, and collaborate within a shared ecosystem—leveraging AI-enabled features to drive scalabel, exponential growth."
      ],
      tags: ["Golang", "Next.js"]
    },
    {
      status: "Archive",
      title: "Snippetbox",
      subTitle: "Snippetbox is a web application developed in Go that allows users to create, view, and share text snippets.",
      path: null,
      link: null,
      source: "https://github.com/jyotirmoydotdev/snippetbox",
      bullets: [
        "Sentence 1"
      ],
      tags: ["Golang", "Go Tmpl"]
    }
  ]
}
