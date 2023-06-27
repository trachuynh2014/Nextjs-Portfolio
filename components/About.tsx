"use client";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import { services } from "@/constants";
import React from "react";
import Container from "./Container";
import ServiceCard from "./ServiceCard";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="section-sub-text">Introduction</p>
        <h2 className="section-head-text">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a dedicated Full Stack Developer with a robust front-end and
        back-end development background. My proficiency lies in utilizing Vue
        and React frameworks and expertise in SQL and Node.js. Continuously
        expanding my skill set, I am always eager to learn new technologies and
        stay up-to-date with industry trends. With a collaborative mindset, I
        thrive in team environments, contributing effectively and valuing open
        communication. My dedication to excellence and passion for delivering
        impactful solutions drive me to create exceptional web applications that
        exceed expectations.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default Container(About, "about");
