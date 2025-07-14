"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { certificates } from "@/utils/LogoItem";

export default function CertificateSection() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="py-16 px-4 md:px-12 bg-gray-100 dark:bg-background">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 dark:text-green-300 mb-10">
        My Certificates
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {certificates.map((cer, index) => {
          return (
            <div
              className=" bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-400 dark:border-gray-700"
              data-aos="fade-up"
              key={index}
            >
              <div className="relative h-60 w-full ">
                <Image
                  src={cer.imageUrl}
                  alt={cer.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col justify-between h-[120px]">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-green-200">
                  {cer.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 self-start">
                  {cer.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
