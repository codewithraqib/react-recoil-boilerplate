
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import OtpInput from 'react18-otp-input';
import apiCall from "../axios/apiCall";
import appData from "../appData";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";



const NewPassword = () => {
    const  goto=()=>{
    
    }
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
  const history = useHistory();
//  let state = { otp: '' };

//  const handleChange = (otp) => this.setState({ otp });
const changepasscode = () => {

  let data = {
    mobile : username,
    password : password

  }
  console.log({data})

  apiCall({
    method :"POST",
    url:appData.BASE_URL+"api/change-password" ,
    callback : (res) => {
    console.log("response from api in change passcodes---------",res)
    if (res && res.data && res.data.message === "SUCCESS"){
      history.push('/login')
    }

  },
  data: data
  
  })
}
  

  return (
    <div className="main-newpassword-container content-wrapper">
 
        <form className="Auth-form">
        <div className="Auth-form-content" 
       
       
        >
          <h3 className="Auth-form-title"> Set New password</h3>
          <div className="form-group mt-3">
            <label>Phone Number</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="New password"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
         
        
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="confirm password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button onClick={() => changepasscode()} type="submit" className="btn btn-primary">
             Submit
            </button>
          </div>
           
          
        
       </div>
      </form>
      
    </div>
  );
};

export default NewPassword;
