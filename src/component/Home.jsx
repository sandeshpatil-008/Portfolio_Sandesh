import React,{useContext} from 'react';
import './Home.css'
import FloatingDiv from './FloatingDiv';
import Github from '../img/github.png'
import LinkedIn from '../img/linkedin.png'
import Instagram from '../img/instagram.png'
import Vector1 from '../img/Vector1.png'
import Vector2 from '../img/Vector2.png'
import boy from '../img/boy.png'
import thumbup from '../img/thumbup.png'
import crown from '../img/crown.png'
import glassesimoji from '../img/glassesimoji.png'
import { themeContext } from './Context';
import { motion } from 'framer-motion';

const Home = () => {

    const transition = {duration:2,type:'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    
    return (
        <>
            <div className="intro">
                <div className="i-left">
                    <div className="i-name">
                        <span style={{color:darkMode? 'white':'',}}>Hy! I Am</span>
                        <span>Sandesh Patil</span>                        
                        <span>Frontend and Backend Developer in  designing and development,producting the Quality work </span>
                    <a>< button className='button i-button'>Hire me</button></a>
                    </div>

                    <div className="i-icons">
                        <a href="https://github.com/sandeshpatil-008">
                        <img src={Github} alt=""/>
                        </a>
                        <a href="https://www.linkedin.com/in/sandesh-patil-ab8276239">
                        <img src={LinkedIn} alt=""/>
                        </a>
                        <a href="https://instagram.com/sandeshpatil008?igshid=YmMyMTA2M2Y=">
                        <img src={Instagram} alt=""/>
                        </a>
                    </div>
                </div>
                <div className='i-right'>
                <img src={Vector1} alt=""/>
                <img src={Vector2} alt=""/>
                <img src={boy} alt=""/>
                <motion.img 
                initial={{left:'-36%'}}
                whileInView={{left:'-24%'}}
                transition={transition}
                src={glassesimoji} alt=""/>

                <motion.div
                initial={{top:'20%',left:'-74%'}}
                whileInView={{left:'58%'}}
                transition={transition}
                style={{top:"-4%",left:"4%"}}>
                    <FloatingDiv image={crown} txt1="Frontend" txt2="Developer"/>
                </motion.div>
                <motion.div
                initial={{left:'9rem',top:'23.5rem'}}
                whileInView={{left:'0rem'}}
                transition={transition}
                style={{top:"67%",left:"3%"}}>
                    <FloatingDiv image={thumbup} txt1="Backend" txt2="Developer"/>
                </motion.div>
                {/* blur divice */}
                <div className='blur' style={{background:"rgb(238 210 255)"}}></div>
                <div className='blur' style={{background:"#C1F5FF",top:"17rem",width:"21rem",height:"11rem",left:"-9rem"}}></div>
                </div>
            </div>
        </>
    );
};

export default Home;