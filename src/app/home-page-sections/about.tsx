"use client";

import React, { useEffect } from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  //const { ref } = useSectionInView("About");

  return (
    <motion.section
      //   ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 125,
        delay: 0.3,
        duration: 0.7,
      }}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="text-2xl">
        <p className="mb-3">
          After graduating with a degree in{" "}
          <span className="font-medium">Accounting</span>, I decided to pursue
          my passion for programming. I enrolled in a coding bootcamp and
          learned{" "}
          <span className="font-medium">full-stack web development</span>.{" "}
          <span className="italic">My favorite part of programming</span> is the
          problem-solving aspect. I <span className="underline">love</span> the
          feeling of finally figuring out a solution to a problem. My core stack
          is{" "}
          <span className="font-medium">
            React, Next.js, Node.js, and MongoDB
          </span>
          . I am also familiar with TypeScript and Prisma. I am always looking
          to learn new technologies. I am currently looking for a{" "}
          <span className="font-medium">full-time position</span> as a software
          developer.
        </p>

        <p>
          <span className="italic">When I am not coding</span>, I enjoy cooking, reading books, and 
          playing with my family. I also enjoy{" "}
          <span className="font-medium">learning new things</span>. I am
          currently learning about{" "}
          <span className="font-medium">history and philosophy</span>. 
        </p>
      </div>
    </motion.section>
  );
}
