import React from "react";
import Logo from "../assets/logo/logo.png";

function Navbar() {
  return (
    <div className="p-4 flex text-white justify-center items-center">
      <img
        src={Logo}
        alt="logo"
        className="mr-auto"
        style={{ width: "200px" }}
      />
      <div className="sm:flex hidden justify-between gap-6 mr-auto font-medium cursor-pointer">
        <div className="transition ease-in-out hover:scale-110">
          <a href="#service">Services</a>
        </div>
        <div className="transition ease-in-out hover:scale-110">
          <a href="#techstack">Tech Stack</a>
        </div>
        <div className="transition ease-in-out hover:scale-110">
          <a href="#contactus">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
