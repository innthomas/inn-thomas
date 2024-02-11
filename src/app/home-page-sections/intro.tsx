"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
//import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
//import { useSectionInView } from "@/lib/hooks";
import { increaseExperience } from "@/lib/experience"



export default function Intro() {
  
 console.log("home:",increaseExperience())
 const {years,months,days}= increaseExperience()
  const myName = "innocent thomas";
  const imageVariants = {
    initial: {
      scale: 0, // Initial scale of the image
    },
    hover: {
      scale: 2, // Enlarged scale on hover
      transition: { duration: 0.5 }, // Smooth transition on hover
    },
    active: {
      scale: 3, // Enlarged scale on click
      transition: { duration: 0.3 }, // Faster transition on click
    },
  };
  const [isEnlarged, setIsEnlarged] = useState(false);
  const handleClick = () => {
    setIsEnlarged(true);
    setTimeout(() => setIsEnlarged(false), 5000); // Set back to normal after 5 seconds
  };

  // const { ref } = useSectionInView("Home", 0.5);
  // const { activeSection, setActiveSection, setTimeOfLastClick } =
  //   useActiveSectionContext();
  // Animation variants
  const handVariants = {
    rest: { opacity: 1, rotate: 0 },
    wave: { opacity: 1, rotate: -20 },
  };

  const armVariants = {
    rest: { scaleY: 1 },
    wave: { scaleY: 0.9 },
  };

  return (
    <section
      // ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28"
    >
      <div className="flex items-center justify-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          <motion.div
          // variants={imageVariants}
          // initial="initial"
          // animate={isEnlarged ? "active" : "hover"} // Apply animations
          // whileHover="hover"
          // onClick={handleClick} // Trigger animation on click
          >
            <Image
              src={"/inn.png"}
              alt="inn thomas image"
              width={192}
              height={192}
              quality={95}
              priority
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl cursor-pointer"
            />
          </motion.div>
          <motion.span
            variants={handVariants}
            animate="wave"
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute text-4xl bottom-0 left-0"
          >
            👋
          </motion.span>
        </motion.div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      >
        <span className="font-bold text-[#7f1d1d]">Hello</span>, I am{" "}
        {/* <span className="font-bold text-blue-950 underline">Innocent,</span>  */}
        <div className="sm:text-6xl text-blue-950 drop-shadow-lg">
          {myName.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.1,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
        a <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold text-[#082f49]">
        
          {years} years, {months} months, and {days} days
        </span>{" "}
        of experience. I enjoy building{" "}
        <span className="italic text-[#365314]">sites & apps</span>, especially
        with <span className="underline text-[#052e16] text-bold">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 125,
          delay: 0.4,
          duration: 0.7,
        }}
        className="flex flex-col sm:flex-row justify-center items-center gap-2 px-4 font-lg font-medium"
      >
        <Link
          href="/contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer"
          onClick={() => {
            // setActiveSection("Contact");
            // setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-3 transition" />
        </Link>
        <a
          href="/CV.pdf"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack "
          download={true}
        >
          Download CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-x-3 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/innocent-thomas-9ba69911a/"
          target="_blank"
          title="linkedin"
          rel="noopener"
          className="bg-white p-4 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border borderBlack hover:text-gray-950"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/innthomas"
          target="_blank"
          title="linkedin"
          rel="noopener"
          className="bg-white p-4 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack hover:text-gray-950"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
