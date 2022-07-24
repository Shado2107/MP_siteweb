import React from 'react';
import Header from '../Header/Header';
import './Hero.css'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"

 
 const Hero = () => {
    return (
        <div className='hero'>
            <div className="left-h">
                <Header/>

                <div className="the-best-ad">
                    <div></div>
                    <span>The best communication agency</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Let us</span>
                        <span> Make</span>
                    </div>
                    <div>
                        <span>Your visibility</span>
                    </div>
                    <div>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam
                        </span>
                    </div>
                </div>
                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>expert coaches</span> 
                    </div>
                    <div>
                        <span>+978</span>
                        <span>members joined</span> 
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitnesse programs</span> 
                    </div>
                </div>

                <div className='hero-buttons'>
                    <button className='btn'>Get started</button>
                    <button className='btn'>Learn More</button>
                </div>

            </div>
            <div className="right-h">
                <button className='btn'> Join now</button>

                <div className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span><span>116 bpm</span> 
                </div>

                <img src={hero_image} alt="" className='hero-image' />
                <img src={hero_image_back} alt="" className='hero-image-back'/>

                {/* <div className="calories">
                    <div>
                        <img src={Calories} alt=""/>
                        <span>Calories Burned</span><span>222 Kcal</span>
                    </div>
                </div> */}
            </div>
        </div>
    );
 };
 
 export default Hero;