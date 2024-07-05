import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

export const Contacts = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          
        >
          <a
            href="https://www.linkedin.com/in/vanshika-ahuja-a74b9a239"
            className="items"
          >
            <FaLinkedin className="icons" />
          </a>
          <a href="https://x.com/vanshik30604848" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://github.com/VanshikaA27" className="items">
            <FaGithub className="icons" />
          </a>
          <a href="mailto:ahujvanshika905@gmail.com" className="items">
            <SiGmail className="icons" />
          </a>
          <a href="https://leetcode.com/AvatarCoder/" className="items">
            <SiLeetcode className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};
