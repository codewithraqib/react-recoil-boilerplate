import React from "react";
import { useHistory } from "react-router-dom";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

const TermAndCondition = () => {
  const history = useHistory();

  return (
    <div className="main-term-and-condition-container content-wrapper">
      <div className="condition-title">
        <span>Term And Condition</span>
      </div>
      <div className="line"></div>
      <div className="condition-desc-container">
        <div className="condition-desc-head">
          <span>What Are Terms and Conditions?</span></div>
          <div className="condition-desc">
            <span>
              A terms and conditions agreement outlines the website
              administrator’s rules regarding user behavior and provides
              information about the actions the website administrator can and
              will perform. Essentially, your terms and conditions text is a
              contract between your website and its users. In the event of a
              legal dispute, arbitrators will look at it to determine whether
              each party acted within their rights.<br/>
              A terms and conditions agreement outlines the website
              administrator’s rules regarding user behavior and provides
              information about the actions the website administrator can and
              will perform. Essentially, your terms and conditions text is a
              contract between your website and its users. In the event of a
              legal dispute, arbitrators will look at it to determine whether
              each party acted within their rights.
            </span>
        </div>
        <div className="condition-question">
          <span>Term of Use</span></div>
          <div className="condition-ans">
            Essentially, your terms and conditions text is a
              contract between your website and its users
          </div>
      </div>
    </div>
  );
};

export default TermAndCondition;
