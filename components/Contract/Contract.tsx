"use client";

import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full px-6 py-16 bg-background text-foreground">
      <h2 className="text-3xl font-bold text-center text-green-600 dark:text-green-400 mb-10">
        Contact Me
      </h2>

      <div className="max-w-xl mx-auto space-y-6">
        <Card className="shadow-md">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-green-600 dark:text-green-300" />
              <span className="text-lg">yourname@email.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-green-600 dark:text-green-300" />
              <span className="text-lg">+66 8123 4567</span>
            </div>
            <div className="flex items-center gap-3">
              <Github className="text-green-600 dark:text-green-300" />
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">
                github.com/yourusername
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="text-green-600 dark:text-green-300" />
              <a href="https://linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer" className="hover:underline">
                linkedin.com/in/yourname
              </a>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button
            variant="default"
            className="bg-green-600 text-white hover:bg-green-700"
            onClick={() => window.location.href = "mailto:yourname@email.com"}
          >
            📩 Send Email
          </Button>
        </div>
      </div>
    </section>
  );
}
