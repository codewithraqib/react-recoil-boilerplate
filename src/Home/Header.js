import React from "react";
import { useHistory } from "react-router-dom";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";




const Header = () => {
  const history = useHistory();
  
  const goto = ()=> {
    history.push('./')
  
  }

  return (
    <div className="main-Header-container ">
        <div className="nav-img-background">
            <div onClick={goto} className="sahulet-logo">
              <img src="./img/logo1.jpg" />
              <strong>Sahulet</strong>
            </div>
          </div>
        

    </div>
  );
};

export default Header;