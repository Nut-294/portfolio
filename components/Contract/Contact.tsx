"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, Github } from "lucide-react";

const emailParts = ["nachlada.ltc", "@", "email.com"];
const email = emailParts.join("");

const contactItems = [
  {
    icon: Mail,
    title: "Email Me",
    subtitle: "I reply within 24 hrs",
    value: email,
    copyOnClick: true,
  },
  {
    icon: Phone,
    title: "Call Me",
    subtitle: "Mon - Fri, 9am - 6pm",
    value: "092-8961448",
    copyOnClick: true,
  },
  {
    icon: Github,
    title: "My GitHub",
    subtitle: "See my projects",
    value: "Nut-294",
    href: "https://github.com/Nut-294",
  },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <section id="contact" className="py-16 px-6 bg-background text-foreground relative">
      <h2 className="text-3xl font-bold text-center text-green-600 dark:text-green-400 mb-12">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {contactItems.map((item, index) => (
          <a
            key={index}
            href={item.href || "#"}
            onClick={(e) => {
              if (item.copyOnClick) {
                e.preventDefault();
                handleCopy(item.value);
              }
            }}
            target={item.href && !item.copyOnClick ? "_blank" : undefined}
            rel={item.href && !item.copyOnClick ? "noopener noreferrer" : undefined}
            className="flex flex-col items-center p-6 rounded-xl border hover:shadow-lg transition-all cursor-pointer"
          >
            <item.icon className="w-8 h-8 text-green-600 dark:text-green-300 mb-4" />
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.subtitle}</p>
            <p className="mt-2 font-mono text-green-700 dark:text-green-300">{item.value}</p>
          </a>
        ))}
      </div>

      {copied && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded shadow-lg">
          Copied to clipboard!
        </div>
      )}
    </section>
  );
}
