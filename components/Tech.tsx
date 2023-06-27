"use client";

import { technologies } from "@/constants";
import withContainer from "./Container";
import Ball from "./canvas/Ball";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
        <div className="w-28 h-28" key={tech.name}>
          <Ball icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};

export default withContainer(Tech, "");
