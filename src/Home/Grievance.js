import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import appData from "../appData";
import apiCall from "../axios/apiCall";
import { currentGrievanceState, grievanceDetailState  } from "../Recoil/atoms";


const Grievance = () => {
  const [grievanceState,setCurrentGrievanceState] =useRecoilState(currentGrievanceState)
  const [grievanceDetails,setGrievanceDetails] =useRecoilState(grievanceDetailState)
  const history = useHistory();
  const goto = () => {
    history.push("/addgrievance");
  };

  const [grievances, setGrievances] = useState("")
  const clickOnDetail =(grievance)=>{

    // setGrievanceDetails(grievance)

    setCurrentGrievanceState(grievance)

    apiCall({
      method :"GET",
      url:appData.BASE_URL+"api/v1/grievance-details/" +grievance.grievance_id,
      callback : (res) => {
      console.log("response from api---------",res)
  
      if(res && res.data && res.data.data ){


        console.log("Grievance details",res.data)
  
  
        setGrievanceDetails(res.data)


      
  
      }
    },
    })

    
    history.push('/details')
  }


  useEffect(() => {
    let loginData = localStorage.getItem("loginData")


  if(loginData){
    loginData = JSON.parse(loginData)

    console.log({loginData})
  }
  apiCall({
    method :"GET",
    url:appData.BASE_URL+"api/v1/grievance/" +loginData.data.id,
    callback : (res) => {
    console.log("response from api---------",res)

    if(res && res.data && res.data.data ){
      // localStorage.setItem("DatailData", JSON.stringify(res.data.data))
      setGrievances(res.data.data);

      

    }
  },
  })

  },[])


  
  return (
    <div className="main-grievance-container content-wrapper">
      <div className="d-grid gap-2 mt-3">
        <button
          onClick={() => goto()}
          type="submit"
          className="btn btn-primary"
        >
          Add Grievance
        </button>
      </div>
      {grievances && grievances.length > 0 && grievances.map((item, key) => {
        return (
          <div className="inner-grievance-card" key={key}>
            <div className="grievance-img">
                <img src={item.img}/>
                <span>{item.grievance}</span>
            </div>
            <div className="btn-container">
            <div className="detail-btn" onClick={()=>clickOnDetail(item)}>Details</div>
            </div>
          </div>
        );
      })}
      {/* <div className="inner-grievance-card">
        <div>test</div>
        <div>test</div>
      </div> */}
    </div>
  );
};

export default Grievance;
