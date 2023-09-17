"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image"; 
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
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-50 backdrop-blur">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >

          <Image
            src="./images/projects/Logo12.png"
            alt="LOGO"
            className="rounded-full transform translate-x-1/2 translate-y-1/5 top-1/2 left-1/2"
            width={50}
            height={50}
          />

        </Link>
        <div className={`mobile-menu md:hidden ${navbarOpen ? 'block' : 'hidden'}`}>
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              // <li key={index}>
              //   <NavLink href={link.path} title={link.title} />
              // </li>
              <li key={index}>
                <a
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1"
                >

                  {link.icon}
                  {/* Optional: Add a title attribute for accessibility */}
                  <span className="hidden md:inline">{link.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      <style jsx>
        {`
          .icon {
            font-size: 20px; // Adjust the icon size as needed
            
          }

          .icon-wrapper {
            
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
