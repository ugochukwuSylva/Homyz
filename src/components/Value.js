import React, { useState } from "react";
import "../styles/Value.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { data } from "../helpers/accordion";
import valueImg from "../assets/valueImage.jpg";
import { MdOutlineArrowDropDown } from "react-icons/md";

function Value() {
  const [className, setClassName] = useState(null);

  return (
    <div className="accord-container" id="ourValue">
      <div className="a-left">
        <img src={valueImg} alt="" />
      </div>

      <div className="a-right">
        <p>Our Value</p>
        <h3>Value we give to you</h3>
        <p>
          We are always ready to hep by providing the best service for you
          <br />
          We believe a good place to live can make your life way easier
        </p>

        <Accordion
          className="accordion"
          allowMultipleExpanded={false}
          preExpanded={[0]}
        >
          {data.map((el, i) => (
            <AccordionItem
              className={`accordionItem ${className}`}
              key={i}
              uuid={i}
            >
              <AccordionItemHeading className="accordionItemHeading">
                <AccordionItemButton className="accordionItemButton">
                  <AccordionItemState>
                    {({ expanded }) =>
                      expanded
                        ? setClassName("expanded")
                        : setClassName("collapsed")
                    }
                  </AccordionItemState>
                  <div className="accordionBtnDisplay">
                    <span>{el.icon}</span>
                    <span>{el.heading}</span>
                    <span>
                      <MdOutlineArrowDropDown size={20} />
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="accordionItemPanel">
                <p>{el.detail}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Value;
