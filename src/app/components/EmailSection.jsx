"use client";
import React, { useState, useEffect } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import EmailIcon from "../../../public/email-icon.svg";
import GeeksforGeeksIcon from "../../../public/geeksforgeeks-icon.svg"; // Import GFG icon
import LeetCodeIcon from "../../../public/leetcode-icon.svg"; // Import LeetCode icon
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
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          {/* Include your SocialMediaIcons component */}
          <SocialMediaIcons />
        </div>
      
        {/* <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/KETAKISANTOSHNIKURE">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/ketaki-n-b412231b6/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" className="ml-4" />
          </Link>
          <Link className="ml-2" href="mailto:ketaki9823@gmail.com">
            <Image src={EmailIcon} alt="Linkedin Icon" className="ml-4" />
          </Link>
          <Link href="https://auth.geeksforgeeks.org/invite/0d6x9o4e/">
            <Image src={GeeksforGeeksIcon} alt="GeeksforGeeks Icon" className="ml-4" />
          </Link>
          <Link href="https://leetcode.com/KETAKI_NIKURE/">
            <Image src={LeetCodeIcon} alt="LeetCode Icon" className="ml-4" />
          </Link>

        </div> */}
      </div>
      {/* <div className="z-1">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          ><a href="mailto:ketaki9823@gmail.com">
            Send Message
            </a>
          </button>
          {
            emailSubmitted && (
              <p className="text-green-500 text-sm mt-2">
                Email sent successfully!
              </p>
            )
          }
        </form>
      </div> */}

      <div className="md:grid md:grid-cols-1 gap-4 items-center py-4 px-2 xl:gap-20 xl:px-10">
        <Image src="/images/about-image.png" width={500} height={500} />
      </div>
    </section>
  );
};

export default EmailSection;
