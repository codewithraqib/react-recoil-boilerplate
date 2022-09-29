// import React from "react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import ForgotPassword from "./ForgotPassword";
import { ConstructionOutlined } from "@mui/icons-material";
import apiCall from "../axios/apiCall";
import appData from "../appData";


const Login = () => {
  const history = useHistory();
const goto = ()=> {
  history.push('/newuser')
}
let Forgot =()=>{
  history.push('/forgotpassword')
}



  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState() ;



   const [posts, setPosts] = React.useState(null);
  
  React.useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response) => {

    // console.log(response)
    //   // setPosts(response.data);
    // });


    
  }, []);



  const loginUser = () => {
    let data = {
      mobile :username,
      password:password
    }

    apiCall({
      method :"POST",
      url:appData.BASE_URL+"api/login?" ,
      callback : (res) => {
      console.log("response from api in login screen---------",res)

      if(res && res.data && res.data.data && res.data.data.id){


        localStorage.setItem("loginData", JSON.stringify(res.data))

        history.push('/grievance')

      }
    
    },
    data: data
    })
  }

  // function updatePost() {
  //   axios
  //     .put(`${baseURL}/1`, {
       
  //     })
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }



  const handleSubmit = async e => {
    
  };

// if there's a user show the message below
  if (user) {
    return <div>{post.name} is loggged in</div>;
  }



  return (
    <div>

<div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content" 
        onSubmit={handleSubmit}
       
        >
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Number</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={({ target }) => setUsername(target.value)}
           
            />
          
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={({ target }) => setPassword(target.value)}
              
            
         
            />
              
          </div>
          <div className="d-grid gap-2 mt-3">
            <button onClick={() => loginUser()} type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          
          <div className="d-grid gap-2 mt-3">
            <button onClick={() => goto()} type="submit" className="btn btn-primary">
              New User
            </button>
          </div>
          <p className="forgot-password text-right mt-2" onClick={Forgot}>
            Forgot Password?
          </p>
        </div>
      </form>
    </div>


     </div>

    
  );
};

export default Login;
