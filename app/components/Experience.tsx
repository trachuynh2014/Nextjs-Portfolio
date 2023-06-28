"use client";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import withContainer from "./Container";
import { experiences } from "@/constants";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="section-sub-text">What I have done so far</p>
        <h2 className="section-head-text">Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default withContainer(Experience, "experience");
