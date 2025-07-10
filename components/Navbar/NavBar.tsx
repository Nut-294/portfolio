"use client";

import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { DarkMode } from "./DarkMode";

export default function Navbar() {
  return (
    <Menubar className="fixed top-0 z-50 w-full justify-between px-6 py-8 bg-white/80 dark:bg-background/80 backdrop-blur-md shadow-md border-b border-border">
      <div className="flex gap-6">
        {["home", "about", "projects", "contact"].map((section) => (
          <MenubarMenu key={section}>
            <MenubarTrigger className="text-foreground hover:text-green-600 transition-colors">
              <a href={`#${section}`} className="capitalize">{section}</a>
            </MenubarTrigger>
          </MenubarMenu>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-4">
        <DarkMode />
        <a
          href="/home"
          className="text-sm bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          Download Resume
        </a>
      </div>
    </Menubar>
  );
}
