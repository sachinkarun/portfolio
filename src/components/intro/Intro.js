import React from 'react'
import './intro.css'
import Me from '../../img/image.png'

const Intro = ({mode}) => {
    return (
        <div className="i">
          <div className="i-right">
                <div className={mode ? "i-bg2" : "i-bg"}></div>
                <img src={Me} alt="" className="i-img" />
            </div>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Sachin Karun</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">App Developement</div>
                            <div className="i-title-item">React & React Native</div>
                            <div className="i-title-item">JavaScript</div>
                            <div className="i-title-item">MERN Stack</div>
                            <div className="i-title-item">Web Developement</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I am very interested in creative fields and as a developer i am always
                        ready to have new experiences and learn new technologies.
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default Intro
