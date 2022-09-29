
import axios from "axios";
import {set } from 'lodash'
const  apiCall = (props) => {


  const headers = {};


  // let headers = {"Content-Type":"application/json"};
  set(headers, "Content-Type", "application/json" )
  

  let loginData = localStorage.getItem("loginData")


  if(loginData){
    loginData = JSON.parse(loginData)

    

    let token = loginData.access_token.accessToken

    



    set(headers, "Authorization", `Bearer ${token}` )

    console.log({headers})
  }

  if(props.method === "GET"){
    axios.get(props.url, {headers}).then((response) => {
      console.log("Raw response from api----", response)
     if(response && response.status === 200){
        props.callback(response)
      }else{
        props.callback({error:"Some issue with the api call", res : response})

      }
    })

  }
  else if(props.method ==="POST"){
  
    axios.post(props.url, props.data, {headers} ).then((response) => {
      if(response && response.status === 200){
        props.callback(response)
      }else{
        props.callback({error:"Some issue with the api call", res : response})

      }
    })
  }
  else if (props.method === "DELETE"){
    axios.delete(props.url).then ((response) =>{
     if(response && response.status === 200){
        props.callback(response)
      }else{
        props.callback({error:"Some issue with the api call", res : response})

      }
    })
  }else{
    axios.put(props.url, props.data).then ((response) =>{
     if(response && response.status === 200){
        props.callback(response)
      }else{
        props.callback({error:"Some issue with the api call", res : response})

      }
    })

  }
  


      // function deletePost() {
      //   axios
      //     .delete(`${baseURL}/1`)
      //     .then(() => {
      //       alert("Post deleted!");
      //       setPost(null)
      //     });
      // }
  }

export default  apiCall;
