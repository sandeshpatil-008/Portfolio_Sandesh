import React from 'react';
import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Wave from '../img/wave.png'

const Footer = () => {

    return (
        <div className='footer' id='footer'>
            <img src={Wave} alt="" style={{width:"100%"}}/>
            <div className="f-content">
                <a href='mailto:sandeshpatil0008@gmail.com' style={{color:"white",textDecoration:"none"}}>
                <span>sandeshpatil0008@gmail.com</span>
                </a>
                <div className="f-icons">
                    <a href='https://instagram.com/sandeshpatil008?igshid=YmMyMTA2M2Y='>
                    <Insta className="footerIcon"color="white" size="3rem"/>
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100008023876305'>
                    <Facebook className="footerIcon" color="white" size="3rem"/>
                    </a>
                    <a href='https://github.com/sandeshpatil-008'>
                    <Github color="white" size="3rem"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;