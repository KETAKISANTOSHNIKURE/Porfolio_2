// import React from "react";
// import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
// import Link from "next/link";

// const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
//   // Split the description into an array of bullet points
//   const bulletPoints = description.split("\n").filter((point) => point.trim() !== "");

//   return (
//     <div className="shadow-lg  bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg bg-gray-200 p-1 shadow-lg shadow-slate-600 ">
//       <div
//         className="h-52 md:h-40 rounded-t-xl relative group "
//         style={{
//           background: `url(${imgUrl})`,
//           backgroundSize: "contain", // Change this line to set background size to "contain"
//           backgroundPosition: "center center", // Center the image
//           backgroundRepeat: "no-repeat", // Prevent image repetition
//         }}
//       >
//         <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
//           <Link
//             href={gitUrl}
//             className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
//           >
//             <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
//           </Link>
//           <Link
//             href={previewUrl}
//             className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
//           >
//             <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
//           </Link>
//         </div>
//       </div>
//       <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
//         <h5 className="text-xl font-semibold mb-2">{title}</h5>
//         {/* Render bullet points */}
//         <ul className="list-disc pl-5 mb-0">
//           {bulletPoints.map((point, index) => (
//             <li key={index} className="text-[#ADB7BE]">
//               {point}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import "./ProjectCard.css"; // Import your CSS file

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover state

  // Split the description into an array of bullet points
  const bulletPoints = description.split("\n").filter((point) => point.trim() !== "");

  // Function to handle card click
  const handleCardClick = () => {
    setIsHovered(!isHovered); // Toggle hover state
  };

  // Define the CSS class based on hover state
  const cardClass = `project-card ${isHovered ? 'hovered' : ''}`;

  return (
    <div className={cardClass} onClick={handleCardClick}>
      <div
        className="h-52 md:h-40 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover", // Adjust as needed
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4 card-content">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {/* Render bullet points */}
        <ul className="list-disc pl-5 mb-0">
          {bulletPoints.map((point, index) => (
            <li key={index} className="text-[#ADB7BE]">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;

