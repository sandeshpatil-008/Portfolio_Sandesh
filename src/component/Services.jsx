import React,{useContext} from 'react';
import './Services.css';
import Card from './Card';
import heartemoji from '../img/heartemoji.png'
import glasses from '../img/glasses.png'
import humble from '../img/humble.png'
import Resume from './Sandesh_Sambhaji Patil_cv.pdf'
import { themeContext } from './Context';
import { motion } from 'framer-motion';


const Services = () => {

    const transition = {duration:1,type:'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='services'>
            <div className="awesome">
                <span style={{color:darkMode? 'white':'',}}>My Awesome</span>
                <span>Services</span>
                <span>I do Html5,Css3,JavaScript,React in Frontend Developer<br />Use NodeJs ExpressJs MongoDb in Backend.</span>
                <a href={Resume} download>
                    <button className='button s-button'>Download Cv</button>
                </a>
            </div>

            <div className="cards">
                <motion.div
                initial={{left:'14rem'}}
                whileInView={{left:'30rem'}}
                transition={transition}
                
                style={{ left: "40rem" }}>
                    <Card emoji={heartemoji}
                        heading={'Frontend Developer'}
                        detail={"Html5 Css3 JavaScript ReactJs"} />
                </motion.div>
                <motion.div 
                initial={{left:'-4rem'}}
                whileInView={{left:'10rem'}}
                transition={transition}
                
                style={{ top: "12rem", left: "-1rem" }}>
                    <Card emoji={glasses}
                        heading={'Backend Developer'}
                        detail={"JavaScript NodeJs ExpressJs MongoDb"} />
                </motion.div>
                <motion.div
                initial={{left:'14rem'}}
                whileInView={{left:'30rem'}}
                transition={transition}
                
                style={{ top: "19rem", left: "40rem" }}>
                    <Card emoji={humble}
                        heading={'FullStack Developer'}
                        detail={"I am a fullstack developer and I can make a good prospect"} />
                </motion.div>
                <div className='blur' style={{ background: "#C1F5FF", top: "17rem", width: "21rem", height: "11rem", left: "-25rem" }}></div>
                
                <div className='blur' style={{ background: "var(--purple)", top: "17rem", width: "21rem", height: "11rem", left: "30rem" }}></div>
            </div>

        </div>
    );
};

export default Services;