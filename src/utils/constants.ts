import { Slide, ToastOptions } from "react-toastify";
import { TCareer, TProjects } from "./types";
import { TECHNOLOGIES } from "./technology-const";

export const NAVBAR_OPTIONS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Career",
    href: "/career",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const CAREER: TCareer[] = [
  {
    role: "Full Stack Developer",
    company: "Devsinc",
    companyLink: "https://www.devsinc.com",
    duration: "September 2022- December 2022",
    details:
      "I've crafted and managed over high-performing, scalable applications employing diverse programming languages. Collaborated closely with cross-functional teams to grasp business needs and convert them into technical solutions. Proficiently utilized distributed databases such as MySQL, PostgreSQL, and MongoDB. Additionally, I've taken on the role of mentoring junior engineers, aiding in their technical and professional development.",
  },

  // {
  //   role: "Software Developer",
  //   company: "Logic Mount",
  //   companyLink: "# ",
  //   isNoLink: true,
  //   duration: "2020-2021",
  //   details:
  //     "I Developed and maintained microservices architecture for various web applications, leveraging technologies such as React.js, Node.js, Express.js, MongoDB, and Docker, reducing development time by 30%.",
  // },
];

export const SOCIALS = [
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/affan-khalid",
    fgColor: "#007fb1",
  },
  {
    label: "github",
    href: "https://github.com/muhammadaffankhalid",
    fgColor: "white",
  },
];

export const EMAIL = "muhammadaffankhalid4@gmail.com";

export const defaultProps = {
  motion: {
    initial: { x: -500, opacity: 0.5, scale: 0.5 },
    animate: { x: 0, opacity: 1, scale: 1 },
    transition: { duration: 1 },
  },
};

export const snackbarOptions: ToastOptions = {
  position: "top-right",
  autoClose: 3000,
  closeOnClick: true,
  theme: "dark",
  transition: Slide,
};

export const PROJECTS: TProjects[] = [
  {
    imageSrc: "/remotereps.png",
    title: "RemoteReps",
    url: "https://app.remotereps.com/",
    technologies: [
      TECHNOLOGIES.NEXT,
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.TURBO,
      TECHNOLOGIES.TAILWIND,
      TECHNOLOGIES.SWAGGER,
      TECHNOLOGIES.WEBPACK,
      TECHNOLOGIES.AWS,
    ],
    description:
      "RemoteReps is a freelancing platform that facilitates connections between businesses and independent professionals and agencies worldwide. Companies can post job opportunities and hire top talents globally. Conversely, talented individuals can apply to various top companies and secure employment opportunities.",
    features: [
      "Talent Hiring",
      "Multiple Panels",
      "Monorepository",
      "Microservices Architecture",
    ],
  },
  {
    imageSrc: "/react-flavor.png",
    title: "React Flavor",
    url: "https://react-flavor.vercel.app/",
    technologies: [
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.STORYBOOK,
      TECHNOLOGIES.WEBPACK,
      TECHNOLOGIES.HEADLESS_UI,
      TECHNOLOGIES.TAILWIND,
    ],
    description:
      "React Flavor is a React component library that includes over 30+ input, and design components, each offering numerous props to achieve the desired functionality or appearance. The library seamlessly integrates with Tailwind CSS and allows for full customization according to specific needs.",
    features: [
      "SSR (Server Side Rendering)",
      "TypeScript based",
      "Focus Interactions",
      "Accessible Components",
      "Override Components Tags",
    ],
  },
  {
    imageSrc: "/lokafy.png",
    title: "Lokafy",
    url: "https://lokafy.com/",
    technologies: [
      TECHNOLOGIES.NUXT,
      TECHNOLOGIES.PYTHON,
      TECHNOLOGIES.DJANGO,
      TECHNOLOGIES.DOCKER,
      TECHNOLOGIES.POSTGRESQL,
      TECHNOLOGIES.GCP,
      TECHNOLOGIES.KUBERNETES,
    ],
    description:
      "Lokafy is a traveling platform that revolutionizes the way we experience travel. With a core belief that the essence of travel lies in the people we meet, rather than just the places we visit, Lokafy fosters meaningful connections between travelers and locals worldwide.",
    features: [
      "Booking Tours",
      "Managing Tours",
      "Rate & Reviews",
      "Global Locations",
    ],
  },
  {
    imageSrc: "/zombie_apocalypse.png",
    title: "Zombie Apocalyse Survival",
    url: "https://zombie-apocalypse-front.vercel.app/",
    technologies: [
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.NODE,
      TECHNOLOGIES.EXPRESS,
      TECHNOLOGIES.MONGO_DB,
      TECHNOLOGIES.MATERIAL_UI,
    ],
    description:
      "In a zombie-infested world, the last coding-savvy survivor creates a vital system. It connects humans, detects infections, and facilitates resource sharing. Key features: survivor database, location updates, infection flagging, and strict rules for infected survivors. Inventory management enables trade as the only means of updating belongings. The system includes a search feature, trade mechanism with a point system, and comprehensive trade history. Reports offer crucial statistics. Roles are defined, restricting functionalities for administrators and survivors.",
    features: [
      "Inventory Management",
      "Update Survivor Location",
      "Flag Survivor as Infected",
      "Trade Functionality",
      "Survivor Report",
      "Trade History",
      "Roles",
    ],
  },
  {
    imageSrc: "/quora_concept.png",
    title: "Quora Concept",
    url: "https://project-quora-clone-front.vercel.app/",
    technologies: [
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.NODE,
      TECHNOLOGIES.EXPRESS,
      TECHNOLOGIES.MONGO_DB,
      TECHNOLOGIES.MATERIAL_UI,
    ],
    description:
      "Quora Concept Clone is a question-and-answer project where users can ask questions on various topics and receive answers from other users. Build in React.JS and headless extended components were made instead of using UI libraries.",
    features: [
      "CRUD Question",
      "CRUD Comment",
      "Topics",
      "Reactions",
      "Pagination",
    ],
  },
];
