import {
  animation,
  backend,
  bbd,
  broforce,
  cplus,
  creator,
  crossEngineSpatialSdk,
  csharp,
  css,
  delphi,
  easyshoe,
  git,
  hacker,
  hschool,
  html,
  javascript,
  mobile,
  nodejs,
  Platformer,
  reactjs,
  splatWalker,
  splatWalkerUnity,
  sql,
  tailwind,
  team,
  threejs,
  Tower,
  unity,
  unreal,
  upc,
  web,
  wits,
} from "../assets";
import bbdTitle from "../assets/bbd/bbd-title.webp";
import phxEnvHero from "../assets/phoenix/environment-hero.webp";
import geoDemoPoster from "../assets/sdk/geo-demo-poster.webp";

/** Navbar entries. Each `id` matches the anchor rendered by SectionWrapper. */
export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" },
  { id: "university", title: "Education" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

/** Profile links shown in the footer. */
export const socials = [
  { name: "GitHub", url: "https://github.com/Anand-Ramnarain-27" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/anand-ramnarain-585096336" },
  { name: "Email", url: "mailto:anandram0207@gmail.com" },
  // To link a CV, add the PDF to /public and point at it through BASE_URL so
  // the path survives the /Portfolio/ prefix on GitHub Pages:
  // { name: "CV", url: `${import.meta.env.BASE_URL}Anand_Ramnarain_CV.pdf` },
];

/** Role cards in the About section. */
export const services = [
  { title: "Gameplay Programmer", icon: web },
  { title: "Game Engine Developer", icon: mobile },
  { title: "Full-Stack Developer", icon: backend },
  { title: "Interactive Systems Designer", icon: creator },
];

/** Every technology shown in the Tech section; grouping happens in Tech.jsx. */
export const technologies = [
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

/** Education timeline, newest first. */
export const university = [
  {
    title: "Master’s in Advanced Programming for AAA Games",
    company: "Universitat Politècnica de Catalunya (UPC)",
    icon: upc,
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
    company: "University of the Witwatersrand",
    icon: wits,
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
    company: "Saint Martin's High School",
    icon: hschool,
    date: "January 2016 - December 2020",
    points: [
      "Completed secondary education with a focus on analytical thinking and problem-solving.",
    ],
  },
];

/** Work timeline, newest first. */
export const experiences = [
  {
    title: "Software Development Vacation Work",
    company: "BBD Software",
    icon: bbd,
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
    company: "Easy Shoe & Bag Repair",
    icon: easyshoe,
    date: "March 2020 - April 2021",
    points: [
      "Developed and maintained a business website using GoDaddy.",
      "Worked directly with clients to meet functional and design requirements.",
      "Managed product catalogues and improved search engine visibility (SEO).",
    ],
  },
];

/**
 * Project cards, in display order. A card with `caseStudy` set (a slug from
 * constants/caseStudies.js) is listed under Featured and links to its case
 * study; the rest appear under More projects. Empty link fields are hidden.
 */
export const projects = [
  {
    name: "Phoenix Engine — Custom C++ / DirectX 12 Engine",
    caseStudy: "phoenix-engine",
    description:
      "My own DirectX 12 engine, built from scratch in C++: deferred PBR with tiled light culling and cascaded shadows, GPU-simulated particles and trails, volumetric fog and a full post-process stack, GPU skinning, physics, AI navigation and a custom ImGui editor. 50 HLSL shaders, 4 public releases.",
    tags: ["C++", "DirectX12", "Graphics"],
    image: phxEnvHero,
    sourceUrl: "https://github.com/Anand-Ramnarain-27/Anand-PhoenixEngine",
  },

  {
    name: "Bound by Death",
    caseStudy: "bound-by-death",
    description:
      "A top-down co-op hack-and-slash made by a 17-person team on our own engine. I built the prefab system, post-processing and screen effects, light culling, a data-driven haptics system, and the VFX for both playable characters.",
    tags: ["C++", "Team of 17", "VFX / Rendering"],
    image: bbdTitle,
    websiteUrl: "https://ravenwhisp.github.io/Ravenwhisp/#home",
    itchUrl: "https://ravenwhisp-studios.itch.io/",
    sourceUrl: "",
  },

  {
    name: "Cross-Engine Spatial Data Streaming SDK",
    caseStudy: "cross-engine-spatial-sdk",
    description:
      "An engine-independent C++20 SDK for streaming large tiled spatial datasets, with quadtree indexing, LOD, and memory-budgeted async streaming behind one façade. Proven with Unity, Unreal, and a custom DirectX 12 engine, backed by 187 automated tests.",
    tags: ["C++20", "Cross-Engine", "Streaming SDK"],
    image: crossEngineSpatialSdk,
    sourceUrl: "https://github.com/Anand-Ramnarain-27/cross-engine-spatial-sdk",
  },

  {
    name: "Tower Defense",
    description:
      "A Unity-based tower defense game built in C#, featuring AI-driven enemies using behaviour trees and procedural wave generation. Designed scalable gameplay systems and dynamic difficulty to create engaging and replayable combat scenarios.",
    tags: ["C#", "Unity", "AI"],
    image: Tower,
    sourceUrl: "https://github.com/Anand-Ramnarain-27/Tower_Defense_Game_Build",
  },

  {
    name: "Broforce Clone",
    description:
      "An action platformer built in Unity using C#, featuring destructible environments, character switching, and combat systems inspired by Broforce. Focused on gameplay responsiveness, physics interactions, and player feedback systems.",
    tags: ["Unity", "C#", "Gameplay"],
    image: broforce,
    sourceUrl: "https://github.com/Anand-Ramnarain-27/Broforce-Game-Files",
  },

  {
    name: "Splat Walker",
    caseStudy: "splat-walker",
    description:
      "A Gaussian splat viewer built in Three.js that treats a captured path as a first-class citizen: retrace the exact route a 360° scan walked, with smooth spline playback, free-fly exploration, and a side-by-side comparison view. Real-world capture data auto-analyzed (PCA, percentile-based framing) to build the camera path, not hand-authored.",
    tags: ["Three JS", "TypeScript", "Gaussian Splatting"],
    image: splatWalker,
    sourceUrl: "https://github.com/Anand-Ramnarain-27/splat-walker",
    demoUrl: "https://anand-ramnarain-27.github.io/splat-walker/",
  },

  {
    name: "Splat Walker (Unity)",
    caseStudy: "splat-walker",
    description:
      "A Unity port of Splat Walker, rebuilt on Unity's GPU-compute Gaussian splat rendering pipeline instead of the browser. Tracked down and fixed three distinct rendering bugs along the way — an SH-band mismatch corrupting the shader's color sampling, a coordinate-flip sign error in the camera framing math, and a corrupted-splat filtering issue — each producing the same misleading symptom before being root-caused individually.",
    tags: ["Unity", "C#", "Gaussian Splatting"],
    image: splatWalkerUnity,
    sourceUrl: "https://github.com/Anand-Ramnarain-27/splat-walker-unity",
  },

  {
    name: "Geo Stream SDK",
    caseStudy: "geo-stream-sdk",
    description:
      "An installable Unity SDK for streaming large-scale LiDAR point cloud data (LAS) at runtime, aimed at real-world geospatial visualization workflows. Partitions a point cloud into a spatial grid at import time, then streams tiles in and out based on camera distance through a GPU-instanced renderer with a memory budget, so multi-million-point datasets never need to be fully resident.",
    tags: ["Unity", "C#", "Point Cloud"],
    image: geoDemoPoster,
    sourceUrl: "https://github.com/Anand-Ramnarain-27/geo-stream-sdk",
  },

  {
    name: "Team Formation Platform",
    description:
      "A full-stack application built using an NX monorepo with TypeScript, Prisma, and Azure Functions. Includes features like idea voting, dynamic team allocation, and role-based access control within a scalable system architecture.",
    tags: ["TypeScript", "Azure", "Full-Stack"],
    image: team,
    sourceUrl: "https://github.com/Anand-Ramnarain-27/team-formation-project",
  },

  {
    name: "2.5D Platformer",
    description:
      "A 2.5D platformer developed in Unreal Engine using Blueprints and C++, focusing on player movement, collision systems, and level scripting. Explores hybrid Blueprint and C++ workflows for responsive gameplay design.",
    tags: ["Unreal", "C++", "Gameplay"],
    image: Platformer,
    sourceUrl: "https://github.com/Anand-Ramnarain-27/2.5D_Platformer",
  },

  {
    name: "Hacker vs Cyberspace",
    description:
      "A browser-based JavaScript game built without external engines, focusing on core game loop implementation, DOM rendering, and interactive systems. Strengthened understanding of fundamental game programming concepts and logic.",
    tags: ["JavaScript", "Game Dev"],
    image: hacker,
    sourceUrl: "https://github.com/Anand-Ramnarain-27/digital_arts_project",
  },

  {
    name: "3D Animation Project",
    description:
      "A 3D animation created in Blender, focusing on character movement, timing, and visual storytelling. Includes asset creation, rigging, and animation sequencing to demonstrate understanding of animation pipelines and workflows.",
    tags: ["Blender", "Animation", "3D"],
    image: animation,
    sourceUrl: "https://github.com/Anand-Ramnarain-27/My_Animation",
  },
];
