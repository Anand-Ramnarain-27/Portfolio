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
  Portweb,
  snake,
  Visualweb,
  ShoeBag,
  Current,
  threejs,
  unity,
  csharp,
  delphi,
  sql,
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
    title: "Fontend Developer",
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
  {
    name: "Unreal Engine",
    icon: unreal,
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
    date: "January 2024 - ",
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
    name: "API Website",
    description:
      "Embark on a cosmic journey at NASA Data Website, leveraging NASA's API for realtime celestial wonders. Explore data visualizations, play the asteroid game, where to defend earth from asteriods fetched through the API, and witness space station movements transformed into mesmerizing art.",
    tags: [
      {
        name: "API",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: Visualweb,
    source_code_link: "https://github.com/Anand-Ramnarain/Data_Website",
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
  //{
  //  name: "My First Portfolio Website",
  //  description:
  //    "My journey into the world of web development, This was my attempt at crafting a portfolio website using HTML, CSS, and JavaScript. To showcase my skills and creative endeavors, this project symbolizes my commitment to learning and growth in the digital realm of digital.",
  //  tags: [
  //    {
  //      name: "CSS",
  //      color: "blue-text-gradient",
  //    },
  //   {
  //      name: "HTML",
  //      color: "green-text-gradient",
  //    },
  //    {
  //      name: "JavaScript",
  //      color: "pink-text-gradient",
  //    },
  // ],
  //  image: Portweb,
  //  source_code_link: "https://github.com/Anand-Ramnarain-27/Portfolio-Website",
  //},
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
    image: Current,
    source_code_link: "https://github.com/Anand-Ramnarain-27/Portfolio",
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
    image: Current,
    source_code_link: "https://github.com/Anand-Ramnarain-27/Portfolio",
  },
  {
    name: "Space Shooter",
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
    image: Current,
    source_code_link: "https://github.com/Anand-Ramnarain-27/Portfolio",
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
    image: Current,
    source_code_link: "https://github.com/Anand-Ramnarain-27/Portfolio",
  },
  {
    name: "Easy Shoe & Bag Repair",
    description:
      "I collaborated with Easy Shoe and Bag Repair to develop a user-friendly website, leveraging the Godaddy platform. Our joint efforts resulted in a online presence tailored to the client's specifications, showcasing their expertise in shoe and bag repair services.",
    tags: [
      {
        name: "GoDaddy",
        color: "blue-text-gradient",
      },
      {
        name: "Frontend",
        color: "green-text-gradient",
      },
      {
        name: "Work Experience",
        color: "pink-text-gradient",
      },
    ],
    image: ShoeBag,
    source_code_link: "https://easybagrepair.co.za/home",
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
