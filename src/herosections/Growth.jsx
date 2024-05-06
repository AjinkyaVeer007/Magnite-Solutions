import React from "react";
import GrowthCard from "../components/GrowthCard";
import { theme } from "../utils/constant";
import { FaStar, FaUsers } from "react-icons/fa";
import { PiUsersFourFill } from "react-icons/pi";
import { SiGoogletasks } from "react-icons/si";

function Growth() {
  const data = [
    {
      icon: <FaStar size={"40px"} />,
      count: "3+",
      name: "Years Experience",
    },
    {
      icon: <PiUsersFourFill size={"40px"} />,
      count: "08",
      name: "Team Members",
    },
    {
      icon: <FaUsers size={"40px"} />,
      count: "05",
      name: "Happy Clients",
    },
    {
      icon: <SiGoogletasks size={"40px"} />,
      count: "09",
      name: "Projects Done",
    },
  ];
  return (
    <div
      className="row py-4 g-0"
      style={{
        backgroundColor: theme.dark,
      }}
      id="growth"
    >
      <div className="text-center text-white fw-bold h2 my-4">
        We are open to share our progress
      </div>
      {data &&
        data.map((state) => (
          <div key={state.name} className="col-12 col-lg-3 p-4">
            <GrowthCard
              count={state.count}
              icon={state.icon}
              name={state.name}
            />
          </div>
        ))}
    </div>
  );
}

export default Growth;
