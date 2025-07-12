"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Logo from "../logo/Logo";
import { LogoItem } from "@/utils/LogoItem";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="about"
      className="h-[800px] flex flex-col justify-center items-center bg-gray-100 	dark:bg-zinc-900 px-4 transition-colors duration-300"
    >
      <div
        data-aos="fade-up"
        className=" max-w-6xl p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-lg transition-all duration-300"
      >
        <h2 className="text-center text-3xl font-bold text-green-700 dark:text-green-300 mb-4">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row">
          {/* ฝั่งซ้าย */}
          <div className="flex-1 px-4 py-4">
            <p className="text-gray-700 dark:text-gray-300 text-lg">
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
          <div className="flex-1 px-4 flex flex-col justify-center items-center">
            <Image src="/logo.png" width={150} height={150} alt="logo" />
            <strong className="mt-4 text-gray-700 dark:text-gray-100 text-xl">
              Telecommunications and Network Engineering
            </strong>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Second Class Honors
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              King Mongkut’s Institute of Technology Ladkrabang (KMITL)
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20 text-center">
        <h3 className="text-2xl font-semibold text-green-700 dark:text-green-300 mb-4">
          My Skills
        </h3>
        <div className="flex flex-wrap gap-10">
          {LogoItem.map((logo, index) => {
            return <Logo key={index} src={logo.src} alt={logo.alt} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
