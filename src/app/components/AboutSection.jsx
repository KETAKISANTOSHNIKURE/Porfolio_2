"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { FaJava, FaDocker, FaKubernetes, FaJenkins, FaNodeJs, FaTerraform, FaReact } from "react-icons/fa";
import "./tab-button.css";
import "./styles.css";

const CERTIFICATIONS = [
  { id: "PowerPlatform", name: "Microsoft Certified: Power Platform" },
  { id: "AzureAIFundamentals", name: "Microsoft Certified: Azure AI Fundamentals" },
  { id: "Publication", name: "Certificate of Publication" },
  { id: "InternshipAI", name: "Certificate of Internship AI" },
  { id: "SparkFoundation", name: "Certificate of Completion: Spark Foundation Internship" },
  { id: "JapaneseLanguage", name: "Japanese Language" },
  { id: "TrainingIOT", name: "Certificate of Training IOT" },
  { id: "WorkflowAutomation", name: "Certificate of Internship Work Flow Automation" },
  { id: "TrainingCoreJava", name: "Certificate of Training (Core Java)" },
  { id: "ParticipationEmbeddedSystem", name: "Certificate of Participation Embedded System IIT Bombay" },
  
];

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
        
      </ul>
    ),
  },

  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        {CERTIFICATIONS.map((certification) => (
          <li key={certification.id}>
            <span onClick={() => handleImageClick(certification.id)}>{certification.name}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Badges",
    id: "badges",
    content: (
      <ul className="list-disc pl-2">
        <li><a href="https://drive.google.com/drive/folders/1_aGweqPs2JLr29FaUEObGJG9jpsWaRnD?usp=sharing"> Microsoft Badges and Trophies</a></li>

      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  // const handleTabChange = (id) => {
  //   startTransition(() => {
  //     setTab(id);
  //   });
  // };
  const handleImageClick = (certificationId) => {
    startTransition(() => {
      setSelectedCertification(certificationId);
    });
  };
  const renderCertificationContent = () => {
    const selectedContent = TAB_DATA.find((t) => t.id === "certifications").content;

    if (selectedCertification) {
      return (
        <div>
          <Image
            className="certification-image"
            src={`certification_images/${selectedCertification}.jpg`}
            alt={selectedCertification}
            width={500}
            height={500}
          />
          <p>{selectedCertification} - Description or details about the certification</p>
        </div>
      );
    }

    return selectedContent;
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div style={{ position: "relative", top: "-40px" }}> {/* Adjust the top value to move the image higher */}
            <Image src="./images/hero-image1.png" width={500} height={500} />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mt-20 mb-4 md:mt-20">About Me</h2>
          <p className="text-base text-justify lg:text-lg">
           Greetings! I'm a full-stack web developer with a flair for crafting interactive and responsive web applications. Proficient in JavaScript, React, Node.js, HTML, CSS, and Git, I'm not just a quick learner but also someone who thrives on continuous growth. A collaborative team player, I'm enthusiastic about working with others to bring exceptional applications to life. Let's build something amazing together!
            <br></br>
            Beyond coding, I'm enchanted by Bharatnatyam, where every step becomes poetry and every gesture a tale!
          </p>
          <div className="mt-8">
            <div className="tab-buttons">

            <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
                className="tab-button"
              >
                {" "}
                Education{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
                className="tab-button"
              >
                {" "}
                Skills{" "}
              </TabButton>
              
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
                className="tab-button"
              >
                {" "}
                Certifications{" "}
              </TabButton>
              
              <TabButton
                selectTab={() => handleTabChange("badges")}
                active={tab === "badges"}
                className="tab-button"
              >
                {" "}
                Badges{" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
              {renderCertificationContent()}
            </div>
          </div>
       </div> 
     </div>
    </section>
  );
};

export default AboutSection;
