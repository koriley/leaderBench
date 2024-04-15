import React from "react";
import MainImage from '../components/Image/image';
import image from '../images/a1.jpg';
import map from '../images/map.png';


export default function Map() {
    return (
        <>
           
            <div className="account">
            <MainImage imageProp={image}></MainImage>
                <div className="container">
                   <div className='ui-dashboard'>
                       <img src={map} alt='map' style={{width:'100%', position:'relative', 'z-index':'15', margin:'75px 0 0 0'}}/>
                   </div>
                </div>
            </div>
        </>
    )
}