import React from "react";
import MainImage from '../components/Image/image';
import image from '../images/a1.jpg';
import Dashboard from '../components/Dashboard/Dashboard'

export default function Account() {
    return (
        <>
            <div className="account">
                <MainImage imageProp={image}></MainImage>
                <div className="container">
                   <div className='ui-dashboard'>
                        <Dashboard />
                   </div>
                </div>
            </div>


        </>
    )
}