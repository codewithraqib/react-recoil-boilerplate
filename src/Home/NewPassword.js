
import  React from "react";
import { useHistory } from "react-router-dom";
// import OtpInput from 'react18-otp-input';
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";



const NewPassword = () => {
    const  goto=()=>{
        history.push('/login')
    }
  
  const history = useHistory();
//  let state = { otp: '' };

//  const handleChange = (otp) => this.setState({ otp });

  

  return (
    <div className="main-newpassword-container content-wrapper">
 
        <form className="Auth-form">
        <div className="Auth-form-content" 
       
       
        >
          <h3 className="Auth-form-title"> Set New password</h3>
          <div className="form-group mt-3">
            <label>Phone Number</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="New password"
            />
          </div>
         
        
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="confirm password"
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

export default NewPassword;
