import React from 'react';
import './HeaderImages.css'
import image1 from '../picture/header1.jpg'

const HeaderImage = () => {
    const imageColer = {
        background: '#D4C355'
    }
    return (
        <div className={imageColer}>
            <img className='image-css' src={image1} alt="" />
        </div>
    );
};

export default HeaderImage;