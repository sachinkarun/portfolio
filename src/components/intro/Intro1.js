import React from 'react';
import './intro1.css';

const Intro1 = ({ mode }) => {
    return (
        <div className={mode ? "i2" : "i1"}>
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"></div>
                <text className={mode ? "i-name2" : "i-name"}>Sachin Karun</text>
                <text className={mode ? "i-desc2" : "i-desc"}>App Developer • Programmer • Software Engineer</text>
        </div>
    )
}

export default Intro1