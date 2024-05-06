import React from "react";
import ServiceCard from "../components/ServiceCard";
import { theme } from "../utils/constant";

function Services() {
  const servicesData = [
    "Website Development",
    "Application Development",
    "E-Commerce",
    "Management System",
    "UI-UX",
    "Graphic Designs",
  ];
  return (
    <div className="pt-10 my-5" id="service">
      <div
        style={{ color: theme.dark }}
        className="text-center h3 fw-bold mb-3"
      >
        Our Services Includes
      </div>
      <div className="row g-0">
        {servicesData &&
          servicesData.map((service) => (
            <div key={service} className="col-12 col-lg-4 p-2 p-lg-3">
              <ServiceCard name={service} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Services;
