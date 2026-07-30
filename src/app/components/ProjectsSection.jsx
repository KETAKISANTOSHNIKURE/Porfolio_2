"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Promptify",
    description:
      "Promptify is a full-stack web application to discover, create and share creative prompts for the AI. It offers a seamless CRUD experience.",
    image: "/images/projects/13.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KETAKISANTOSHNIKURE/Promptify",
    previewUrl: "https://promptify-topaz.vercel.app/",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A dynamic, visually engaging display of my web development skills, built with Next.js and Tailwind CSS.",
    image: "/images/projects/15.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/KETAKISANTOSHNIKURE/Porfolio_2",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "PDetectAI APP",
    description:
      "PDetectAI utilizes machine learning to identify early-stage Parkinson's Disease through voice input.",
    image: "/images/projects/11.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KETAKISANTOSHNIKURE/PDetect_AI",
    previewUrl: "https://ketakisantoshnikure-pdetect-ai-app2-nmwi15.streamlit.app/",
  },
  {
    id: 5,
    title: "CupfulCalm",
    description: "Fully responsive multipage website created using HTML, CSS, Javascript and Bootstrap5.",
    image: "/images/projects/12.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KETAKISANTOSHNIKURE/CupfulCalm",
    previewUrl: "https://ketakisantoshnikure.github.io/CupfulCalm/",
  },
  {
    id: 6,
    title: "Basic Calculator Application",
    description:
      "User-friendly calculator app. Stack: Html, Css, Javascript, React.",
    image: "/images/projects/16.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KETAKISANTOSHNIKURE/Calculator_Application",
    previewUrl: "https://calculator-application-woad.vercel.app/",
  },
  {
    id: 4,
    title: "Todo Application",
    description:
      "Web-based ToDo app with Docker and AWS deployment.",
    image: "/images/projects/14.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KETAKISANTOSHNIKURE/jenkins_CI-CD_Project",
    previewUrl: "/images/project/5.png",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white pt-20 mt-4 mb-8 md:mb-12">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li key={index} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3, delay: index * 0.2 }}>
            <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
