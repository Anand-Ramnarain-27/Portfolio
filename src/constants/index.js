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
  snake,
  team,
  Current,
  threejs,
  unity,
  csharp,
  delphi,
  sql,
  hacker,
  Tower,
  bbd,
  todo,
  tetris
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "university",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Game Designer",
    icon: mobile,
  },
  {
    title: "Game Developer",
    icon: backend,
  },
  {
    title: "Programmer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Delphi",
    icon: delphi,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "C++",
    icon: cplus,
  },
];

const university = [
  {
    title: "High School",
    company_name: "Saint Martin's High School",
    icon: hschool,
    iconBg: "#383E56",
    date: "January 2016 - December 2020",
    points: [
      "From January 2016 to December 2020, I attended Saint Martin's High School where I obtained my National Senior Certificate.",
    ],
  },
  {
    title: "First Year",
    company_name: "University Of Witwatersrand",
    icon: wits,
    iconBg: "#383E56",
    date: "January 2021 - December 2021",
    points: [
      "Game Design IA and IB",
      "Digital Arts Practice IA and IB",
      "Film, Visual and Performing Arts IA and IB",
      "Elementary Isizulu Language and Culture IA and IB",
      "Auxiliary Mathematics I",
    ],
  },
  {
    title: "Second Year",
    company_name: "University Of Witwatersrand",
    icon: wits,
    iconBg: "#383E56",
    date: "January 2022 - December 2022",
    points: [
      "Game Design IIA and IIB",
      "Digital Art Design Project",
      "Digital Art Theory II",
      "Digital Arts Practice II",
      "Film Visual and Performing Arts IIA",
    ],
  },
  {
    title: "Third Year",
    company_name: "University Of Witwatersrand",
    icon: wits,
    iconBg: "#383E56",
    date: "January 2023 - December 2023",
    points: [
      "Game Design IIIA and IIIB",
      "Digital Art Practice Theory IIIA and IIIB",
      "Film Visual and Performing Arts IIIA and IIIB",
      "Interactive Media IIIA and IIIB",
    ],
  },
  {
    title: "Fourth Year",
    company_name: "University Of Witwatersrand",
    icon: wits,
    iconBg: "#383E56",
    date: "January 2024 - December 2024",
    points: [
      "Digital Arts Research Project: Games And Artificial Intelligence",
      "Digital Art Project IV",
      "Game Design IV",
      "Interactive Media IV",
    ],
  },
];

const experiences = [
  {
    title: "Vaction Work",
    company_name: "BBD Software",
    icon: bbd,
    iconBg: "#383E56",
    date: "November 2024 - December 2024",
    points: [
      "Designed and developed a web application from scratch using modern technologies and best practices.",
      "Utilized tools and frameworks including Flyway for database migrations, Prisma as an ORM, Docker for containerization, and Azure for local development and testing.",
      "Developed the frontend using TypeScript and React and implemented the backend with PostgreSQL for data storage.",
      "Collaborated effectively in a team to create a robust and scalable solution.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Easy Shoe & Bag Repair",
    icon: easyshoe,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining a web application using GoDaddy.",
      "Collaborating with the client and their teams to fit the website to their specifications.",
      "Product Cataloging.",
      "Search Engine Optimization.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "To Do List",
    description:
      "This was the start of my journey in C++ as an organized adventure with the C++ To-Do List App, where tasks come to life in a sleek command-line world. Add missions with priority and category, view them in style, save your journey to a file, and reload it later to continue your quest toward productivity.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Project",
        color: "green-text-gradient",
      },
      {
        name: "First",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/Anand-Ramnarain-27/Todo_List",
  },
  {
    name: "Broforce Clone",
    description:
      "Experience the adrenaline of my Broforce-inspired game clone, featuring destructible terrain, dynamic character-switching, and scattered destructive items for an intense gaming experience reminiscent of the original. Relive the iconic first level in a fresh and thrilling way!",
    tags: [
      {
        name: "Unity Engine",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "Clone",
        color: "pink-text-gradient",
      },
    ],
    image: broforce,
    source_code_link:
      "https://github.com/Anand-Ramnarain-27/Broforce-Game-Files",
  },
  {
   name: "Tetris",
   description:
     "My journey into the world of game dev with C++ started with this retro-charged Tetris Game, where falling blocks test your reflexes and strategy. Rotate, stack, and clear lines in a race against gravity, as pixelated shapes dance to your command in a hypnotic loop of logic, rhythm, and arcade nostalgia.",
   tags: [
     {
       name: "C++",
       color: "blue-text-gradient",
     },
    {
       name: "Learning",
       color: "green-text-gradient",
     },
     {
       name: "build",
       color: "pink-text-gradient",
     },
  ],
   image: tetris,
   source_code_link: "https://github.com/Anand-Ramnarain-27/Tetris",
  },
  {
    name: "Snake Clone",
    description:
      "I created a clone of the classic Nokia Snake game, aiming to enhance snake movement and level design. The project challenged me to improve my coding skills and explore creative ways to elevate the traditional gameplay experience.",
    tags: [
      {
        name: "Unity Engine",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "Clone",
        color: "pink-text-gradient",
      },
    ],
    image: snake,
    source_code_link: "https://github.com/Anand-Ramnarain-27/Snake-Game-Files",
  },
  {
    name: "Current Portfolio Website",
    description:
      "Explore my journey and accomplishments through my current portfolio website, a testament to my progress and expertise in utilizing React, HTML, JavaScript, CSS and Tailwind to create an immersive digital experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Current,
    source_code_link: "https://github.com/Anand-Ramnarain-27/Portfolio",
  },
  {
    name: "Zombie Mayhem",
    description:
      "Explore my journey and accomplishments through my current portfolio website, a testament to my progress and expertise in utilizing React, HTML, JavaScript, CSS and Tailwind to create an immersive digital experience.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Unity",
        color: "pink-text-gradient",
      },
    ],
    image: Zombie,
    source_code_link: "https://github.com/Anand-Ramnarain-27/Zombie_Survivor",
  },
  {
    name: "2.5D Platformer",
    description:
      "Explore my journey and accomplishments through my current portfolio website, a testament to my progress and expertise in utilizing React, HTML, JavaScript, CSS and Tailwind to create an immersive digital experience.",
    tags: [
      {
        name: "Blueprint",
        color: "blue-text-gradient",
      },
      {
        name: "Unreal",
        color: "green-text-gradient",
      },
      {
        name: "C++",
        color: "pink-text-gradient",
      },
    ],
    image: Platformer,
    source_code_link: "https://github.com/Anand-Ramnarain-27/2.5D_Platformer",
  },
  {
    name: "My Animation",
    description:
      "Explore my journey and accomplishments through my current portfolio website, a testament to my progress and expertise in utilizing React, HTML, JavaScript, CSS and Tailwind to create an immersive digital experience.",
    tags: [
      {
        name: "Blender",
        color: "blue-text-gradient",
      },
      {
        name: "Asset Creation",
        color: "green-text-gradient",
      },
      {
        name: "Animation",
        color: "pink-text-gradient",
      },
    ],
    image: animation,
    source_code_link: "https://github.com/Anand-Ramnarain-27/My_Animation",
  },
  {
    name: "Tower Defense",
    description:
    "I developed a game using C#, integrating AI through procedural generation and behavior trees. This project highlights dynamic enemy patterns and evolving challenges, showcasing my ability to build engaging gameplay with intelligent system design.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Unity",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
    ],
    image: Tower,
    source_code_link: "https://github.com/Anand-Ramnarain-27/TowerDefense_Game",
  },
  {
    name: "Hacker Vs Cyberspace",
    description:
      "Explore my journey and accomplishments through my current portfolio website, a testament to my progress and expertise in utilizing React, HTML, JavaScript, CSS and Tailwind to create an immersive digital experience.",
    tags: [
      {
        name: "Pure JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Game",
        color: "green-text-gradient",
      },
      {
        name: "Asset Creation",
        color: "pink-text-gradient",
      },
    ],
    image: hacker,
    source_code_link: "https://github.com/Anand-Ramnarain-27/digital_arts_project",
  },
  {
    name: "Team Formation Project",
    description:
      "This project is an NX monorepo and a stack of Docker, Prisma, Webpack, and Azure Functions. Shape teams through idea votes, dynamic grouping, and real-time peer reviews — all under an admin-student role system and brought to life with my first APIs.",
    tags: [
      {
        name: "Azure Functions",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: team,
    source_code_link: "https://github.com/Anand-Ramnarain-27/team-formation-project",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  university,
};
