// import React from "react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';

import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import appData from "../appData";
import apiCall from "../axios/apiCall";

const NewUser = () => {
  const history = useHistory();
  // const goto = () => {
  //   history.push("/login");
  // };
  const [number, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [male, setMale] = useState("");
  const [female, setFemale] = useState("");
  const [pin, setPin] = useState("");
  const [password, setPassword] = useState("");


  // const [value, setValue] = React.useState('female');

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // }
  const addClickNewUser = () => {
    let data = {
      name: name,
      email:email,
      mobile: number,
      password:pin
    }


    console.log({data})

    apiCall({
      method :"POST",
      url:appData.BASE_URL+"api/register" ,
      callback : (res) => {
      console.log("response from api in newuser---------",res)

      if(res && res.data && res.data.data){


        localStorage.setItem("loginData", JSON.stringify(res.data))

        history.push('/login')

      }
    
    },
    data: data
    })
  
  }
  return (
    <div>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="form-group mt-3">
              <label>Phone Number</label>
              <input
                type="number"
                className="form-control mt-1"
                placeholder="+910000000000"
                onChange={({ target }) => setPhoneNumber(target.value)}
              />
            </div>

            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="name"
                className="form-control mt-1"
                placeholder="Your Name"
                onChange={({ target }) => setName(target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
                onChange={({ target }) => setEmail(target.value)}
              />
            </div>

            {/* <div className="form-group mt-3">
              <span className="radio-btn">
                <input TYPE="Radio" Name="Gender" Value="Male" 
                 onChange={({ target }) => setMale(target.value)}
                />
                Male
              </span>
              <span className="radio-btn">
                <input TYPE="Radio" Name="Gender" Value="Female" 
                 onChange={({ target }) => setFemale(target.value)}
                />
                Female
              </span>
            </div> */}

            <div className="form-group mt-3">
              <label>PIN</label>
              <input
                type="number"
                className="form-control mt-1"
                placeholder="Set Pin (6 digit)"
                onChange={({ target }) => setPin(target.value)}

              />
              <label>Confirm Pin</label>
              <input
                type="number"
                className="form-control mt-1"
                placeholder="confirm  Pin (6 digit)"
              />
            </div>
         
            <div className="d-grid gap-2 mt-3">
              <button
                onClick={addClickNewUser}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              {/* Forgot <a href="#">password?</a> */}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
