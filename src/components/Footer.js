import React from "react";
import "../styles/Footer.css";
import logo from "../assets/companyLogo.png";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="content">
        <div className="content1">
          <img src={logo} alt="" />
          <p>
            Our vision is to provide attractive <br />
            houses at affordable prices
          </p>
        </div>
        <div className="content2">
          <p>Information</p>
          <small>145 New York, FL 457L , USA</small>
          <span>
            <p>Property</p>
            <p>Services</p>
            <p>Product</p>
            <p>About Us</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
