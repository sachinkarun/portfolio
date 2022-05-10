import React, { useContext } from 'react';
import './Contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Linkedin from '../../img/linkedin.png';
import { ThemeContext } from '../../Context';

const Contact = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="c">
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's get connected</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +91 9893420288
                        </div>
                        {darkMode ? (
                            <>
                                <div className="c-info-item">
                                    <img src={Email} alt="" className="c-icon" />
                                    <a href={"mailto: sachinkarun02@gmail.com"} style={{textDecoration:'none', color:"#fff"}}>sachinkarun02@gmail.com</a>
                                </div>
                                <div className="c-info-item">
                                    <img src={Linkedin} alt="" className="c-icon" />
                                    <a href={"https://linkedin.com/in/sachin-karun"} style={{textDecoration:'none', color:"#fff"}}>linkedin.com/in/sachin-karun</a>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="c-info-item">
                                    <img src={Email} alt="" className="c-icon" />
                                    <a href={"mailto: sachinkarun02@gmail.com"} style={{textDecoration:'none', color:"black"}}>sachinkarun02@gmail.com</a>
                                </div>
                                <div className="c-info-item">
                                    <img src={Linkedin} alt="" className="c-icon" />
                                    <a href={"https://linkedin.com/in/sachin-karun"} style={{textDecoration:'none', color:"black"}}>linkedin.com/in/sachin-karun</a>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
