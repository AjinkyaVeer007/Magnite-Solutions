import React from "react";

function GrowthCard({ count, title }) {
  return (
    <div className="text-center sm:p-10 p-4">
      <div className="text-4xl font-bold text-red-500">{count}</div>
      <div className="font-medium text-gray-700 mt-2">{title}</div>
    </div>
  );
}

export default GrowthCard;
