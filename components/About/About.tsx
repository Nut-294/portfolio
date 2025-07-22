"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Logo from "../logo/Logo";
import { LogoItem, ToolItem } from "@/utils/LogoItem";
import Tool from "../logo/Tool";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-4 transition-colors duration-300 bg-gray-100 dark:bg-gray-800"
    >
      <div
        data-aos="fade-up"
        className=" max-w-6xl p-6 mt-8 md:mt-20 bg-white dark:bg-zinc-800 rounded-xl shadow-lg transition-all duration-300"
      >
        <h2 className="text-center text-3xl md:text-4xl font-bold text-green-700 dark:text-green-300 mb-4">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row">
          {/* ฝั่งซ้าย */}
          <div className="flex-1 px-4 py-4">
            <p className="text-gray-700 dark:text-gray-300 text-lg md:text-left text-center">
              Hello! My name is{" "}
              <strong className="text-green-700 dark:text-green-300">
                Nachlada Lengthongcharoen
              </strong>
              . I graduated from King Mongkut’s Institute of Technology
              Ladkrabang (KMITL). I began learning web development on my own
              during my third year at university, and have continued to improve
              my skills ever since. I started with the fundamentals of HTML,
              CSS, and JavaScript, and gradually advanced my skills in
              <strong className="text-green-700 dark:text-green-300">
                {" "}
                TypeScript , Tailwind CSS
              </strong>{" "}
              and
              <strong className="text-green-700 dark:text-green-300">
                {" "}
                Next.js
              </strong>
              .
            </p>
            <br />
          </div>

          {/* เส้นคั่น */}
          <div className="hidden md:block w-px bg-gray-300 dark:bg-gray-600 h-auto"></div>

          {/* ฝั่งขวา */}
          <div className="flex-1 px-4 flex flex-col justify-center items-center md:text-left text-center">
            <Image src="/logo.png" width={150} height={150} alt="logo" />
            <strong className="mt-4 text-gray-700 dark:text-gray-100 text-xl">
              Telecommunications and Network Engineering
            </strong>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Second Class Honors
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              King Mongkut’s Institute of Technology Ladkrabang
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">(KMITL)</p>
          </div>
        </div>
      </div>
      <div
        className="mt-4 my-8 text-center"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="10"
        data-aos-offset="0"
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-green-700 dark:text-green-300 mb-4">
          My Skills
        </h3>
        <div className="flex flex-wrap gap-10 justify-center">
          {LogoItem.map((logo, index) => {
            return <Logo key={index} src={logo.src} alt={logo.alt} />;
          })}
        </div>
        <div className="flex flex-wrap gap-10 mt-4 justify-center">
          {ToolItem.map((tool, index) => {
            return <Tool key={index} src={tool.src} alt={tool.alt} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
