import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  cplus,
  unreal,
  wits,
  easyshoe,
  hschool,
  broforce,
  animation,
  Zombie,
  Platformer,
  team,
  threejs,
  unity,
  csharp,
  delphi,
  sql,
  hacker,
  Tower,
  bbd,
  upc,
  engine
} from "../assets";

// ---------------- NAV ----------------
export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" },
  { id: "university", title: "Education" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

// ---------------- SERVICES ----------------
const services = [
  { title: "Gameplay Programmer", icon: web },
  { title: "Game Engine Developer", icon: mobile },
  { title: "Full-Stack Developer", icon: backend },
  { title: "Interactive Systems Designer", icon: creator },
];

// ---------------- TECHNOLOGIES ----------------
const technologies = [
  { name: "C++", icon: cplus },
  { name: "C#", icon: csharp },
  { name: "Unity", icon: unity },
  { name: "Unreal Engine", icon: unreal },
  { name: "DirectX 12", icon: cplus },
  { name: "Three JS", icon: threejs },
  { name: "React JS", icon: reactjs },
  { name: "JavaScript", icon: javascript },
  { name: "Node JS", icon: nodejs },
  { name: "SQL", icon: sql },
  { name: "Git", icon: git },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Delphi", icon: delphi },
];

// ---------------- EDUCATION ----------------
const university = [
  {
    title: "Master’s in Advanced Programming for AAA Games",
    company_name: "Universitat Politècnica de Catalunya (UPC)",
    icon: upc,
    iconBg: "#383E56",
    date: "October 2025 - Present",
    points: [
      "Specialising in advanced C++ for real-time systems, memory management, and performance optimisation.",
      "Developed a custom 3D game engine using DirectX 12, including rendering pipeline, PBR shading, and resource management.",
      "Worked on graphics programming topics such as shaders, lighting models, and image-based lighting (IBL).",
      "Implemented gameplay and AI systems including behaviour trees and real-time decision making.",
      "Collaborating in Agile/Scrum teams to deliver complete game projects using industry workflows.",
    ],
  },
  {
    title: "BA Digital Arts (Honours)",
    company_name: "University of the Witwatersrand",
    icon: wits,
    iconBg: "#383E56",
    date: "January 2021 - December 2024",
    points: [
      "Specialised in Game Design and Interactive Media.",
      "Developed games using Unity and C#, focusing on gameplay systems, mechanics, and player experience.",
      "Built interactive web applications using JavaScript, React, and modern frontend technologies.",
      "Explored AI in games, procedural generation, and player modelling.",
      "Completed a final research project on Games and Artificial Intelligence.",
    ],
  },
  {
    title: "National Senior Certificate",
    company_name: "Saint Martin's High School",
    icon: hschool,
    iconBg: "#383E56",
    date: "January 2016 - December 2020",
    points: [
      "Completed secondary education with a focus on analytical thinking and problem-solving.",
    ],
  },
];

// ---------------- EXPERIENCE ----------------
const experiences = [
  {
    title: "Software Development Vacation Work",
    company_name: "BBD Software",
    icon: bbd,
    iconBg: "#383E56",
    date: "November 2024 - December 2024",
    points: [
      "Built a full-stack web application using React, TypeScript, PostgreSQL, and Prisma ORM.",
      "Implemented database migrations using Flyway and containerised services using Docker.",
      "Worked within a structured development environment using modern engineering practices.",
      "Collaborated in a team to design and deliver a scalable application.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Easy Shoe & Bag Repair",
    icon: easyshoe,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developed and maintained a business website using GoDaddy.",
      "Worked directly with clients to meet functional and design requirements.",
      "Managed product catalogues and improved search engine visibility (SEO).",
    ],
  },
];

// ---------------- PROJECTS ----------------
const projects = [
  {
    name: "Custom 3D Game Engine (DirectX 12)",
    description:
      "A custom 3D game engine built in C++ using DirectX 12, featuring a real-time rendering pipeline, PBR shading, and image-based lighting (IBL). Focused on performance, memory management, and modern graphics programming techniques.",
    tags: [
      { name: "C++", color: "blue-text-gradient" },
      { name: "DirectX12", color: "green-text-gradient" },
      { name: "Graphics", color: "pink-text-gradient" },
    ],
    image: engine,
    source_code_link:
      "https://github.com/Anand-Ramnarain-27/Anand-PhoenixEngine",
  },

  {
    name: "Tower Defense",
    description:
      "A Unity-based tower defense game built in C#, featuring AI-driven enemies using behaviour trees and procedural wave generation. Designed scalable gameplay systems and dynamic difficulty to create engaging and replayable combat scenarios.",
    tags: [
      { name: "C#", color: "blue-text-gradient" },
      { name: "Unity", color: "green-text-gradient" },
      { name: "AI", color: "pink-text-gradient" },
    ],
    image: Tower,
    source_code_link:
      "https://github.com/Anand-Ramnarain-27/TowerDefense_Game",
  },

  {
    name: "Broforce Clone",
    description:
      "An action platformer built in Unity using C#, featuring destructible environments, character switching, and combat systems inspired by Broforce. Focused on gameplay responsiveness, physics interactions, and player feedback systems.",
    tags: [
      { name: "Unity", color: "blue-text-gradient" },
      { name: "C#", color: "green-text-gradient" },
      { name: "Gameplay", color: "pink-text-gradient" },
    ],
    image: broforce,
    source_code_link:
      "https://github.com/Anand-Ramnarain-27/Broforce-Game-Files",
  },

  {
    name: "Zombie Mayhem",
    description:
      "A top-down survival shooter developed in Unity using C#, featuring enemy AI with state machines, wave spawning systems, and player progression mechanics. Focused on combat feel, responsiveness, and overall gameplay performance.",
    tags: [
      { name: "C#", color: "blue-text-gradient" },
      { name: "Unity", color: "green-text-gradient" },
      { name: "AI Systems", color: "pink-text-gradient" },
    ],
    image: Zombie,
    source_code_link:
      "https://github.com/Anand-Ramnarain-27/Zombie_Survivor",
  },

  {
    name: "Team Formation Platform",
    description:
      "A full-stack application built using an NX monorepo with TypeScript, Prisma, and Azure Functions. Includes features like idea voting, dynamic team allocation, and role-based access control within a scalable system architecture.",
    tags: [
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "Azure", color: "green-text-gradient" },
      { name: "Full-Stack", color: "pink-text-gradient" },
    ],
    image: team,
    source_code_link:
      "https://github.com/Anand-Ramnarain-27/team-formation-project",
  },

  {
    name: "2.5D Platformer",
    description:
      "A 2.5D platformer developed in Unreal Engine using Blueprints and C++, focusing on player movement, collision systems, and level scripting. Explores hybrid Blueprint and C++ workflows for responsive gameplay design.",
    tags: [
      { name: "Unreal", color: "blue-text-gradient" },
      { name: "C++", color: "green-text-gradient" },
      { name: "Gameplay", color: "pink-text-gradient" },
    ],
    image: Platformer,
    source_code_link:
      "https://github.com/Anand-Ramnarain-27/2.5D_Platformer",
  },

  {
    name: "Hacker vs Cyberspace",
    description:
      "A browser-based JavaScript game built without external engines, focusing on core game loop implementation, DOM rendering, and interactive systems. Strengthened understanding of fundamental game programming concepts and logic.",
    tags: [
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "Game Dev", color: "green-text-gradient" },
    ],
    image: hacker,
    source_code_link:
      "https://github.com/Anand-Ramnarain-27/digital_arts_project",
  },

  {
    name: "3D Animation Project",
    description:
      "A 3D animation created in Blender, focusing on character movement, timing, and visual storytelling. Includes asset creation, rigging, and animation sequencing to demonstrate understanding of animation pipelines and workflows.",
    tags: [
      { name: "Blender", color: "blue-text-gradient" },
      { name: "Animation", color: "green-text-gradient" },
      { name: "3D", color: "pink-text-gradient" },
    ],
    image: animation,
    source_code_link:
      "https://github.com/Anand-Ramnarain-27/My_Animation",
  },
];

export {
  services,
  technologies,
  experiences,
  projects,
  university,
};