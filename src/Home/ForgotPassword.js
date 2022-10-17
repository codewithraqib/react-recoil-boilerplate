import { Numbers } from "@mui/icons-material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import OtpInput from 'react18-otp-input';
import apiCall from "../axios/apiCall";
import appData from "../appData";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";



const ForgotPassword = () => {
  const goto = () => {
    history.push("/newpassword");
  };
  const [number, setPhoneNumber] = useState("");

  const history = useHistory();
  //  let state = { otp: '' };

  //  const handleChange = (otp) => this.setState({ otp });


  const sendpasscode = () => {

    let data = {
      mobile : number
    }
    console.log({data})

    apiCall({
      method :"POST",
      url:appData.BASE_URL+"api/send-otp" ,
      callback : (res) => {
      console.log("response from api in forget pass---------",res)

    },
    data: data
    
    })
  }
  const verifyuser = () => {
    apiCall({
      method :"POST",
      url:appData.BASE_URL+"api/verify-otp" ,
      callback : (res) => {
      console.log("response from api in verify user---------",res)

   

        history.push('/newpassword')

    
    },
    })
  }

  return (
    <div className="main-forgotpassword-container content-wrapper">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Forgot Password</h3>
          <div className="otp-btn-input">
            <div className="  form-group mt-3">
              <label>Phone Number</label>
              <input
                type="Number"
                className="form-control mt-1"
                placeholder="70060000000"
                onChange={({ target }) => setPhoneNumber(target.value)}
              />
            </div>
            <div className=" otp-btn d-grid gap-2 mt-3">
              <button
                onClick={() => sendpasscode()}
                type="submit"
                className="btn btn-primary"
              >
                Get OTP
              </button>
            </div>
          </div>

          {/* <OtpInput
        value={state.otp}
        onChange={handleChange}
        numInputs={6}
        separator={<span>-</span>}
      /> */}
          <div className="form-group mt-3">
            <label></label>
            <input type="" className="form-control mt-1" placeholder="OTP" />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              onClick={() => verifyuser()}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
