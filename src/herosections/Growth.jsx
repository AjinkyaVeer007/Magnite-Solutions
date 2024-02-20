import React from "react";
import GrowthCard from "../components/GrowthCard";

function Growth() {
  return (
    <div className="mt-20">
      <div className="text-center text-3xl font-medium text-gray-800">
        Our Growth
      </div>
      <div className="grid sm:grid-cols-3">
        <GrowthCard title={"Happy Client"} count={"05"} />
        <GrowthCard title={"Projects"} count={"12"} />
        <GrowthCard title={"Our Freelancers"} count={"06"} />
      </div>
    </div>
  );
}

export default Growth;
