import React from "react";
import { useHistory } from "react-router-dom";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { sahuletState } from "../Recoil/atoms";

import Login from "./Login";

const Default = () => {
  const [sahulatIcons, setsahuletIcons] = useRecoilState(sahuletState);

  const history = useHistory();

  // const routeChange = () =>{
  //   let path = `/Login`;
  //   let history = useHistory();
  //   history.push(Login)
  //   console.log('clicked.........', routeChange);
  // }

  console.log("sahulet icons----", sahulatIcons);
  console.log("clicked.........", history);

  const goto = (screen) => {
    if (screen === "womenhelp") {
      history.push("/womenhelp");
    } else if (screen === "gallery") {
      history.push("/gallery");
    } else if (screen === "grievance") {
      checkLogin();
    } else if (screen === "gallery") {
      history.push("/gallery");
    } else if (screen === "contacts") {
      history.push("/contacts");
    } else if (screen === "website") {
      history.push("/");
    }
  };

  const checkLogin = () => {
    let loginData = localStorage.getItem("loginData");

    if (loginData) {
      loginData = JSON.parse(loginData);

      if (loginData.data.id) {
        history.push("/Grievance");
      } else {
        history.push("/login");
      }
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="main-container">
      <img src="./img/forest.avif" />
      <div className="content-wrapper">
        <div className="sahulat-main">
          {/* <div className="nav-img-background">
            <div className="sahulet-logo">
              <img src="./img/logo1.jpg" />
              <strong>Sahulet</strong>
            </div>
          </div> */}
          <div className="sahulet-link-icons">
            {sahulatIcons.map((item, key) => {
              return (
                <div className="inner-icons" key={key}>
                  <span onClick={() => goto(item.goto)}>
                    <img src={item.img} />
                  </span>
                  <div className="inner-icon-title">{item.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="empty-space-default-page">
        <span>
          A terms and conditions agreement outlines the website administrator’s
          rules regarding user behavior and provides information about the
          actions the website administrator can and will perform. Essentially,
          your terms and conditions text is a contract between your website and
          its
        </span>
      </div>
    </div>
  );
};

export default Default;
