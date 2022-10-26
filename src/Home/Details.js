import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import appData from "../appData";
import apiCall from "../axios/apiCall";
import { currentGrievanceState, grievanceDetailState } from "../Recoil/atoms";

const Details = () => {
  const history = useHistory();
  const grievanceDetails = useRecoilValue(grievanceDetailState);
  const grievance = useRecoilValue(currentGrievanceState);

  console.log("Grievance Details------", grievanceDetails);
  console.log("Grievance is-----", grievance);

  useEffect(() => {}, []);
  let downloadFile = (item) => {
    // console.log(grievanceDetails.data)

    let file = grievanceDetails.mediaUrl + item.attachment;
    console.log(file);

    window.open(file);
    // saveAs( grievanceDetails.mediaUrl + file);
    // Put your image url here.
  };

  return (
    <div className="main-datail-container content-wrapper">
      <div className="disc-container">
        <div className="status">
          Status: <span>{grievance.status}</span>
        </div>

        <div className="inner-detail-text">{grievance.grievance}</div>
      </div>

      <div className="replies-title">Replies:</div>
      {grievanceDetails &&
        grievanceDetails.data &&
        grievanceDetails.data.length > 0 &&
        grievanceDetails.data.map((item, key) => {
          return (
            <div className="reply-card-container" key={key}>
              <div className="reply-user-date">
                <div className="username">{item.replied_by}</div>
                <div className="reply-date">
                  {item.created_at.split("T")[0]}
                </div>
              </div>
              <div className="user-reply">{item.reply}</div>
              <div className="attachment-file">
                <div>
                  Attachments Added
                  <div>{item.attachment}</div>
                  {/* <div className="download-icon"> <img src={grievanceDetails.mediaUrl + item.attachment}/></div> */}
                </div>

                <div
                  className="attachment-container"
                  onClick={() => downloadFile(item)}
                >
                  <div className="download-icon">
                    {" "}
                    <img src="./img/download.png" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Details;
