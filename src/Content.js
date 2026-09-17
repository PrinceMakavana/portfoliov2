// import images
import Hero_person from "./assets/images/Hero/person.png";

import htmlLogo from "./assets/images/Skills/html.png";
import cssLogo from "./assets/images/Skills/css.png";
import sassLogo from "./assets/images/Skills/sass.png";
import bootstrapLogo from "./assets/images/Skills/bootstrap.png";
import tailwindLogo from "./assets/images/Skills/tailwind.png";
import muiLogo from "./assets/images/Skills/mui.png";
import shadcnLogo from "./assets/images/Skills/shadcn-ui-logo.png";
import quasarLogo from "./assets/images/Skills/quasar.svg";
import viteLogo from "./assets/images/Skills/vite.svg";
import javascriptLogo from "./assets/images/Skills/javascript.png";
import typescriptLogo from "./assets/images/Skills/typescript.png";
import pythonLogo from "./assets/images/Skills/python.png";
import reactLogo from "./assets/images/Skills/react.png";
import reduxLogo from "./assets/images/Skills/redux.png";
import nextjsLogo from "./assets/images/Skills/nextjs.png";
import tiptapEditorLogo from "./assets/images/Skills/tiptap.png";
import nodeLogo from "./assets/images/Skills/node.png";
import expressLogo from "./assets/images/Skills/express.svg";
import firebaseLogo from "./assets/images/Skills/firebase.png";
import razorpayLogo from "./assets/images/Skills/razorpay.svg";
import mysqlLogo from "./assets/images/Skills/mysql.svg";
import postgresqlLogo from "./assets/images/Skills/postgresql.svg";
import mongodbLogo from "./assets/images/Skills/mongodb.png";
import pineconeLogo from "./assets/images/Skills/pinecone.png";
import awsLogo from "./assets/images/Skills/aws.png";
import gcpLogo from "./assets/images/Skills/gcp.png";
import vercelLogo from "./assets/images/Skills/vercel.svg";
import githubLogo from "./assets/images/Skills/github.png";
import gitlabLogo from "./assets/images/Skills/gitlab.svg";
import bitbucketLogo from "./assets/images/Skills/bitbucket.svg";
import langchainLogo from "./assets/images/Skills/langchain.png";
import openaiLogo from "./assets/images/Skills/openai.svg";
import ollamaLogo from "./assets/images/Skills/ollama.svg";
import claudeLogo from "./assets/images/Skills/claude.svg";
import geminiLogo from "./assets/images/Skills/gemini.svg";
import voLogo from "./assets/images/Skills/vo.svg";
import cursorLogo from "./assets/images/Skills/cursor.svg";
import antigravityLogo from "./assets/images/Skills/antigravity.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import avatar1 from "./assets/images/Testimonials/review1.jpeg";
import reviewAvater2 from "./assets/images/reviewAvater2.jpeg";
import reviewAvater3 from "./assets/images/Testimonials/reviewAvater3.jpg";
// import avatar2 from "./assets/images/Testimonials/avatar2.png";
// import avatar3 from "./assets/images/Testimonials/avatar3.png";
// import avatar4 from "./assets/images/Testimonials/avatar4.png";

// import Hireme_person from "./assets/images/Hireme/person.png";
// import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { TbArrowSharpTurnLeft, TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { GrSettingsOption } from "react-icons/gr";
import { FaMedium, FaStackOverflow } from "react-icons/fa";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: GrSettingsOption,
    },
    {
      link: "#experience",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Frontend Multi-Stack Developer",
    firstName: "PRINCE",
    LastName: "MAKAVANA",
    btnText: "Hire Me",
    tagline: "I'm a frontend developer with over 3 years of experience in building and deploying production grade systems that fast, accessible, and scalable. I've pleasure of working with MERN stack along with Next.js, Vue.js, and TypeScript at The DevTime Tech., which has helped me adapt comfortably to different team environments and deliver thoughtful solutions even under tight timelines.",
    image: Hero_person,
    social_links: [
      {
        icon: GrMail,
        link: "mailto:contact@princemakvana.com",
        label: "Email",
      },
      {
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/princemakavana61/",
        label: "LinkedIn",
      },
      {
        icon: AiFillGithub,
        link: "https://github.com/PrinceMakavana/",
        label: "GitHub",
      },
      {
        icon: FaMedium,
        link: "https://medium.com/@princemakavana61",
        label: "Medium",
      },
      {
        icon: FaStackOverflow,
        link: "https://stackoverflow.com/users/14263951/i-am-prince",
        label: "Stack Overflow",
      },
      
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {category: "Programming Languages",skills : [
        {name: "JavaScript (ES6+)", logo: javascriptLogo},
        {name: "TypeScript", logo: typescriptLogo},
        {name: "Python", logo: pythonLogo},
       ]},
      {
        category: "Frontend", 
        skills: [
          {name: "HTML5", logo: htmlLogo},
          {name: "CSS3", logo: cssLogo},
          {name: "SCSS", logo: sassLogo},
          {name: "Tailwind CSS", logo: tailwindLogo},
          {name: "Bootstrap", logo: bootstrapLogo},
          {name: "MUI", logo: muiLogo},
          {name: "ShadCN", logo: shadcnLogo},
          {name: "Quasar", logo: quasarLogo},
          {name: "Vite", logo: viteLogo},
        ]
      },
      
      {category: "Frameworks & Libraries",skills : [
       {name: "React.js", logo: reactLogo},
       {name: "Redux", logo: reduxLogo},
       {name: "Next.js", logo: nextjsLogo},
       {name: "Tiptap Editor", logo: tiptapEditorLogo},
      ]},
      {category: "Backend",skills : [
       {name: "Node.js", logo: nodeLogo},
       {name: "Express.js", logo: expressLogo},
       {name: "Firebase (Auth, Hosting, Storage)", logo: firebaseLogo},
       {name: "Razorpay", logo: razorpayLogo},
      ]},
      {category: "Database",skills : [
       {name: "MySQL", logo: mysqlLogo},
       {name: "PostgreSQL", logo: postgresqlLogo},
       {name: "MongoDB", logo: mongodbLogo},
       {name: "Pinecone (embeddings)", logo: pineconeLogo},
      ]},
      {category: "Cloud & Deployment",skills : [
       {name: "AWS", logo: awsLogo},
       {name: "GCP", logo: gcpLogo},
       {name: "Vercel", logo: vercelLogo},
      ]},
      {category: "Version Control",skills : [
       {name: "GitHub", logo: githubLogo},
       {name: "GitLab", logo: gitlabLogo},
       {name: "Bitbucket", logo: bitbucketLogo},
      ]},
      {category: "AI/ML & Developer Tools",skills : [
       {name: "LangChain", logo: langchainLogo},
       {name: "OpenAI", logo: openaiLogo},
       {name: "Ollama", logo: ollamaLogo},
       {name: "Claude", logo: claudeLogo},
       {name: "Gemini", logo: geminiLogo},
       {name: "Vo", logo: voLogo},
       {name: "Cursor", logo: cursorLogo},
       {name: "Antigravity", logo: antigravityLogo},
      ]},
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Project Management",
        para: "Want to gain real life expricence of managing a complete software project cycle",
        logo: services_logo1,
      },
      {
        title: "Web Development",
        para: "Creating and maintaining responsive and user-friendly websites through coding, design, and optimization",
        logo: services_logo2,
      },
      {
        title: "SEO Optimization",
        para: "Implementing strategic SEO techniques to improve website visibility and rankings on search engine result pages (SERPs).",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    project_content: [
      {
        title: "Paper AI",
        tech: ["Next.js", "Google Gemini", "RAG", "PDF Chat"],
        bullets: [
          "AI-powered GTU study assistant built on APY Material for smarter exam prep",
          "Generate paper solutions, chat with PDFs, and summarize notes with Google Gemini",
          "Explore subject materials with conversational AI grounded in study content",
        ],
        tags: ["Next.js", "Gemini", "RAG", "PDF AI"],
        code: "",
        link: "https://ai.gtuapymaterials.com/",
      },
      {
        title: "QA Support Bot",
        tech: ["RAG", "Vector Store", "Web Crawling", "LLM"],
        bullets: [
          "Support chatbot built with Retrieval Augmented Generation (RAG)",
          "Crawl a website and ingest content into a vector store for grounded answers",
          "Ask questions and get responses backed by the ingested knowledge base",
        ],
        tags: ["RAG", "Vector DB", "LLM", "Chatbot"],
        code: "",
        link: "https://qa-support-bot.princemakavana.com",
      },
      {
        title: "Apy Material",
        tech: ["React", "Firebase", "SEO", "Content Platform"],
        bullets: [
          "Central hub for GTU Computer Engineering books and study materials",
          "High-ranked educational resource with over 1M Google Search impressions",
          "Organized subject-wise content for quick student access",
        ],
        tags: ["React", "Firebase", "SEO"],
        code: "",
        link: "https://www.gtuapymaterials.com",
      },
      {
        title: "AI Analysis App",
        tech: ["Next.js 15", "Gemini AI", "OpenAI", "Pinecone"],
        bullets: [
          "Interactive conversations with PDF documents using cutting-edge AI",
          "Context-aware document understanding through conversational interfaces",
          "Integrated Gemini AI, OpenAI, and Pinecone for intelligent retrieval",
        ],
        tags: ["Next.js 15", "Gemini", "OpenAI", "Pinecone"],
        code: "",
        link: "https://gemini-ai-vertex-demo.vercel.app/",
      },
      {
        title: "Codechef Chapter",
        tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
        bullets: [
          "Official website for Codechef GEC-Rajkot Chapter",
          "Showcases chapter activities, events, and programming community",
          "Deployed as a static site on GitHub Pages",
        ],
        tags: ["HTML", "CSS", "JavaScript"],
        code: "",
        link: "https://codechef-gec-rajkot-chapter.github.io/main/",
      },
      {
        title: "indi Water",
        tech: ["React", "Firebase", "Web App"],
        bullets: [
          "Web application focused on water-related services and information",
          "Built and deployed with Firebase for fast, reliable hosting",
          "Responsive interface for everyday user access",
        ],
        tags: ["React", "Firebase"],
        code: "",
        link: "https://indiwater3.web.app/",
      },
      // {
      //   title: "Scientific Calculator",
      //   tech: ["HTML", "CSS", "JavaScript"],
      //   bullets: [
      //     "Browser-based scientific calculator with advanced math operations",
      //     "Clean, responsive UI for desktop and mobile use",
      //     "Supports trigonometric, logarithmic, and algebraic functions",
      //   ],
      //   tags: ["HTML", "CSS", "JavaScript"],
      //   code: "",
      //   link: "https://princesimform.github.io/scientific-calculator/",
      // },
      {
        title: "Expense Tracker",
        tech: ["React", "Firebase", "Split Bill"],
        bullets: [
          "Track bills and shared expenses without remembering every detail",
          "Split Bill flow to share costs with friends easily",
          "Cloud-backed storage via Firebase for sync across sessions",
        ],
        tags: ["React", "Firebase", "Split Bill"],
        code: "",
        link: "https://expense-tracker-910c0.web.app/",
      },
    ],
  },
  Testimonials: {
    title: "Recommendations",
    subtitle: "MY REVIEWS",
    testimonials_content: [
      {
        review:
          "“Prince is very clever and honest about their task and his technical skills are great. He always does his assigned work with full of responsible and ethical way.”",
        img: avatar1,
        name: "Harshil Kaneria",
      },
      {
        review:
          "“Prince is an exceptional developer who has skillfully utilized Laravel, Alpine.js, Livewire, and Node.js on the Kheops project. He excelled in developing robust backend and interactive frontend, contributing to a solid architecture and enhanced user experience. Prince is also an effective communicator and a valuable collaborator, always ready to share his expertise and tackle problems proactively. His ongoing commitment to learning and innovation makes him a major asset to any project or company. I highly recommend him for his professionalism and dedication.”",
        img: reviewAvater2,
        name: "Mohamed Ali Akram Zerark",
      },
      {
        review:
          "“We hired Prince to develop a tiptap/ProseMirror content AI extension in JavaScript with an Express.js backend. He delivered high-quality work on time and maintained excellent communication throughout the project. Would happily work with him again.”",
        img: reviewAvater3,
        name: "Sacha Fournier",
      },
      {
        review:
          "“Price was great, did everything that we asked for and very quickly”",
      },
      {
        review:
          "Get working with Prince. He has excellent skills with both frontend design and development. He was able to successfully do the project I needed and exceeded expectations. I'll certainly hire him again for my next project.",
        name: "UI/UX Design",
      },
      {
        review:
          "Prince is a very proficient react developer that understands requirements and engineers well modularized code. Will be working with him in the future.",
        name: "react-js developer to build frontend page using Material-UI kit",
      },
      {
        review:
          "Great guy, would work with him again",
        name: "Next.js Full Stack Developer with TipTap.dev experience",
      },
      {
        review:
          "Good guy, great job, I highly recommend Prince !",
        name: "New features Tiptap editor",
      },
      
    ],
  },
  // Hireme: {
  //   title: "Hire Me",
  //   subtitle: "FOR YOUR PROJECTS",
  //   image1: Hireme_person,
  //   image2: Hireme_person2,
  //   para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
  //   btnText: "Hire Me",
  // },
  Experience: {
    title: "Experience",
    subtitle: "Contribution to World",
    experience_content: [
      //   {
      //   role: "Senior Frontend Engineer",
      //   company: "Intuz",
      //   date: "Fab 2025 - Present",
      //   para: "Working On React Js Based Project make Frontend of the Project",
      // },
      {
        role: "Frontend Developer",
        company: "The Devtime Technologies",
        date: "Aug 2023 - Present",
        para: "I worked here with Expertise in React.js/Vue.js/Tiptap. Consistently delivered on-time, high-quality work, achieving 100% Job Score with Top Rated Plus Employee. ",
      },
      {
        role: "SDE",
        company: "Simform Solutions",
        date: "Jan 2023 - July 2023",
        para: "React SDE Trainee developer with a passion for building dynamic and responsive user interfaces using React.js At Simform ",
      },
      {
        role: "Codechef Chapter Leader",
        company: "Codechef",
        date: "2020 - 21",
        para: "Competitive Programming Leader for 1 year at Codechef GEC-Rajkot Chapter for 2020-21 Batch.",
      },
    ],
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "princemakavana61",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/princemakavana61/",
      },
      {
        text: "PrinceMakavana",
        icon: AiFillGithub,
        link: "https://github.com/PrinceMakavana/",
      },
      {
        text: "@princemakavana61",
        icon: FaMedium,
        link: "https://medium.com/@princemakavana61",
      },
      {
        text: "I_am_prince",
        icon: FaStackOverflow,
        link: "https://stackoverflow.com/users/14263951/i-am-prince",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2025",
  },
};
