import React, { useState } from "react";
import "../styles/Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import logo from "../assets/companyLogo.png";
// import OutsideClickHandler from "react-outside-click-handler";

function Header() {
  const [menuBar, setMenuBar] = useState(false);

  const handleClick = function () {
    setMenuBar((prev) => !prev);
  };

  const menuExpanded = function (menuBar) {
    if (document.documentElement.clientWidth <= 864)
      return { right: menuBar && "1rem" };
  };

  return (
    <header className="header">
      <nav className="navbar">
        <span className="logo">
          <img src={logo} alt="" style={{ width: "6rem" }} />
        </span>{" "}
        {/* <OutsideClickHandler onOutsideClick={() => setMenuBar(false)}> */}
        <ul style={menuExpanded(menuBar)} onClick={() => setMenuBar(false)}>
          <li>
            <a href="#residencies">Residencies</a>
          </li>
          <li>
            <a href="#ourValue">Our Value</a>
          </li>
          <li>
            <a href="#contacts">Contact Us</a>
          </li>
          <li>
            <a href="#getStarted">Get Started</a>
          </li>
          <li>
            <button className="contacts">Contact</button>
          </li>
        </ul>
        {/* </OutsideClickHandler> */}
        <BiMenuAltRight size={30} onClick={handleClick} />
      </nav>
    </header>
  );
}

export default Header;
