"use client";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refreshHard();
  }, []);

  return (
    <section
      id="home"
      className="w-full h-[600px] flex items-center justify-center px-8 bg-gray-200 dark:bg-background"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-5xl w-full">
        {/* Text Block */}
        <div
          className="text-center md:text-left space-y-4 max-w-lg"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h1 className="text-5xl font-bold text-foreground dark:text-white">
            Hi, I'm Nut.
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
            I’m a self-taught web developer with a strong passion for creating
            beautiful and interactive user experiences. Even though I didn’t
            graduate from a computer science background.
          </p>

          <Button
            asChild
            className="bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600"
          >
            <a href="#projects">View My Project</a>
          </Button>
        </div>

        {/* Image Block */}
        <div className="w-sm h-sm rounded-full overflow-hidden shadow-xl border-8 border-green-500 dark:border-green-500 transition-transform duration-300 hover:scale-105 ">
          <img
            src="/cat.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
