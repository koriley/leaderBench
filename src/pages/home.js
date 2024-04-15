import React from "react";
import MainImage from '../components/Image/image';
import image from '../images/a2.jpg';
import Text from '../components/Text/Text';
import CTA from '../components/CTA/CTA';

export default function Home() {
    return (
        <div className="homeParent">
            <MainImage imageProp={image}></MainImage>
            <div className="textChild" >
                
                <Text
                    title="Welcome To Atlanta"
                    body="Atlanta isn’t just another major metropolitan city, it’s a unique, diverse urban landscape made up of nearly 45 distinct neighborhoods. Read on to discover all of the fun that awaits you in ATL." />
             <div><CTA 
                    url='//clubwyndham.wyndhamdestinations.com/us/en/resorts/featured-destinations/atlanta' 
                    linkText={'Vist Atlanta'}
                    /></div>  
            </div>
         
        </div>
    )
}