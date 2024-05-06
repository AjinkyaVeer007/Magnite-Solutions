import React from "react";
import { theme } from "../utils/constant";
import introImg from "../assets/svg/intro.svg";

function Intro() {
  return (
    <div
      style={{ backgroundColor: theme.light }}
      className="row g-0 align-items-center"
      id="home"
    >
      <div className="col-12 col-lg-6 order-lg-0 order-2">
        <div
          style={{
            color: theme.primary,
            fontSize: "40px",
            lineHeight: "normal",
          }}
          className="text-center fw-bold"
        >
          Welcome to <br />{" "}
          <span style={{ fontSize: "55px", color: theme.dark }}>
            Magnite Solutions
          </span>
        </div>
        <div
          className="text-center pb-5 mt-3 fw-medium"
          style={{ color: theme.secondary }}
        >
          The Best Reliable Tech Industry Solution
        </div>
      </div>
      <div className="col-12 col-lg-6 text-center">
        <img src={introImg} alt="intro img" width={"90%"} />
      </div>
    </div>
  );
}

export default Intro;
