use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import SocialMediaIcons from "./SocialMediaIcons"; // Import your SocialMediaIcons component
import "./social-media-icons.css"; // Import the CSS file

const EmailSection = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Add an event listener to track scrolling
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-1">
        <h5 className="text-xl font-bold text-white my-2">
          {"Let's Connect"}
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          {"I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!"}
        </p>
        <div className="socials flex flex-row gap-2">
          {/* Include your SocialMediaIcons component */}
          <SocialMediaIcons />
        </div>
      </div>
      <div className="md:grid md:grid-cols-1 gap-4 items-center py-4 px-2 xl:gap-20 xl:px-10">
        <Image src="./images/about-image.png" width={500} height={500} />
      </div>
    </section>
  );
};

export default EmailSection;

