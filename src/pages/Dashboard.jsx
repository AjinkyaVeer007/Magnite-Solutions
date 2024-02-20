import React from "react";
import IntroBackground from "../components/IntroBackground";
import Services from "../herosections/Services";
import Growth from "../herosections/Growth";
import TechStacks from "../herosections/TechStacks";
import Footer from "../herosections/Footer";

function Dashboard() {
  return (
    <div className="font-main">
      <IntroBackground />
      <Services />
      <Growth />
      <TechStacks />
      <Footer />
    </div>
  );
}

export default Dashboard;
