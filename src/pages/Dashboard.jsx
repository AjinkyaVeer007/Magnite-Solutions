import React from "react";
import Services from "../herosections/Services";
import Growth from "../herosections/Growth";
import TechStacks from "../herosections/TechStacks";
import Footer from "../herosections/Footer";
import Intro from "../herosections/Intro";
import CustomNavbar from "../components/CustomNavbar";
import WhyUs from "../herosections/WhyUs";

function Dashboard() {
  return (
    <div className="font-main">
      <CustomNavbar />
      <Intro />
      <Services />
      <Growth />
      <WhyUs />
      <TechStacks />
      <Footer />
    </div>
  );
}

export default Dashboard;
