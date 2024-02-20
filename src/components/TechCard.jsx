import React from "react";

function TechCard({ name }) {
  return (
    <div className="text-center px-6 py-2 rounded-md bg-white shadow">
      <div className={`tech-icon ${name}`}></div>
      <div className="text-gray-700 font-medium capitalize mt-3">{name}</div>
    </div>
  );
}

export default TechCard;
