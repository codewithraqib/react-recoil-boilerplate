import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import appData from "../appData";
import apiCall from "../axios/apiCall";
import { grievanceState } from "../Recoil/atoms";

const Grievance = () => {
  const [grievance, setgrievance] = useRecoilState(grievanceState);
  const history = useHistory();
  const goto = () => {
    history.push("/addgrievance");
  };
  const clickOnDetail =()=>{
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

      setgrievance(res.data.data)

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
      {grievance && grievance.length > 0 && grievance.map((item, key) => {
        return (
          <div className="inner-grievance-card" key={key}>
            <div className="grievance-img">
                <img src={item.img}/>
                <span>{item.grievance}</span>
            </div>
            <div className="detail-btn" onClick={()=>clickOnDetail(item)}>Details</div>
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
