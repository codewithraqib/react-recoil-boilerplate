
import  React from "react";
import { useHistory } from "react-router-dom";
// import OtpInput from 'react18-otp-input';
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";



const ForgotPassword = () => {
    const goto =()=>
    {
        history.push('/newpassword')
    }
  
  const history = useHistory();
//  let state = { otp: '' };

//  const handleChange = (otp) => this.setState({ otp });

  

  return (
    <div className="main-forgotpassword-container content-wrapper">
 
        <form className="Auth-form">
        <div className="Auth-form-content" 
       
       
        >
          <h3 className="Auth-form-title">Forgot Password</h3>
          <div className="otp-btn-input">
          <div className="  form-group mt-3">
            <label>Phone Number</label>
            <input
              type="Number"
              className="form-control mt-1"
              placeholder="+9190000000"
            />
          </div>
          <div className=" otp-btn d-grid gap-2 mt-3">
            <button onClick={() => goto()} type="submit" className="btn btn-primary">
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
            <input
              type=""
              className="form-control mt-1"
              placeholder="OTP"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button onClick={() => goto()} type="submit" className="btn btn-primary">
             Submit
            </button>
          </div>
           
          
        
       </div>
      </form>
      
    </div>
  );
};

export default ForgotPassword;
