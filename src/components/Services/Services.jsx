import React from 'react';
import './Services.css'
import {servicesData} from '../../data/servicesData'
import RightArrow from '../../assets/rightArrow.png'

const Services = () => {
    return (
        <div>
            <div className="services" id="services">
                <div className="services-header">
                    <span className='stroke-text'>Explore you</span>
                    <span>Programs</span>
                    <span className='stroke-text'>To shape you</span>
                </div>

                <div className='service-categories'>
                    {
                        servicesData.map((program)=>(
                            <div className='category'>
                                {program.image}
                                <span>{program.heading}</span>
                                <span> {program.details} </span>
                                <div className="join-now">
                                    <span>Join now</span>
                                    <img src={RightArrow} alt="" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;