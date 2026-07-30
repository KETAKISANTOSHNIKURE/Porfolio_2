"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-28">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
              {"Hello, I'm"} 
            </span>
            <br />
            <TypeAnimation
              sequence={["Ketaki Nikure", 1200, "Software Developer", 1200]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl max-w-2xl">
            Hello! I'm a dedicated Full Stack developer with a strong foundation in both frontend and backend technologies. I thrive on creating holistic web solutions that harmoniously blend user experience with performant code.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Link
              href="#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-lg hover:opacity-90"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1r4yKWivo89dpaC62-FgxFqon-pqgRUIW/view?usp=drivesdk"
              className="inline-block"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-3 text-white border border-[#2b2b2b]">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="col-span-5 flex justify-center mt-8 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[220px] h-[220px] lg:w-[320px] lg:h-[320px] relative flex items-center justify-center">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="rounded-full object-cover"
              width={900}
              height={900}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
