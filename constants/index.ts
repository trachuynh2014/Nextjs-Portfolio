import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  figma,
  docker,
  spotify,
  getquorum,
  socast,
  vue,
  postgresql,
  redis,
  jwt,
  circleci,
  airbnb,
  moviecrunchers,
} from "../public/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "Json Web Token",
    icon: jwt,
  },
  {
    name: "circleci",
    icon: circleci,
  },
];

const experiences = [
  {
    title: "Junior Web Developer",
    company_name: "Socast",
    icon: socast,
    iconBg: "#E6DEDD",
    date: "June 2021 – Aug 2021",
    url: "https://www.socastdigital.com",
    points: [
      "Spearheaded the development of new platform features, contributing to design and architectural decisions that resulted in a 35% increase in user engagement.",
      "Developed custom WordPress themes, widgets, and shortcodes that reduced page load times by 20% and improved SEO.",
      "Utilized Jira, Bitbucket, Confluence, and New Relic to manage project workflows and resolve errors, resulting in a 15% increase in productivity and a 10% decrease in bug rates.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "GetQuorum",
    icon: getquorum,
    iconBg: "#383E56",
    date: "Sep 2021 – Aug 2022",
    url: "https://www.getquorum.com",
    points: [
      "Implemented a new approach for testing the platform's frontend using Cypress, resulting in improved testing efficiency and higher quality code.",
      "Collaborated with a team of 10+ developers to successfully deliver complex projects, resulting in an increase in team productivity by 25% and positive feedback from project stakeholders.",
      "Designed and developed new API endpoints for internal RESTful APIs, resulting in a 30% reduction in data processing time and improved system performance.",
      "Developed a user-friendly and responsive frontend interface for a new industry-changing virtual meeting platform, which improved user engagement by 40% and reduced page load times by 32%.",
    ],
  },
];

const projects = [
  {
    name: "Finn's stays",
    description:
      "Web-based platform that allows users to search, book, and manage property rentals from various providers, providing a convenient and efficient solution for accommodation needs.",
    tags: [
      {
        name: "nextjs",
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
    image: airbnb,
    source_code_link: "https://finn-stay.vercel.app/",
  },
  {
    name: "Finn's musics",
    description:
      "An extensive audio streaming service that allows users to access a vast library of music, podcasts, and other audio content, while providing personalized recommendations based on their preferences and listening history.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: spotify,
    source_code_link: "https://finn-spotify.vercel.app",
  },
  {
    name: "Finn's movies",
    description:
      "The ultimate hub for movie analysis, commentary, and community engagement. With the increasing popularity of streaming services, we recognized the demand for a space where users can review the latest movies they've watched. If you've ever desired to express your thoughts on movies and TV series, look no further.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: moviecrunchers,
    source_code_link: "https://raynorelgie.com/MovieCrunchers/",
  },
];

export { services, technologies, experiences, projects };
