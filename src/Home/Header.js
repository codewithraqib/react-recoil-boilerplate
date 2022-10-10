import React from "react";
import { useHistory } from "react-router-dom";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import MultilevelDropdown from "../Components/MultilevelDropdown";



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
        
          <MultilevelDropdown/>
    </div>
  );
};

export default Header;