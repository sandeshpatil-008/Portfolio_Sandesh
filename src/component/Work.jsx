import React,{useContext} from 'react';
import './Work.css'
import Node from '../img/node.png'
import Css from '../img/css.png'
import Html from '../img/html.png'
// import Facebook from '../img/Facebook.png'
import { themeContext } from './Context';
import { motion } from 'framer-motion';
import React1 from '../img/react.png'
import Express from '../img/express.png'

const Work = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <>
          <div className='works' id='experience'>
          <div className="awesome newOne">
                <span style={{color:darkMode? 'white':'',}}>Use of All these</span>
                <span>FrameWork & Language</span>
                <span className='work1'>
                A good website is Not only rich UI but also the interaction smiplicity & responsiveness. We will make to sure to deliver the best product for you Good web design is more than an About Us and a Contact page.Its how you communicate.It's how you show of your product and capabilities and most importantly.It's how you convert leads.If you are going to redo or just planning for a new one.My team of web design take you on this journeythe right way.
                </span>
                    <a><button className='button s-button'>Hire Me</button></a>
                <div className='blur' style={{ background: "#C1F5FF", top: "10rem", width: "21rem", height: "11rem", left: "50rem" }}></div>

                    <div className='blur' style={{ background: "var(--purple)", top: "15rem", width: "21rem", height: "11rem", left: "-3rem" }}></div>
                
            </div>
            <div className='w-right'>
                <motion.div 
                initial={{rotate:180}}
                whileInView={{rotate:0}}
                viewport={{margin:'-40px'}}
                transition={{duration:7,type:'spring'}}
                className='w-mainCircle'>
                    <div className="w-secCircle " >
                        <img src={Node} alt="" width={"140px"}/>
                    </div>
                    <div className="w-secCircle ">
                        <img src={Html} alt="" width={"140px"}/>
                    </div>
                    <div className="w-secCircle " >
                        <img src={React1} alt="" width={"140px"}/>
                    </div>
                    <div className="w-secCircle ">
                        <img src={Css} alt=""width={"100px"}/>
                    </div>
                    <div className="w-secCircle ">
                        <img src={Express} alt="" width={"140px"}/>
                    </div>
                   
                </motion.div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
            </div>  
        </>
    );
};

export default Work;