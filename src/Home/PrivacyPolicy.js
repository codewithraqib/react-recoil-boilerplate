import React from "react";
import { useHistory } from "react-router-dom";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

const PrivacyPolicy = () => {
  const history = useHistory();

  return (
    <div className="main-privacy-policy-container content-wrapper">
      <div className="privacy-title">
        <span>Privacy Policy</span>
      </div>
      <div className="line"></div>
      <div className="privacy-desc">
        <span>
          Thank you for your trust in AST Products, Inc. and for taking the time
          to read our Privacy Statement.
          <br />
          This Privacy Statement applies to information collected through this
          website and any mobile sites, applications, widgets, and other
          interactive features that link to this Privacy Statement. This Privacy
          Statement explains how AST Products, Inc. uses and discloses the
          information we collect from you through our websites, mobile
          applications, social media forums, and other services, both offline
          and online, that link to, incorporate, or for which you are provided a
          copy of this Privacy Statement (collectively, the "Services"), and the
          choices you have about how we use that information. Please read our
          privacy policy carefully to get a clear understanding of how we
          collect, use, protect or otherwise handle your Personally Identifiable
          Information in accordance with our website.<br/>
          Website and any mobile sites, applications, widgets, and other
          interactive features that link to this Privacy Statement. This Privacy
          Statement explains how AST Products, Inc. uses and discloses the
          information we collect from you through our websites
        </span>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
