interface LinkLogo {
  src: string;
  alt: string;
}

export const LogoItem: LinkLogo[] = [
  { src: "/logoskills/html.png", alt: "Html" },
  { src: "/logoskills/css.png", alt: "Css" },
  { src: "/logoskills/javascript.png", alt: "Javascript" },
  { src: "/logoskills/typescript.png", alt: "Typescript" },
  { src: "/logoskills/python.png", alt: "Python" },
];

export const ToolItem: LinkLogo[] = [
  { src: "/logotools/react.png", alt: "React" },
  { src: "/logotools/next.png", alt: "Next.js" },
  { src: "/logotools/django.svg", alt: "Django" },
  { src: "/logotools/node.png", alt: "Node.js" },
  { src: "/logotools/express.png", alt: "Express" },
  { src: "/logotools/postgresql.png", alt: "Postgresql" },
  { src: "/logotools/mongodb.png", alt: "MongoDB" },
];

type Certificate = {
  title: string;
  date: string;
  imageUrl: string;
};

export const certificates: Certificate[] = [
  {
    title: "The Complete 2024 Web Development Bootcamp.",
    date: "May 2024",
    imageUrl: "/certificate/web_development.jpg",
  },
  {
    title: " React Real-World Projects.",
    date: "June 2024",
    imageUrl: "/certificate/react.jpg",
  },
  {
    title: "The Basic of Typescript",
    date: "June 2024",
    imageUrl: "/certificate/typescript.jpg",
  },
  {
    title: "REST API with Django REST Framework.",
    date: "June 2024",
    imageUrl: "/certificate/rest_api.jpg",
  },
];

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title:
      "Received Signal Strength Computationand Visualization System for Mobile Communication Network",
    description:
      "A system that calculates and visualizes received signal strength in mobile networks to support analysis, planning, and optimization.",
    imageUrl: "/images/project.jpg",
    tags: [
      "Typescript",
      "Next.js",
      "Tailwind",
      "ShadCN",
      "Python",
      "Django",
      "Postgresql",
    ],
  },
  {
    title: "Camping",
    description: "A booking website that combines accommodations, camping sites, restaurants, and tourist destinations into a single platform to simplify trip planning. ",
    imageUrl: "/images/camp.jpg",

    tags: ["Typescript", "Next.js", "Tailwind", "ShadCN", "Prisma", "Supabase"],
  },
  {
    title: "MonterCat",
    description: "A static website built to practice frontend development using HTML, CSS, and modern frameworks like React and Tailwind CSS.",
    imageUrl: "/images/montercat.jpg",

    tags: ["Javascript", "Next.js", "Tailwind"],
  },
];
