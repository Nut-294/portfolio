"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type Certificate = {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
};

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Frontend Developer Certificate",
    date: "June 2024",
    imageUrl: "/certificates/frontend.png",
  },
  {
    id: 2,
    title: "React Mastery Course",
    date: "March 2024",
    imageUrl: "/certificates/react.png",
  },
  {
    id: 2,
    title: "React Mastery Course",
    date: "March 2024",
    imageUrl: "/certificates/react.png",
  },
  {
    id: 2,
    title: "React Mastery Course",
    date: "March 2024",
    imageUrl: "/certificates/react.png",
  },
  // เพิ่มใบเซอร์เพิ่มเติมได้ที่นี่
];

export default function CertificateSection() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section
      className="py-16 px-4 md:px-12 bg-gray-100 dark:bg-background"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 dark:text-green-300 mb-10">
        My Certificates
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {certificates.map((cert,id) => (
          <div
            key={cert.id}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
            data-aos="fade-up"
          >
            <div className="relative h-48 w-full">
              <Image
                src={cert.imageUrl}
                alt={cert.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-green-200">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
