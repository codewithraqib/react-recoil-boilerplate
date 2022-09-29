
import React from "react";
import { useHistory } from "react-router-dom";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { galleryState } from "../Recoil/atoms";
import PhotoAlbum from "react-photo-album";



const Gallery = () => {
    const [gallerImg, setgallerImg] = useRecoilState(galleryState);
  const history = useHistory();
  
  

  return (
    <div className="main-img-container content-wrapper">
        {gallerImg.length &&(
                <div className=""  >
                  <PhotoAlbum layout="masonry" photos={gallerImg}/>
                </div>  
            )} 
    </div>
  );
};

export default Gallery;
