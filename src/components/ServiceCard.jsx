import React from "react";

function ServiceCard({ name }) {
  return (
    <div className="bg-white rounded-md shadow text-center hover:bg-gradient-to-r from-red-500 to-orange-500 hover:text-white text-gray-700">
      <div className="px-2 sm:py-6 py-4 font-medium text-xl">{name}</div>
    </div>
  );
}

export default ServiceCard;
