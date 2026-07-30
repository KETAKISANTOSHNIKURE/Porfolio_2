"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
  {
    title: <FaLinkedin />,
    path: "https://www.linkedin.com/in/ketaki-n-b412231b6/",
  },
  {
    title: <FaGithub />,
    path: "https://github.com/KETAKISANTOSHNIKURE",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 right-0 z-40 bg-[#0f0f0f] bg-opacity-50 backdrop-blur-md border-b border-[#222]">
      <div className="flex container mx-auto items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/projects/Logo12.png"
            alt="LOGO"
            width={44}
            height={44}
            className="rounded-full"
          />
          <span className="text-white font-semibold hidden md:inline">Ketaki Nikure</span>
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)} className="p-2 text-white">
              <Bars3Icon className="h-6 w-6" />
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)} className="p-2 text-white">
              <XMarkIcon className="h-6 w-6" />
            </button>
          )}
        </div>

        <div className="hidden md:block">
          <ul className="flex items-center space-x-6 text-slate-300">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.path} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <span className="hidden md:inline">{link.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
