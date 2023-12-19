"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Promptify",
    description: "Promptify is a full-stack web application to discover, create and share creative prompts for the AI. It offers a seamless CRUD experience (Create, Read, Update, Delete) for prompt management and secure user authentication using NextAuth.js.",
    image: "./images/projects/13.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KETAKISANTOSHNIKURE/Promptify",
    previewUrl: "https://promptify-topaz.vercel.app/",
  },

  
  {
    id: 2,
    title: "Portfolio Website",
    description: "Welcome to my personal portfolio, a dynamic, visually engaging display of my web development skills, experiences, and passion. Built using Next.js and adorned with Tailwind CSS, it embodies my dedication to crafting both functional and aesthetically pleasing websites.",
    image: "./images/projects/15.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/KETAKISANTOSHNIKURE/Porfolio_2",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "PDetectAI APP",
    description: "PDetectAI utilizes machine learning, specifically the K-Nearest Neighbors (KNN) algorithm, to identify early-stage Parkinson's Disease through voice input. It processes voice data via Praat software and performs calculations using Python, leveraging scikit-learn and pickle libraries.",
    image: "./images/projects/11.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KETAKISANTOSHNIKURE/PDetect_AI",
    previewUrl: "https://ketakisantoshnikure-pdetect-ai-app2-nmwi15.streamlit.app/",
  },
    
  // {
  //   id: 3,
  //   title: "Basic Banking  Application",
  //   description: "The Basic Banking System is a Android Application designed to facilitate banking transactions and provide essential banking services to users. Tech Stack : Front end- Html, Css, Javascript, Bootstrap; Back end- Php, Database, MySQL",
  //   image: "./images/projects/13.png",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "https://github.com/KETAKISANTOSHNIKURE/Banking_App",
  //   previewUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7000008098664886272/",
  // },

 
  {
    id: 5,
    title: "CupfulCalm",
    description: "Fully responsive multipage-website created using HTML, CSS, Javascript and Bootstrap5.",
    image: "./images/projects/12.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KETAKISANTOSHNIKURE/CupfulCalm",
    previewUrl: "https://ketakisantoshnikure.github.io/CupfulCalm/",
  },
  {
    id: 6,
    title: "Basic Calculator Application",
    description: "I  develop user-friendly software applications with a focus on functionality, precision, and intuitive design. Stack Used : Html, Css, Javascript, react, Dockerfile",
    image: "./images/projects/16.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KETAKISANTOSHNIKURE/Calculator_Application",
    previewUrl: "https://calculator-application-woad.vercel.app/",
  },
   {
    id: 4,
    title: "Todo Application",
    description: "I led a project to develop a web-based ToDo app, improving its development and deployment on Amazon Web Services (AWS). I used Docker for scalability and consistency and set up a Jenkins CI/CD pipeline for automated building, testing, and deployment. Stack Used : Django, Docker, Jenkins",
    image: "./images/projects/14.png",
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

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white pt-20 mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
