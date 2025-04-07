"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/ModeToggle";

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsSheetOpen(false); 
  };

  return (
    <nav className="p-4 w-screen  fixed top-0 shadow-sm bg-white dark:bg-slate-900 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center w-full space-x-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold">
              Biy<span className="text-red-500">ash</span>
            </div>
          </div>
          {/* Desktop Navigation */}
          <ul className="hidden md:flex flex-grow justify-center space-x-6 text-sm">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className="hover:text-blue-500 transition duration-300 capitalize"
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
          {/* Desktop Mode Toggle */}
          <div className="hidden md:flex">
            <ModeToggle />
          </div>
          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center  space-x-2 ml-auto">
            <ModeToggle />
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <button className="p-2">
                  <FaBars size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="text-2xl font-bold">
                    Biy<span className="text-red-500">ash</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col items-center space-y-4 mt-4 text-lg">
                  {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="hover:text-blue-500 transition duration-300 capitalize text-left"
                    >
                      {section}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
