import React from "react";
import ServiceCard from "../components/ServiceCard";
import Divider from "../components/Divider";

function Services() {
  return (
    <div className="pt-10" id="service">
      <div className="text-center text-3xl font-medium text-gray-800">
        Our Services Includes
      </div>
      <div className="grid sm:grid-cols-3 sm:gap-8 gap-3 sm:m-8 m-4 sm:p-10 p-4 bg-gray-50">
        <ServiceCard name={"Website Development"} />
        <ServiceCard name={"Application Development"} />
        <ServiceCard name={"E-Commerce"} />
        <ServiceCard name={"Management System"} />
        <ServiceCard name={"UI-UX"} />
        <ServiceCard name={"Graphic Designs"} />
      </div>
    </div>
  );
}

export default Services;
