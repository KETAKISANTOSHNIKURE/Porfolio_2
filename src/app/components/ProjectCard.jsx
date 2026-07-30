"use client";
import React from "react";
import Image from "next/image";

const ProjectCard = ({ title, description, imgUrl, gitUrl, previewUrl }) => {
  return (
    <div className="card p-4">
      <div className="project-img mb-4">
        <Image src={imgUrl} alt={title} width={800} height={450} className="object-cover w-full h-48 rounded-md" />
      </div>
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-3">{description}</p>
      <div className="flex items-center gap-3">
        <a href={previewUrl} target="_blank" rel="noreferrer" className="text-sm text-white bg-primary-600 px-3 py-1 rounded-md">Live</a>
        <a href={gitUrl} target="_blank" rel="noreferrer" className="text-sm text-white border border-slate-700 px-3 py-1 rounded-md">Code</a>
      </div>
    </div>
  );
};

export default ProjectCard;
