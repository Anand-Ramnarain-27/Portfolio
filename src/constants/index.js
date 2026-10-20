import {
  animation,
  backend,
  bbd,
  broforce,
  creator,
  crossEngineSpatialSdk,
  easyshoe,
  hacker,
  hschool,
  mobile,
  Platformer,
  splatWalker,
  team,
  Tower,
  upc,
  web,
  wits,
} from "../assets";
import arcWindows from "../assets/arclight/editor-windows.webp";
import bbdTitle from "../assets/bbd/bbd-title.webp";
import phxEnvHero from "../assets/phoenix/environment-hero.webp";
import geoDemoPoster from "../assets/sdk/geo-demo-poster.webp";

/**
 * Contact details and documents used in the hero, navbar, contact section and
 * footer. The CV lives in /public, so it is resolved through BASE_URL to keep
 * working under the /Portfolio/ prefix on GitHub Pages.
 */
export const profile = {
  name: "Anand Ramnarain",
  email: "anandram0207@gmail.com",
  location: "Barcelona, Spain",
  github: "https://github.com/Anand-Ramnarain-27",
  linkedin: "https://www.linkedin.com/in/anand-ramnarain-585096336",
  cv: `${import.meta.env.BASE_URL}Anand_Ramnarain_CV.pdf`,
};

/** Navbar entries, in page order. Each `id` matches the anchor rendered by SectionWrapper. */
export const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "work", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "university", title: "Education" },
  { id: "contact", title: "Contact" },
];

/** Profile links shown in the footer and contact section. */
export const socials = [
  { name: "CV (PDF)", url: profile.cv },
  { name: "GitHub", url: profile.github },
  { name: "LinkedIn", url: profile.linkedin },
  { name: "Email", url: `mailto:${profile.email}` },
];

/** Quick facts beside the About text. */
export const aboutFacts = [
  {
    label: "Currently",
    value: "Master's in Advanced Programming for AAA Games, UPC Barcelona (Oct 2025 – present)",
  },
  {
    label: "Strongest in",
    value: "C++17/20 · DirectX 12 & HLSL · engine and systems architecture",
  },
  { label: "Also", value: "TypeScript · React · Node · PostgreSQL · Unity & C#" },
  { label: "Languages", value: "English (fluent) · Spanish (learning)" },
];

/**
 * The areas I work in, each tied to the projects that show it. `projects`
 * holds case-study slugs, so every claim links to its evidence.
 */
export const focusAreas = [
  {
    title: "C++ & systems",
    icon: mobile,
    body: "Engine architecture, GPU memory and resource lifetimes, spatial data structures, multithreaded loading and hot reload.",
    projects: ["phoenix-engine", "arclight", "cross-engine-spatial-sdk"],
  },
  {
    title: "Graphics & rendering",
    icon: creator,
    body: "DirectX 12 and Metal, deferred PBR, shadows, compute shaders, GPU particles and post-processing.",
    projects: ["phoenix-engine", "arclight", "bound-by-death"],
  },
  {
    title: "SDKs, tools & testing",
    icon: backend,
    body: "Engine-independent APIs, editor and designer tools, automated tests and CI on more than one platform.",
    projects: ["cross-engine-spatial-sdk", "arclight", "geo-stream-sdk"],
  },
  {
    title: "Web & full-stack",
    icon: web,
    body: "React and TypeScript front ends, serverless and Node back ends, PostgreSQL, Docker and Azure.",
    projects: ["team-formation-platform", "splat-walker"],
  },
];

/**
 * Skills by area. `strong` = used in depth across several projects; `working`
 * = used to build at least one complete project; `familiar` = coursework or
 * small-scale use. Keep this honest: it is what an interviewer will probe.
 */
export const skillLevels = {
  strong: "Used in depth across several projects",
  working: "Used to build at least one complete project",
  familiar: "Coursework or small-scale use",
};

export const skills = [
  {
    area: "Languages",
    strong: ["C++17/20", "HLSL"],
    working: ["TypeScript / JavaScript", "C#", "SQL"],
    familiar: ["HTML & CSS", "Delphi"],
  },
  {
    area: "Engine & systems",
    strong: [
      "Engine architecture (modules, components)",
      "GPU resource lifetime & memory",
      "Debugging & root-cause analysis",
    ],
    working: [
      "Spatial data structures (octree, quadtree, grids)",
      "A* pathfinding & steering",
      "Collision & physics",
      "Multithreaded loading",
      "Hot reload (DLL scripting)",
    ],
    familiar: [],
  },
  {
    area: "Graphics",
    strong: ["DirectX 12", "Deferred PBR & IBL", "Compute shaders", "Post-processing"],
    working: [
      "Metal",
      "Shadow mapping",
      "GPU particles & skinning",
      "Three.js / WebGL",
      "Gaussian splatting",
    ],
    familiar: [],
  },
  {
    area: "Game engines",
    strong: [],
    working: ["Unity (C#)"],
    familiar: ["Unreal Engine (Blueprints, coursework)", "Blender"],
  },
  {
    area: "Web & back end",
    strong: [],
    working: ["React", "Node.js / Azure Functions", "PostgreSQL", "Prisma", "Docker"],
    familiar: ["Azure", "Flyway", "OpenAPI", "Tailwind CSS", "Vite"],
  },
  {
    area: "Build, test & tools",
    strong: ["Git & GitHub", "Visual Studio"],
    working: [
      "CMake",
      "GitHub Actions CI",
      "Unit testing (doctest, CTest)",
      "PIX",
      "RenderDoc",
      "Xcode",
    ],
    familiar: ["NUnit", "ESLint & Prettier"],
  },
];

/** Ways of working, shown under the skills grid. */
export const practices = [
  "Scrum on a 17-person team",
  "Code review, giving and receiving",
  "Working with designers and artists",
  "Writing docs: READMEs, changelogs, case studies",
];

/** Education timeline, newest first. */
export const university = [
  {
    title: "Master's in Advanced Programming for AAA Games",
    company: "Universitat Politècnica de Catalunya (UPC), Barcelona",
    icon: upc,
    date: "October 2025 - Present",
    points: [
      "Modern C++ and DirectX 12, 3D engine architecture, graphics and animation (PBR, image-based lighting, deferred shading, shadows, skinning), and AI and gameplay systems (steering, pathfinding, state machines, physics).",
      "Team project: Bound by Death, a co-op hack-and-slash built by 17 students on our own engine, run with Scrum, code review and milestone deadlines.",
      "Phoenix Engine grew out of the coursework; Arclight applies the same lectures to a new engine for Windows and macOS.",
    ],
  },
  {
    title: "BA Digital Arts (Honours)",
    company: "University of the Witwatersrand, Johannesburg",
    icon: wits,
    date: "January 2021 - December 2024",
    points: [
      "Specialised in Game Design and Interactive Media.",
      "Built games in Unity (C#), Unreal Engine (Blueprints) and plain JavaScript, and web applications with React.",
      "Explored AI in games, procedural generation and player modelling; final-year research project on games and artificial intelligence.",
    ],
  },
  {
    title: "National Senior Certificate",
    company: "Saint Martin's High School",
    icon: hschool,
    date: "January 2016 - December 2020",
    points: ["Completed secondary education."],
  },
];

/** Work timeline, newest first. */
export const experiences = [
  {
    title: "Software Developer (vacation work)",
    company: "BBD Software",
    icon: bbd,
    date: "November 2024 - December 2024",
    points: [
      "Built a full-stack web application with a small team during a one-month placement: React and TypeScript on the front end, PostgreSQL with Prisma ORM behind it.",
      "Set up Flyway database migrations and Docker containers for local and test environments, with deployment on Azure.",
      "Worked inside BBD's engineering process, from design through to a deployed application.",
    ],
  },
  {
    title: "Web Developer (freelance)",
    company: "Easy Shoe & Bag Repair",
    icon: easyshoe,
    date: "January 2023 - November 2023",
    points: [
      "Built and maintained the business's website on GoDaddy, working directly with the owner to turn their requirements into pages and a product catalogue.",
      "Improved how the site shows up in search results (SEO).",
    ],
  },
];

/**
 * Filters for the project list. Each project lists the ids it belongs to in
 * `categories`.
 */
export const projectCategories = [
  { id: "engines", label: "C++ & engines" },
  { id: "graphics", label: "Graphics" },
  { id: "tools", label: "SDKs & tools" },
  { id: "web", label: "Web & full-stack" },
  { id: "games", label: "Games & 3D" },
];

/**
 * Project cards, in display order. A card with `caseStudy` set (a slug from
 * constants/caseStudies.js) is listed under Featured and links to its case
 * study; the rest appear under More projects.
 *
 * `role` says plainly what I did and with whom. `links` are always visible on
 * the card (not only on hover), so they work on touch screens.
 */
export const projects = [
  {
    name: "Phoenix Engine",
    subtitle: "C++20 / DirectX 12 engine and editor",
    caseStudy: "phoenix-engine",
    role: "Solo · grew from Master's coursework",
    categories: ["engines", "graphics", "games"],
    description:
      "An engine I've kept extending since the graded coursework version: deferred PBR with tiled light culling and cascaded shadows, GPU skinning and particles, collision and physics, A* navigation, hot-reloaded gameplay scripting, and a File > Build pipeline for standalone games. Five public releases.",
    tags: ["C++20", "DirectX 12", "HLSL", "Engine architecture"],
    image: phxEnvHero,
    links: [
      { label: "Source", url: "https://github.com/Anand-Ramnarain-27/Anand-PhoenixEngine" },
      {
        label: "Releases",
        url: "https://github.com/Anand-Ramnarain-27/Anand-PhoenixEngine/releases",
      },
    ],
  },

  {
    name: "Arclight",
    subtitle: "Cross-platform C++20 engine for Windows and macOS",
    caseStudy: "arclight",
    role: "Solo · personal project",
    categories: ["engines", "graphics", "tools"],
    description:
      "A second engine, written from scratch to run natively on both platforms: one rendering interface over Direct3D 12 and Metal, HLSL compiled for both at build time, fence-based GPU resource lifetimes, glTF import and a dockable editor. CMake build, 78 unit tests and GitHub Actions CI on Windows and macOS.",
    tags: ["C++20", "Direct3D 12 + Metal", "CMake & CI", "Unit tests"],
    image: arcWindows,
    links: [{ label: "Source", url: "https://github.com/Anand-Ramnarain-27/arclight-engine" }],
  },

  {
    name: "Cross-Engine Spatial Data Streaming SDK",
    subtitle: "Engine-independent C++20 library",
    caseStudy: "cross-engine-spatial-sdk",
    role: "Solo",
    categories: ["tools", "engines"],
    description:
      "Streams large tiled 3D datasets within a fixed memory budget, using a quadtree index, level of detail and background loading behind one façade API. Integrated into Unity, Unreal and my DirectX 12 engine, with 187 automated tests. In a stress test the world grew 16×, and streaming stayed at 1–3 MB of memory while loading everything reached 268 MB.",
    tags: ["C++20", "API design", "Unity · Unreal · D3D12", "187 tests"],
    image: crossEngineSpatialSdk,
    links: [
      { label: "Source", url: "https://github.com/Anand-Ramnarain-27/cross-engine-spatial-sdk" },
    ],
  },

  {
    name: "Bound by Death",
    subtitle: "Co-op hack-and-slash on our own engine",
    caseStudy: "bound-by-death",
    role: "Team of 17 · my contributions",
    categories: ["games", "graphics", "engines"],
    description:
      "A top-down co-op game built by a 17-person Master's team on our own C++ / DirectX 12 engine. My part: the prefab system, light culling (checked on the GPU with PIX), post-processing and screen effects, a JSON-driven controller-haptics system designers tune without code, and VFX for both playable characters.",
    tags: ["C++", "DirectX 12", "Team of 17", "Tools & VFX"],
    image: bbdTitle,
    links: [
      { label: "Game website", url: "https://ravenwhisp.github.io/Ravenwhisp/#home" },
      { label: "Studio on itch.io", url: "https://ravenwhisp-studios.itch.io/" },
    ],
  },

  {
    name: "Team Formation Platform",
    subtitle: "Full-stack web application",
    caseStudy: "team-formation-platform",
    role: "Full-stack developer",
    categories: ["web"],
    description:
      "A web app for running student group projects: students submit and vote on ideas, the top ideas become teams, and the remaining students are assigned to them. React and TypeScript front end, a serverless TypeScript API on Azure Functions, PostgreSQL through Prisma, GitHub sign-in, and an Nx monorepo with Docker.",
    tags: ["TypeScript", "React", "Azure Functions", "PostgreSQL"],
    image: team,
    links: [
      { label: "Source", url: "https://github.com/Anand-Ramnarain-27/team-formation-project" },
    ],
  },

  {
    name: "Splat Walker",
    subtitle: "Gaussian-splat path viewer, web and Unity",
    caseStudy: "splat-walker",
    role: "Solo",
    categories: ["graphics", "web"],
    description:
      "Walk the exact route a 360° capture took through a Gaussian-splat scene, with spline playback, free-fly and a before/after comparison view. The camera path comes from the capture data (PCA and percentile framing), not hand-placed keys. Built for the web in Three.js, then ported to Unity, where I traced three different bugs that shared one symptom.",
    tags: ["TypeScript", "Three.js", "Unity & C#", "Gaussian splatting"],
    image: splatWalker,
    links: [
      { label: "Live demo", url: "https://anand-ramnarain-27.github.io/splat-walker/" },
      { label: "Source (web)", url: "https://github.com/Anand-Ramnarain-27/splat-walker" },
      { label: "Source (Unity)", url: "https://github.com/Anand-Ramnarain-27/splat-walker-unity" },
    ],
  },

  {
    name: "Geo Stream SDK",
    subtitle: "Unity package for streaming LiDAR point clouds",
    caseStudy: "geo-stream-sdk",
    role: "Solo",
    categories: ["tools", "graphics"],
    description:
      "An installable Unity SDK that streams multi-million-point LiDAR (LAS) point clouds at runtime. Points are split into a spatial grid at import, then tiles stream in and out by camera distance through a GPU-instanced renderer with a memory budget, so a dataset never has to be fully loaded. Covered by NUnit tests.",
    tags: ["C#", "Unity", "Streaming", "NUnit"],
    image: geoDemoPoster,
    links: [{ label: "Source", url: "https://github.com/Anand-Ramnarain-27/geo-stream-sdk" }],
  },

  {
    name: "Hacker vs Cyberspace",
    subtitle: "Browser platformer in plain JavaScript",
    role: "Solo · Digital Arts project",
    categories: ["games", "web"],
    description:
      "A cyberpunk 2D platformer with no engine: 20 levels, EMP and gravity-inversion abilities on cooldowns, adjustable difficulty with best-time tracking, and touch controls for phones. Balanced through rounds of playtesting.",
    tags: ["JavaScript", "Game loop", "Playtesting"],
    image: hacker,
    links: [
      {
        label: "Play in browser",
        url: "https://anand-ramnarain-27.github.io/Hacker_Vs_CyberSpace/",
      },
      { label: "Source", url: "https://github.com/Anand-Ramnarain-27/digital_arts_project" },
    ],
  },

  {
    name: "Broforce Clone",
    subtitle: "Unity action platformer",
    role: "Solo",
    categories: ["games"],
    description:
      "A recreation of Broforce's first level in Unity and C#: tile-based destructible terrain where each tile has health and collapses under gravity, explosive props with a blast radius, and a new character and weapon on every life.",
    tags: ["Unity", "C#", "Gameplay"],
    image: broforce,
    links: [
      {
        label: "Play in browser",
        url: "https://anand-ramnarain-27.github.io/Broforce-Clone-Build/",
      },
      { label: "Source", url: "https://github.com/Anand-Ramnarain-27/Broforce-Game-Files" },
    ],
  },

  {
    name: "Tower Defense",
    subtitle: "Unity game for a Games & AI course",
    role: "Course project",
    categories: ["games"],
    description:
      "A Unity and C# tower defense game with AI-controlled enemies, wave generation and difficulty tuning. The repository holds a playable Windows build rather than source code.",
    tags: ["Unity", "C#", "Game AI"],
    image: Tower,
    links: [
      {
        label: "Windows build",
        url: "https://github.com/Anand-Ramnarain-27/Tower_Defense_Game_Build",
      },
    ],
  },

  {
    name: "2.5D Platformer",
    subtitle: "Unreal Engine, two-person team",
    role: "Two-person team · gameplay programming",
    categories: ["games"],
    description:
      "My partner built the art and level layout; I built the gameplay in Blueprints: player movement, health and damage from laser hazards, push-and-pull blocks and elevators. The repository holds a sample level.",
    tags: ["Unreal Engine", "Blueprints", "Gameplay"],
    image: Platformer,
    links: [{ label: "Source", url: "https://github.com/Anand-Ramnarain-27/2.5D_Platformer" }],
  },

  {
    name: "3D Animation",
    subtitle: "Blender short, 15 seconds",
    role: "Solo · coursework",
    categories: ["games"],
    description:
      "An exam project: rigged two supplied characters, animated a conversation on a bench to a given audio clip, and built the surrounding environment.",
    tags: ["Blender", "Rigging", "Animation"],
    image: animation,
    links: [{ label: "Files", url: "https://github.com/Anand-Ramnarain-27/My_Animation" }],
  },
];
