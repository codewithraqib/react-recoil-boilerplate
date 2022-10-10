
import React from "react";
import { useHistory } from "react-router-dom";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import MultilevelDropdown from "../Components/MultilevelDropdown";
import { WomenHelpState } from "../Recoil/atoms";





const WomenHelp = () => {
    // const [gallerImg, setgallerImg] = useRecoilState(galleryState);
  const history = useHistory();
  
  

  return (
   
    <div className="women-help-container content-wrapper">
        <div className="help-line">
            <h2> UnderDevelopment!</h2>
            <h2> UnderDevelopment!</h2>
        </div>
       
       
    </div>
    

   
  );
};

export default WomenHelp;
