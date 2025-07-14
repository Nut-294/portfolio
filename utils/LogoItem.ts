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
