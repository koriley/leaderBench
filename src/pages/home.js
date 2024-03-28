import React from "react";
import MainImage from '../components/Image/image';
import image from '../images/a2.jpg';
import Text from '../components/Text/Text'

export default function Home() {
    return (
        <div className="homeParent">
            <MainImage imageProp={image}></MainImage>
            <div className="textChild" ><Text title="Title" body="Body"></Text></div>
        </div>
    )
}