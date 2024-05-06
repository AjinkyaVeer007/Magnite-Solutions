import React from "react";

function TechCard({ name }) {
  return (
    <div className="text-center border py-5 techCard">
      <div className={`tech-icon ${name}`}></div>
      <div className="fw-medium text-capitalize mt-3">{name}</div>
    </div>
  );
}

export default TechCard;
