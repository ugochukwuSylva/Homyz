import React from "react";
import "../styles/Hero.css";
import heroImage from "../assets/hero-image.jpg";
import { HiLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";
import CountUp from "react-countup";

function Hero() {
  return (
    <section>
      <div className="hero_container">
        <span className="h-left">
          <motion.span
            className="orangeCircle"
            animate={{ x: 0 }}
            initial={{ x: "-15rem" }}
            transition={{ duration: 3 }}
          ></motion.span>
          <h2>
            Discover <br /> most suitable <br /> property
          </h2>
          <p className="hero-text">
            Find a variety of properties that suits your life style
            <br />
            Forget all difficulties in house hunt, we're here for you
          </p>
          <div className="searchContainer">
            <HiLocationMarker size={30} color="blue" />
            <input type="text" className="searchBar" />
            <button>Search</button>
          </div>
          <span className="achievements">
            <span>
              <p className="number">
                <CountUp start={2380} end={5000} duration={3} />
                <span className="plus">+</span>
              </p>
              <p>Premium Product</p>
            </span>
            <span>
              <p className="number">
                <CountUp start={1290} end={2870} duration={3} />
                <span className="plus">+</span>
              </p>
              <p>Happy Customers</p>
            </span>
            <span>
              <p className="number">
                <CountUp start={4} end={17} duration={3} />{" "}
                <span className="plus">+</span>
              </p>
              <p>Awrads Winning</p>
            </span>
          </span>
        </span>
        <motion.span
          className="h-right"
          animate={{ x: 0 }}
          initial={{ x: "15rem" }}
          transition={{ duration: 3 }}
        >
          <span>
            <img src={heroImage} alt="house" className="hero_image" />
          </span>
        </motion.span>
        <span className="brightLight"></span>
      </div>
    </section>
  );
}

export default Hero;
