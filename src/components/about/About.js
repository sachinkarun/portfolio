import React from 'react'
import './about.css'
import pexels from '../../img/me.jpg'

const About = ({mode}) => {
    return (
        <div className="a">
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Motivated and flexible assembling Computer Science Engineer with a combine 
                    ability of coding and developing skill.
                </p>
                <p className="a-desc">
                I am Working on react native for long period in building mobile applications 
                with knowledge of user interface and responsive designs,
                and very much comfortable to work with Rest Api's, Redux architecture and Functional based components to improve performance.
                Also worked with some technologies like HTML, CSS, JavaScript, Java, 
                React & React Native and MERN STACK.
                </p>

            </div>
            <div className="a-left">
                <div className={mode ? "a-card bg2" : "a-card bg"}></div>
                <div className="a-card">
                    <img src={pexels} alt="" className="a-img" />
                </div>
            </div>
        </div>
    )
}

export default About
