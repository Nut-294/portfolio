"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio using Next.js, Tailwind CSS, TypeScript and ShadCN.",
    imageUrl: "/images/project1.png",
    link: "https://your-portfolio-link.com",
    tags: ["Next.js", "Tailwind", "ShadCN"],
  },
  {
    id: 2,
    title: "Todo App",
    description: "A todo app with MongoDB, authentication and dark mode theme.",
    imageUrl: "/images/project2.png",
    link: "https://your-todo-link.com",
    tags: ["Fullstack", "MongoDB", "Dark Mode"],
  },
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="w-full px-6 py-16 bg-background text-foreground"
    >
      <h2 className="text-3xl font-bold text-center text-green-600 dark:text-green-400 mb-10">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden transition-shadow hover:shadow-xl"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={800}
              height={400}
              className="w-full h-48 object-cover"
            />
            <CardContent className="space-y-3 py-4">
              <CardTitle className="text-green-700 dark:text-green-300">
                {project.title}
              </CardTitle>

              {/* ✅ แสดง Badge หมวดหมู่ */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-green-500 text-green-600 dark:text-green-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <CardDescription className="text-muted-foreground">
                {project.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
