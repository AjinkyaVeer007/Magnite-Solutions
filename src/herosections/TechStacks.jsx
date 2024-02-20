import React from "react";
import TechCard from "../components/TechCard";

function TechStacks() {
  return (
    <div className="pt-10" id="techstack">
      <div className="text-center text-3xl font-medium text-gray-800">
        Tech Stack
      </div>
      <div className="flex justify-center flex-wrap gap-10 m-8 bg-gray-50 px-4 py-10 rounded-md">
        <TechCard name={"wordpress"} />
        <TechCard name={"react"} />
        <TechCard name={"angular"} />
        <TechCard name={"bootstrap"} />
        <TechCard name={"nodejs"} />
        <TechCard name={"express"} />
        <TechCard name={"mongodb"} />
        <TechCard name={"mysql"} />
        <TechCard name={"flutter"} />
        <TechCard name={"kotlin"} />
        <TechCard name={"android"} />
      </div>
    </div>
  );
}

export default TechStacks;
