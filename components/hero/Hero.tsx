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
      className="w-full min-h-screen flex items-center justify-center px-8 bg-gray-50 dark:bg-gray-950"
    >
      <div className="flex flex-col my-8 md:my-0 md:flex-row justify-between items-center gap-8 max-w-5xl w-full">
        {/* Text Block */}
        <div
          className="text-center md:text-left space-y-2 max-w-lg"
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
        <div className="md:w-sm md:h-sm  rounded-full overflow-hidden shadow-xl border-4 border-green-500 dark:border-green-600 transition-transform duration-300 hover:scale-105 ">
          <img
            src="/pic.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
