import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import '../../public/fonts/Maven_Pro'
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";




const ContactUs = () => {
   
  const history = useHistory();

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState()
  
  

   return (
    <div className="main-contact-us-container content-wrapper">
          <div className="contact-us-title">
        <span>Contact Us</span>
      </div>
      <div className="contact-us-text" >Any question and remarks? just write us a message!</div>
      <div className="inner-main-contact-us ">
        <div className="contact-us-card">
          <div className="contact-us-number" ><img  src="./img/phoneIcon.png"/><span><a href="tel:">918847483883</a></span></div>
          <div className="contact-us-mail" ><img  src="./img/mail.png"/><span><a href="mailto:abc@gamil.com"> abc@gamil.com</a></span></div>
          <div className="contact-us-location" ><img  src="./img/location.png"/><span> Pulwama</span></div>
          

        </div>
        <div className="contact-us-input">
        <form className="">
        <div className="Auth-form-content" 
   
       
        >
          <h3 className="Auth-form-title"></h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={({ target }) => setUsername(target.value)}
           
            />
          
          </div>
          <div className="form-group mt-3">
            <label>How may we help you?</label>
            <textarea
              className="form-control mt-1"
              name=""
              rows="3"
              cols="41"
              placeholder="Help me understand how i can help you?"
            >
            </textarea>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button onClick={() => grievance()} type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          
        </div>
        
      </form>
      </div>
      </div>
        
    
    </div>
  );
};

export default ContactUs;
