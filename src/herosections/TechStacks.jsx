import React from "react";
import TechCard from "../components/TechCard";
import { theme } from "../utils/constant";

function TechStacks() {
  const techData = [
    "wordpress",
    "react",
    "angular",
    "bootstrap",
    "nodejs",
    "express",
    "mongodb",
    "mysql",
    "flutter",
    "kotlin",
    "android",
  ];
  return (
    <div className="my-5" id="techstack">
      <div
        style={{ color: theme.dark }}
        className="text-center h3 fw-bold mb-3"
      >
        Tech Stack
      </div>
      <div className="row g-0 justify-content-center m-3 m-lg-5">
        {techData &&
          techData.map((tech) => (
            <div key={tech} className="col-4 col-lg-2">
              <TechCard name={tech} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default TechStacks;
