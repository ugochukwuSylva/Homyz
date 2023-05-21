import React from "react";
import "../styles/Sponsors.css";
import sponsorImage1 from "../assets/sponsors1.png";
import sponsorImage2 from "../assets/sponsors2.jpg";
import sponsorImage3 from "../assets/sponsors3.jpg";
import sponsorImage4 from "../assets/sponsors4.png";

function Sponsors() {
  return (
    <div className="sponsor_container">
      <img src={sponsorImage1} alt="sponsorer" className="sponsor_image" />
      <img src={sponsorImage2} alt="sponsorer" className="sponsor_image" />
      <img src={sponsorImage3} alt="sponsorer" className="sponsor_image" />
      <img src={sponsorImage4} alt="sponsorer" className="sponsor_image" />
    </div>
  );
}

export default Sponsors;
