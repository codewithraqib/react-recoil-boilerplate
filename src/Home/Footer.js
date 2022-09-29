import { Terminal } from "@mui/icons-material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import AboutUs from "./AboutUs";
import TermAndCondition from "./TermAndCondition";




const Footer = () => {
  const history = useHistory();
  
  const PrivacyPolicy = ()=> {
    history.push('PrivacyPolicy')
  }
  const TermAndCondition = ()=> {
    history.push('TermAndCondition')
  }
  const ContactUs = ()=> {
    history.push('ContactUs')
  }
  const AboutUs = ()=> {
    history.push('AboutUs')
  }

  return (
    <div className="main-footer-container ">
       <div className="footer-description">
        <span>Simple React Card a Nice Simple React Card by Jamie Halvorson. codepen See the Pen Simple React Card by Jamie Halvorson
        Simple React Card a Nice Simple React Card by Jamie Halvorson.
        </span>
       </div>
       <div className="social-links">
        <div>Instagram</div>
        <div>Facebook</div>
        <div>twitter</div>
       </div>
       <div className="about-links">
        <div  onClick={PrivacyPolicy}>Privacy policy</div>
        <div onClick={TermAndCondition}>Term And Condition</div>
        <div onClick={ContactUs}>Contact Us</div>
        <div onClick={AboutUs}>About Us</div>

       </div>
          </div>
        

  );
};

export default Footer;