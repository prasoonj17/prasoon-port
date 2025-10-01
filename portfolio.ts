import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Prasoon Jain",
  title: "Hi, I'm Prasoon",
  description:
    "I'm a passionate Full Stack Web Developer with hands-on experience in building scalable applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). I’ve developed HRMS systems, e-commerce platforms, and education portals with features like role-based access, real-time updates, and RESTful APIs. I'm a self-motivated and adaptable individual with a strong interest in exploring new technologies and applying them to real-world projects. I thrive in collaborative environments and consistently aim to build efficient, user-focused solutions.",
  resumeLink: "https://drive.google.com/file/d/1Y42C4-sfGyJrdzw6HxaicJeYjR9jAG7I/view?usp=sharing",
};

export const openSource = {
  githubUserName: "prasoonj17",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:prasoonj02@gmail.com",
  linkedin: "https://www.linkedin.com/in/prasoon-jain-69ab15280/",
  github: "https://github.com/prasoonj17",
  instagram: "https://www.instagram.com/prasoon.jn/",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "A FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json",
      skills: [
        emoji("⚡ Building full-stack web applications using MERN stack (MongoDB, Express.js, React.js, Node.js)"),
        emoji("⚡ Developing highly interactive UIs with React.js and Tailwind CSS"),
        emoji("⚡ Building responsive static & dynamic websites using Next.js"),
        emoji("⚡ Creating secure and scalable RESTful APIs using Node.js & Express.js"),
        emoji("⚡ Integrating MongoDB for robust database solutions"),
      ],
      softwareSkills: [
        {
          skillName: "HTML",
          iconifyTag: "logos:html-5",
        },
        {
          skillName: "CSS",
          iconifyTag: "logos:css-3",
        },
        {
          skillName: "Tailwind CSS",
          iconifyTag: "logos:tailwindcss-icon",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Nodejs",
          iconifyTag: "logos:nodejs",
        },
        {
          skillName: "Expressjs",
          iconifyTag: "logos:express",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "logos:mongodb",
        },
        {
          skillName: "Firebase",
          iconifyTag: "logos:firebase",
        },
        {
          skillName: "GitHub",
          iconifyTag: "akar-icons:github-fill",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend (React, Next, Tailwind CSS)",
    progressPercentage: "90",
  },
  {
    Stack: "Backend (Node.js, Express.js)",
    progressPercentage: "85",
  },
  {
    Stack: "Database (MongoDB, Firebase)",
    progressPercentage: "80",
  },
  {
    Stack: "Programming (JavaScript, C++, SQL)",
    progressPercentage: "95",
  },
  {
    Stack: "Version Control (Git & GitHub)",
    progressPercentage: "90",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Birla Institute of Technology, Mesra",
    subHeader: "Masters of Computer Application",
    duration: "July 2023 - April 2025",
    desc: "",
    grade: "Grade A",
    descBullets: [],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Developer",
    company: "Lakshya IT Solutions",
    companyLogo: "/img/icons/common/lakshya.png",
    date: "March 2025 – Present",
    desc: "Contributed to end-to-end development of MERN-based platforms including job portals and HRMS solutions. Designed RESTful APIs, integrated third-party services, and implemented secure real-time features with WebSockets and WebRTC. Worked on deployment pipelines, hosting live applications on Hostinger with custom domains.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Clutchcoins",
    desc: "A secure multi-game platform for instant in-game currency delivery, featuring third-party API integration, real-time transactions, robust authentication, and competitive pricing. Full-stack development handled with deployment on a custom Hostinger domain.",
    link: "https://clutchcoins.com/",
  },
  {
    name: "Hanlys",
    desc: "An eCommerce website for premium peanut butter products. Built with the MERN stack, it provides a seamless shopping experience with a modern UI and efficient backend integration.",
    link: "https://hanlys.in/",
  },
  {
    name: "Rapid Digital Growth",
    desc: "A professional business website built with React to showcase digital marketing services, portfolios, and client success stories. Designed for performance and easy navigation.",
    link: "https://rapiddigitalgrowth.com/",
  },
  {
    name: "Placement Plaza",
    desc: "An informative web portal that connects students and job seekers with placement-related resources, updates, and training opportunities. Built for accessibility and content clarity.",
    link: "https://placementplaza.com/",
  },
  {
    name: "Viaje De Corazon",
    desc: "A travel and tour guide website built in React, offering detailed destination insights, travel tips, and service booking features for Spanish-speaking travelers.",
    link: "https://viajedecorazon.com/",
  },
];


export const seoData: SEODataType = {
  title: "Prasoon Jain",
  description: greetings.description,
  author: "Prasoon Jain",
  image: "https://avatars.githubusercontent.com/u/prasoonj17?v=4",
  url: "https://prasoonjain-portfolio.vercel.app",
  keywords: [
    "Prasoon",
    "Prasoon Jain",
    "@prasoonj17",
    "prasoonj17",
    "Portfolio",
    "Prasoon Portfolio",
    "Prasoon Jain Portfolio",
  ],
};