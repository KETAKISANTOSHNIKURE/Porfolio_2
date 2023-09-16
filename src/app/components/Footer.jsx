import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white py-1">
      <div className="container p-1 flex justify-between">
        <span>
        <Image
        
              src="./images/projects/Logo12.png"
              alt="hero image"
              className="rounded-full transform translate-x-1/2 translate-y-1/5 top-1/2 left-1/2"
              width={50}
              height={50}
            />
        </span>
        <p className="text-slate-500">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
