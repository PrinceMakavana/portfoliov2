// import images
import Hero_person from "./assets/images/Hero/person.png";

import cPlus from "./assets/images/Skills/c++.png";
import htmlLogo from "./assets/images/Skills/html.png";
import cssLogo from "./assets/images/Skills/css.png";
import sassLogo from "./assets/images/Skills/sass.png";
import bootstrapLogo from "./assets/images/Skills/bootstrap.png";
import tailwindLogo from "./assets/images/Skills/tailwind.png";
import javaScript from "./assets/images/Skills/javascript.png";
import typescriptLogo from "./assets/images/Skills/typescript.png";
import reactjs from "./assets/images/Skills/react.png";
import reduxLogo from "./assets/images/Skills/redux.png";
import muiLogo from "./assets/images/Skills/mui.png";
import firebaseLogo from "./assets/images/Skills/firebase.png";
import MongodbLogo from "./assets/images/Skills/mongodb.png";
import githubLogo from "./assets/images/Skills/github.png";
import awsLogo from "./assets/images/Skills/aws.png";
import tiptapLogo from "./assets/images/Skills/tiptap.png";
import vueJsLogo from "./assets/images/Skills/vuejs.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import codechefProject from "./assets/images/Projects/codechef.png";
import apyMaterialProject from "./assets/images/Projects/apyMaterial.png";
import indiWaterProject from "./assets/images/Projects/indiwater.png";
import expenseTrackerProject from "./assets/images/Projects/expenseTracker.png";
import scientificCalculatorProject from "./assets/images/Projects/scientific_calculator.png";

// import project3 from "./assets/images/Projects/img3.png";
// import person_project from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/review1.jpeg";
// import avatar2 from "./assets/images/Testimonials/avatar2.png";
// import avatar3 from "./assets/images/Testimonials/avatar3.png";
// import avatar4 from "./assets/images/Testimonials/avatar4.png";

// import Hireme_person from "./assets/images/Hireme/person.png";
// import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbArrowSharpTurnLeft, TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { GrSettingsOption } from "react-icons/gr";

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
    title: "Web Developer",
    firstName: "PRINCE",
    LastName: "MAKAVANA",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "C/C++",
        para: "1 year",
        logo: cPlus,
      },
      {
        name: "HTML",
        para: "+5 Year",
        logo: htmlLogo,
      },
      {
        name: "CSS",
        para: "+5 Year",
        logo: cssLogo,
      },
      {
        name: "SASS",
        para: "+3 Year",
        logo: sassLogo,
      },
      {
        name: "Bootstrap",
        para: "+3 Year",
        logo: bootstrapLogo,
      },
      {
        name: "Tailwind",
        para: "+3 Year",
        logo: tailwindLogo,
      },
      {
        name: "JavaScript",
        para: "+4 Year",
        logo: javaScript,
      },
      {
        name: "TypeScript",
        para: "+3 Year",
        logo: typescriptLogo,
      },
      {
        name: "Vue Js",
        para: "+3 Year",
        logo: vueJsLogo,
      },
       {
        name: "Tiptap",
        para: "+2 Year",
        logo: tiptapLogo,
      },
      {
        name: "React Js",
        para: "+3 Year",
        logo: reactjs,
      },
      {
        name: "Redux",
        para: "+3 Year",
        logo: reduxLogo,
      },
      {
        name: "Mateiral Ui",
        para: "+4 Year",
        logo: muiLogo,
      },
      {
        name: "Firebase",
        para: "+4 Year",
        logo: firebaseLogo,
      },
      {
        name: "MongoDB",
        para: "+1 Year",
        logo: MongodbLogo,
      },
      {
        name: "Github",
        para: "+5 Year",
        logo: githubLogo,
      },
      {
        name: "AWS",
        para: "1 Year",
        logo: awsLogo,
      },
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
    // image: person_project,
    project_content: [
      {
        title: "Codechef Chapter",
        para: "This is the Web-Site for Codechef GEC-Rajkot Chapter has been made by me.",
        image: codechefProject,
        code: "",
        link: "https://codechef-gec-rajkot-chapter.github.io/main/",
      },
      {
        title: "Apy Material",
        para: "Here we are adding all books related to GTU Computer Engineering and this is famous and High Ranked on Google. (+1M impression on Google Search)",
        image: apyMaterialProject,
        code: "",
        link: "https://www.gtuapymaterials.com",
      },
      {
        title: "indi Water",
        para: "...",
        image: indiWaterProject,
        code: "",
        link: "https://indiwater3.web.app/",
      },
      {
        title: "Scientific Calculator",
        para: "...",
        image: scientificCalculatorProject,
        code: "",
        link: "https://princesimform.github.io/scientific-calculator/",
      },
      {
        title: "Expense Tracker",
        para: "No need to remember the expenses. Use Split Bill to keep track of your bills and share your expenses with your friends.",
        image: expenseTrackerProject,
        code: "",
        link: "https://expense-tracker-910c0.web.app/",
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Prince is very clever and honest about their task and his technical skills are great. He always does his assigned work with full of responsible and ethical way.”",
        img: avatar1,
        name: "Harshil Kaneria",
      },
      {
        review:
          "“Prince is very clever and honest about their task and his technical skills are great. He always does his assigned work with full of responsible and ethical way.”",
        img: avatar1,
        name: "Harshil Kaneria",
      },
      {
        review:
          "“Prince is very clever and honest about their task and his technical skills are great. He always does his assigned work with full of responsible and ethical way.”",
        img: avatar1,
        name: "Harshil Kaneria",
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
      {
        role: "SDE",
        company: "Simform Solutions",
        date: "Jan 2023 - Present",
        para: "React SDE Trainee developer with a passion for building dynamic and responsive user interfaces using React.js At Simform ",
      },
      {
        role: "Web Development Intern",
        company: "Beta Tester",
        date: "Fab - May 2022",
        para: "Working On React Js Based Project make Frontend of the Project",
      },

      {
        role: "Codechef Chapter Leader",
        company: "Codechef",
        date: "2020 - 21",
        para: "Competitive Programming Leader for 1 year at Codechef GEC-Rajkot Chapter for 2020-21 Batch.",
      },
      {
        role: "Frontend Experience",
        company: "",
        date: "",
        para: "VueJs, React",
      },
    ],
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "princemakavana61@gmail.com",
        icon: GrMail,
        link: "mailto:princemakavana61@gmail.com",
      },
      {
        text: "+91 95108 25809",
        icon: MdCall,
        link: "https://wa.me/9510825809",
      },
      {
        text: "i_am_prince_1602",
        icon: BsInstagram,
        link: "https://www.instagram.com/i_am_prince_1602/",
      },
      {
        text: "PrinceMakavana",
        icon: AiFillGithub,
        link: "https://github.com/PrinceMakavana/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
