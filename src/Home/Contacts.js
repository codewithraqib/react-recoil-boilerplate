import React from "react";
import { useHistory } from "react-router-dom";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";




const Contacts = () => {
    // const [gallerImg, setgallerImg] = useRecoilState(galleryState);
  const history = useHistory();
 const contants=[
    {name:"Ashu",number:"738287228"},
    {name:"Aqib",number:"7648499999"},
    {name:"Basit",number:"7278888888"},
    
  ]

  
  
//   onClick={()=>clickOnNumber()}>{item.number} 
   return (
    <div className="main-contacts-container content-wrapper">
         <strong>Contacts</strong>
        {contants.map((item ,key)=>{
            return(
                <div className="contact-card" key={key}>
                <div className="contact-name"> 
                    <span>{item.name}</span>
                </div>
                <div className="contact-number"> <a href="tel://"> {item.number}</a>
                <span class="tooltiptext">C a l l</span></div>
              </div>
            )
        })}
    
    </div>
  );
};

export default Contacts;
