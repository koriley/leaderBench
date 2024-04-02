import './image.css';
// import Poppins from 'typeface-poppins';


export default function imageFade({ imageProp, }) {
    return(
    <div className="imageParent">
        {/* <img src={imageProp} alt="resort" style={{ width: '100%' }} className='imageFade'></img> */}
        {/* <div className='imageFade' style={{
            backgroundImage:  `linear-gradient(to bottom, transparent, blue), url(${imageProp})`,
            
        }}></div> */}
        <img src={imageProp} className="imageFade" alt=""></img>
        <div className="grad"></div>
       
    </div>
    )}