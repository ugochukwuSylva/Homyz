import React from "react";
import "../styles/Contacts.css";
import contactHouse from "../assets/contacts-house.jpg";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { IoMdVideocam } from "react-icons/io";

function Contacts() {
  return (
    <div className="contactContainer" id="contacts">
      <div className="contact_content">
        <div className="c-left">
          <p>Our Contact</p>
          <h3>Easy to contact</h3>
          <p>
            We are always ready to provide the best service for you. We believe
            a good place to live can make your life way better.
          </p>

          <div className="allContacts">
            <div className="contact-info">
              <div className="contact-info_content">
                <MdCall size={20} />

                <div>
                  <span>Call</span>
                  <p> +348 8065 876</p>
                </div>
                <button>Call Now</button>
              </div>
              {/*  */}
              <div className="contact-info_content">
                <BsFillChatDotsFill size={20} />
                <div>
                  <span>Chat</span>
                  <p> +348 8065 876</p>
                </div>
                <button>Chat Now</button>
              </div>
              {/*  */}
              <div className="contact-info_content">
                <IoMdVideocam size={20} />
                <div>
                  <span>Video</span>
                  <p> +348 8065 876</p>
                </div>
                <button>Video Call Now</button>
              </div>
              {/*  */}
              <div className="contact-info_content">
                <HiChatBubbleBottomCenter size={20} />
                <div>
                  <span>Message</span>
                  <p> +348 8065 876</p>
                </div>
                <button>Message Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* left-side */}
        <div className="c-right">
          <div className="imageContainer">
            <img src={contactHouse} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
