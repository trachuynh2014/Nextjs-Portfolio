"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface ExperienceCardProps {
  experience: {
    title: string;
    company_name: string;
    icon: StaticImageData;
    iconBg: string;
    date: string;
    url: string;
    points: string[];
  };
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full cursor-pointer">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className="object-contain"
            width={50}
            height={50}
            onClick={() => window.open(experience.url, "_blank")}
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px]">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold m-0">
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
