import React from "react";
import { useHistory } from "react-router-dom";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

const AboutUs = () => {
  const history = useHistory();

  return (
    <div className="main-about-us-container content-wrapper">
      <div className="about-us-title">
        <span>About Us</span>
      </div>
      <div className="line"></div>
      <div className="about-desc">
       
          A terms and conditions agreement outlines the website administrator’s
          rules regarding user behavior and provides information about the
          actions the website administrator can and will perform. Essentially,
          your terms and conditions text is a contract between your website and
          its users. In the event of a legal dispute, arbitrators will look at
          it to determine whether each party acted within their rights.
          <br />
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available
          <br />
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available
      </div>
    </div>
  );
};

export default AboutUs;
