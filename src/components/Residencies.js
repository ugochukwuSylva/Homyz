import React from "react";
import "../styles/Residencies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Data } from "../helpers/residenciesArray";
import { swipperSettings } from "../helpers/swiperSettings";

function Residencies() {
  return (
    <div className="residence_container" id="residencies">
      <div>
        <p className="bestChoice">Best Choices</p>
        <h3 className="popResidence">Popular Residencies</h3>
        <Swiper {...swipperSettings}>
          <SwiperBtn />
          {Data.map((el, i) => (
            <SwiperSlide key={i}>
              <div className="slide-design">
                <img src={el.image} alt="" />
                <p>
                  <span style={{ color: "orange", fontWeight: "500" }}>$</span>
                  {el.price}
                </p>
                <span>{el.name}</span>
                <span>{el.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Residencies;

const SwiperBtn = function () {
  const btn = useSwiper();
  return (
    <div className="btnContainer">
      <button className="btn b-left" onClick={() => btn.slidePrev()}>
        &lt;
      </button>
      <button className="btn b-right" onClick={() => btn.slideNext()}>
        &gt;
      </button>
    </div>
  );
};
