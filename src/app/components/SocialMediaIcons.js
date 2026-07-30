"use client";
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiGeeksforgeeks } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";

const SocialMediaIcons = () => {
  return (
    <div className="social-icons-container">
      <div className="social-icons-scroll">
        <a href="https://github.com/KETAKISANTOSHNIKURE" aria-label="GitHub">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/ketaki-n-b412231b6/" aria-label="LinkedIn">
          <FaLinkedin size={20} />
        </a>
        <a href="mailto:ketaki9823@gmail.com" aria-label="Email">
          <GrMail size={20} />
        </a>
        <a href="https://auth.geeksforgeeks.org/invite/0d6x9o4e/" aria-label="GFG">
          <SiGeeksforgeeks size={20} />
        </a>
        <a href="https://leetcode.com/KETAKI_NIKURE/" aria-label="LeetCode">
          <TbBrandLeetcode size={20} />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
