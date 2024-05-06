import React from "react";
import { theme } from "../utils/constant";

function ServiceCard({ name }) {
  return (
    <div className="text-center py-3 border rounded serviceCard shadow-sm">
      <div className="fw-medium">{name}</div>
    </div>
  );
}

export default ServiceCard;
