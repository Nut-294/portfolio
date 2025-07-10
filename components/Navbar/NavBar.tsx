"use client";

import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { DarkMode } from "./DarkMode";

export default function Navbar() {
  return (
    <Menubar className="fixed top-0 z-50 w-full justify-between px-6 py-6 bg-white/80 backdrop-blur-md shadow-md">
      <div className="flex gap-6">
        <MenubarMenu>
          <MenubarTrigger>
            <a href="#home">Home</a>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <a href="#about">About</a>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <a href="#projects">Projects</a>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <a href="#contact">Contact</a>
          </MenubarTrigger>
        </MenubarMenu>
      </div>

      
      <div className="hidden md:flex items-center gap-4">
      <DarkMode/>
        <a
          href="/resume.pdf"
          className="text-sm bg-black text-white px-4 py-2 rounded-md hover:opacity-80 transition"
        >
          Download Resume
        </a>
      </div>
    </Menubar>
  );
}
