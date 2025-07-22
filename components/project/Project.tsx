"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/utils/LogoItem";
import { useEffect } from "react";
import AOS from "aos";

export default function ProjectSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section
      id="projects"
      className="w-full min-h-screen p-6 text-foreground bg-gray-100 dark:bg-gray-800"
    >
      <div data-aos="zoom-in">
        <h2 className="my-8 text-3xl font-bold text-center text-green-600 dark:text-green-400">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="py-4 px-2 overflow-hidden transition-shadow hover:shadow-xl"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-60 object-cover rounded-md"
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
      </div>
    </section>
  );
}
