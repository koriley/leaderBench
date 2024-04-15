import React from "react";
import MainImage from '../components/Image/image';
import image from '../images/a1.jpg';
import Dashboard from '../components/Dashboard/Dashboard'
import Details from '../components/OwnerDetails/OwnerDetails';

export default function Account() {
    return (
        <>
            <div className="account">
                <MainImage imageProp={image}></MainImage>
                <div className="container">
                   <div className='ui-dashboard'>
                        <Dashboard />
                        <Details />
                   </div>
                </div>
            </div>


        </>
    )
}