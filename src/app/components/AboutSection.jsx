"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import "./tab-button.css";
import "./styles.css";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-primary-500 p-4 rounded-lg backdrop-blur-lg">
          <h3 className="text-lg font-semibold text-white">Year: 2023</h3>
          <p className="text-white">B.Tech - Government College of Engineering Amravati</p>
          <p className="text-white">Branch - Electronics & Telecomm Engg</p>
          <p className="text-white">CGPA - 8.12</p>
        </div>
        <div className="bg-primary-500 p-4 rounded-lg backdrop-blur-lg">
          <h3 className="text-lg font-semibold text-white">Year: 2019</h3>
          <p className="text-white">12th - Taywade College, Nagpur</p>
          <p className="text-white">Stream - General Science</p>
          <p className="text-white">Percentage - 70%</p>
        </div>
        <div className="bg-primary-500 p-4 rounded-lg backdrop-blur-lg">
          <h3 className="text-lg font-semibold text-white">Year: 2017</h3>
          <p className="text-white">10th - Saraswati Vidyalaya, Nagpur</p>
          <p className="text-white">Percentage - 89%</p>
        </div>
      </div>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>REACT</li>
        <li>JAVA</li>
        <li>MYSQL</li>
        <li>AWS</li>
        <li>PYTHON</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a href="https://drive.google.com/file/d/1id6zFiAoIHPk94PZwOjw8UNbxryEbqwg/view?usp=sharing">Microsoft Certified: Power Platform</a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1PwWWCkhByLmduZSJocO7AekXK4iw-kYZ/view?usp=sharing">Microsoft Certified: Azure AI Fundamentals</a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1os4AuUjB37wHrHsBGKqD-URIo1KLXiCp/view?usp=sharing">Certificate of Publication</a>
        </li>
      </ul>
    ),
  },
  {
    title: "Badges",
    id: "badges",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a href="https://drive.google.com/drive/folders/1_aGweqPs2JLr29FaUEObGJG9jpsWaRnD?usp=sharing">Microsoft Badges and Trophies</a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div style={{ position: "relative", top: "-40px" }}>
          <Image src="/images/hero-image1.png" width={500} height={500} alt="profile" />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mt-20 mb-4 md:mt-20">About Me</h2>
          <p className="text-base text-justify lg:text-lg">
            Greetings! I'm a full-stack web developer with a flair for crafting interactive and responsive web applications. Proficient in JavaScript, React, Node.js, HTML, CSS, and Git, I'm not just a coder — I'm a problem solver who values clean code and elegant user experiences.
            <br />
            Beyond coding, I'm enchanted by Bharatnatyam, where every step becomes poetry and every gesture a tale!
          </p>

          <div className="mt-8">
            <div className="tab-buttons">
              <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"} className="tab-button"> Education </TabButton>
              <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"} className="tab-button"> Skills </TabButton>
              <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"} className="tab-button"> Certifications </TabButton>
              <TabButton selectTab={() => handleTabChange("badges")} active={tab === "badges"} className="tab-button"> Badges </TabButton>
            </div>
            <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
