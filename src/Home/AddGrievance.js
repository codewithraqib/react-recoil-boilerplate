// import React from "react";
import * as React from 'react';
import { useHistory } from "react-router-dom";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { itemsState } from '../Recoil/atoms';
import apiCall from "../axios/apiCall";
import appData from "../appData";


const AddGrievance = () => {
  //   const [grievance, setgrievance] = useRecoilState(grievanceState);
  const history = useHistory();
  const options = [
    { label: 'Pulwama', value: 'Pulwama' },
    { label: 'Awantipora', value: 'Awantipora' },
    { label: 'Pampore', value: 'Pampore' },
    { label: 'Kakapora', value: 'kakapora' },
    { label: 'Rajpora', value: 'rajpora' },
  ];
  const [address, setAddress] = React.useState();
  const [value, setValue] = React.useState('Pulwama');
  const [age, setAge] = React.useState(0);
  const [Pin, setPin] = React.useState(0);
  const [grievance, setGrivance] = React.useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [selectedImage, setSelectedImage] = React.useState();
  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };


  const [selectedFile, setSelectedFile] = React.useState([]);

  // let [value, setValue] =React.useState();
// let onChange = (event) => {
//     setSelectedFile(event.target.value);
//   };



const goto = ()=> {
  history.push('./')

}



const setBirthDate = (val) => {
  console.log(val.target.value)


  let year = val.target.value.split("-")[0];

  let presentYear = new Date().getFullYear()


  let age = presentYear - year;


  setAge(age)

  console.log(age)}

  const addClick = () => {
    let data = {
    Address : address,
      // value:tehsil_name,
      tehsil_name:value,
      age:age,
      pincode:Pin,
      grievance:grievance,
      // selectedImage:attachments
      attachments: selectedImage
    }

    apiCall({
      method :"POST",
      url:appData.BASE_URL+"api/v1/grievance" ,
      callback : (res) => {
      console.log("response from api in grevance---------",res)

      // if(res && res.data && res.data.data){


      //   localStorage.setItem("loginData", JSON.stringify(res.data.data))

      //   history.push('/grievance')

      // }
    
    },
    data: data
    })
  }



  return (
    <div className="main-AddGrievance-container content-wrapper">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Add Grievance</h3>
          <div className="form-group mt-3">
            <label>Address</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Address"
              onChange={({ target }) => setAddress(target.value)}
            />
          </div>
          <div >
          <label >
          District   </label>
            <div  className=" verfied-logo mt-1">
                Pulwama
                <span><img src="../img/verfied.png"/></span>
              </div>
            
              
          </div>


          {/* <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="name"
              className="form-control mt-1"
              placeholder="Your Name"
            />
          </div> */}
           <div className='drop-down '>
      <label >
        Tehsil   </label>
        <select  className='drop-down-input form-control mt-1'  value={value} onChange={handleChange}>
          {options.map((option) => (
            <option   value={option.value}>{option.label}</option>
        
          ))
           }
              
        </select>
   

    </div>
    <div className="form-group mt-3">
            <label>PIN</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Set Pin (6 digit)"
            onChange={({ target }) => setPin(target.value)}

            />
            </div>
           
          <div className="form-group mt-3" >
            <label>Date of Birth</label>
            <input
              type="date"
              className="form-control mt-1"
              placeholder="date"
              onChange={setBirthDate}
            />
            <label className='form-group mt-3'>Age</label>
            <input type="number" className="form-control mt-1" placeholder="age" value={age} disabled />
          </div>
          <div className="form-group mt-3">
            <label>Grievance</label>
            <textarea
              className="form-control mt-1"
              name=""
              rows="3"
              cols="41"
              placeholder="Enter your grievance"
            onChange={({ target }) => setGrivance(target.value)}

            >
            </textarea>
          </div>
        
            
     <label className='Attachment'>Attachments files</label>
         
      <div style={styles.container}>
        <input
          accept="image/*"
          type="file"
          onChange={imageChange}
          className="form-control mt-1"
          multiple
          

        />

         {/* {selectedImage && selectedImage.map((item,key)=>{
          return(
            <div key={key}>
            <img src={item.file} />
           </div>
          )
         }
         )} */}


        {selectedImage && (
          <div style={styles.preview}>
            <img
              src={URL.createObjectURL(selectedImage)}
            
              style={styles.image}
              alt="Thumb"
            />
            <button onClick={removeSelectedImage} style={styles.delete}>
              Remove This Image
            </button>
          </div>
        )}
      </div>
            {/* <input type="file" name="filefield" multiple   value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[0])} className="form-control mt-1"/>
            {selectedFile.map((item, key) => (
              
              <span key={key}>{item.files}</span>
            // <span   value={item.value}>{item.label}</span>
          ))} */}


          <div className="d-grid gap-2 mt-3">
            <button
              onClick={() => addClick ()}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            {/* Forgot <a href="#">password?</a> */}
          </p>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: 50,
  },
  preview: {
    marginTop: 5,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "100%", maxHeight: 320 },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "red",
    color: "white",
    border: "none",
  },
};
export default AddGrievance;
