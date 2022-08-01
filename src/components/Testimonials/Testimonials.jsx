import React, { useState } from 'react';
import './Testimonials.css';
import {testimonialsData} from '../../data/testimonialsData'

const Testimonials = () => {

    const  [selected, setSelected] = useState(0);
    const tlenght = testimonialsData.length;


    return (
        <div className='testimonials'>
            <div className="left-t">
                <span>Testimonials</span>
                <span className='stroke-text'>what they</span>
                <span>say about us</span>
                <span>
                    {testimonialsData[0].review}
                </span>
                <span>
                    <span>
                        {testimonialsData[selected].name}
                    </span>
                        {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t"></div>
        </div>
    );
};

export default Testimonials;