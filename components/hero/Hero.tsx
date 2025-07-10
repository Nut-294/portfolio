"use client";

import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full h-[600px] flex items-center justify-center px-8 bg-muted dark:bg-background"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-5xl w-full">
        {/* Text Block */}
        <div className="text-center md:text-left space-y-4 max-w-lg">
          <h1 className="text-5xl font-bold text-foreground dark:text-white">
            Hi, I'm Nachlada
          </h1>

          <TypeAnimation
            sequence={[
              "Web Developer 💻",
              2000,
              "Next.js & React 🚀",
              2000,
              "TypeScript , JavaScript 🔷",
              2000,
            ]}
            speed={60}
            wrapper="span"
            repeat={Infinity}
            className="text-3xl text-green-600 dark:text-green-400 font-medium"
          />

          <p className="text-xl text-muted-foreground dark:text-gray-400">
          I’m a self-taught web developer with a strong passion for creating beautiful and interactive user experiences.
Even though I didn’t graduate from a computer science background.</p>

          <Button
            asChild
            className="bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600"
          >
            <a href="#projects">View My Work</a>
          </Button>
        </div>

        {/* Image Block */}
        <div className="w-100 h-100 rounded-full overflow-hidden shadow-xl border-4 border-green-300 dark:border-green-500">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
