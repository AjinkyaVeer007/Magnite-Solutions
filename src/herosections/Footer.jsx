import React from "react";
import { theme } from "../utils/constant";
import companyLogo from "../assets/logo/logo.png";
import { MdEmail, MdHome, MdPhone } from "react-icons/md";

function Footer() {
  return (
    <div id="footer" style={{ backgroundColor: theme.dark }}>
      <div className="row g-0 p-4 p-lg-5 mx-1 mx-lg-5">
        <div className="col-12 col-lg-5 px-3 mb-3">
          <img src={companyLogo} alt="logo" width={"150px"} />
          <div className="mt-3" style={{ color: theme.light }}>
            We believe in the transformative power of technology to shape the
            future. As a dynamic web and Android development company, we are
            dedicated to creating innovative solutions that not only meet but
            exceed the expectations of our clients. With a passion for
            excellence and a commitment to quality, we embark on every project
            with enthusiasm, creativity, and expertise. Let us be your partner
            in the digital journey, as we turn your ideas into reality and
            redefine the standards of excellence in the digital realm.
          </div>
        </div>
        <div
          className="col-12 col-lg-3 px-3 mb-3"
          style={{ color: theme.light }}
        >
          <div style={{ color: theme.primary }} className="fw-medium mb-2">
            MORE INFORMATION
          </div>
          <li>About</li>
          <li>Products</li>
          <li>Contact Us</li>

          <div className="d-flex my-3">
            <div
              style={{ backgroundColor: theme.primary }}
              className="py-2 px-3"
            >
              Submit Enquiry
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 px-3 mb-3">
          <div style={{ color: theme.primary }} className="fw-medium mb-2">
            CONTACT US
          </div>
          <div className="d-flex gap-3 align-items-start mb-2">
            <div>
              <MdPhone size={"25px"} color={theme.primary} />
            </div>
            <div style={{ color: theme.light }}>Phone : +91 8655373383</div>
          </div>
          <div className="d-flex gap-3 align-items-start mb-2">
            <div>
              <MdEmail size={"25px"} color={theme.primary} />
            </div>
            <div style={{ color: theme.light }}>
              Email : magnitesolutiontech@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
