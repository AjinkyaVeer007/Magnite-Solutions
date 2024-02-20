import React from "react";

function Footer() {
  return (
    <div
      style={{ height: "400px" }}
      className="relative bg-gradient-to-t from-red-500 to-orange-500 mt-24"
      id="contactus"
    >
      <div className="custom-shape-divider-top-1708347020">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="sm:pt-10 pt-1">
        <div className="text-center mt-32 sm:text-5xl text-3xl font-bold sm:mb-6 mb-2 text-white">
          How can we help you?
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-3/4 text-red-200 text-center">
            Get quote by sending enquires below. We will connect you withing 2
            business days or immediately if possible.
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-6 mt-2">
            <div className="sm:w-3/4 text-red-50 text-center font-bold">
              Contact No : 8655373383
            </div>
            <div className="sm:w-3/4 text-red-50 text-center whitespace-nowrap font-bold">
              Email Id : magnitetechsolutions@gmail.com
            </div>
          </div>
          <a
            href="mailto:magnitetechsolutions@gmail.com"
            className="bg-white shadow-md px-10 py-4 rounded-lg text-red-500 font-bold mt-6 cursor-pointer"
          >
            Get Quote
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
