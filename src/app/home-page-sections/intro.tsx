"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export default function Intro() {
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
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28">
      <div className="flex items-center justify-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          <div>
            <Image
              src={"/inn.png"}
              alt="inn thomas image"
              width={192}
              height={192}
              quality={95}
              priority
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </div>
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
        <span className="font-bold">Hello</span>, this is{" "}
        <span className="font-bold text-blue-950 underline">Innocent,</span> a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">5 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>, especially with{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
    </section>
  );
}
