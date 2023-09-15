// SocialMediaIcons.js

import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import {GrMail } from 'react-icons/gr';
import {SiLeetcode,SiGeeksforgeeks } from 'react-icons/si';
import GeeksforGeeksIcon from "../../../public/geeksforgeeks-icon.svg";
import {TbBrandLeetcode } from 'react-icons/tb';


const SocialMediaIcons = () => {
  return (
    <div className="social-icons-container">
      <div className="social-icons-scroll">
        <a href="https://github.com/KETAKISANTOSHNIKURE">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ketaki-n-b412231b6/">
          <FaLinkedin />
        </a>
        <a href="mailto:ketaki9823@gmail.com">
          <GrMail />
        </a>
        <a href="https://auth.geeksforgeeks.org/invite/0d6x9o4e/">
          <SiGeeksforgeeks />
        </a>
        <a href="https://auth.geeksforgeeks.org/invite/0d6x9o4e/">
          <TbBrandLeetcode />
        </a>

        {/* You can add more social media icons as needed */}
      </div>
    </div>
  );
};

export default SocialMediaIcons;

