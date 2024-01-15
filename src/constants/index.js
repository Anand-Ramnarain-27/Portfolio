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
  starbucks,
  wits,
  easyshoe,
  hschool,
  carrent,
  jobit,
  tripguide,
  threejs,
  unity,
  csharp,
  delphi,
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
      "Digital Arts Research Project",
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
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
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
