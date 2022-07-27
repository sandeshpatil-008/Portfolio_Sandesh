import React,{useContext}from "react";
import "./Portfolio.css";
import "swiper/css";
import Netflix from "../img/netflix-clone.png"
import Expence from '../img/exp.png';
import Folio from '../img/portfolio.png'
import Gym from '../img/gym.png';
import Todo from '../img/todo.png';
import User from "../img/user.png"
import { themeContext } from "./Context";

const Portfolio = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color:darkMode? 'white':'',}}>Recent Projects</span><br/>
      <span>Portfolio</span>
      <div className="blur c-blur1" style={{background:"var(--purple)"}}></div>

      {/* slider */}
      <div className="midlePortfolio">
        <div>
        <a href="https://github.com/sandeshpatil-008/Portfolio_Sandesh" className="anchore">
          <img src={Folio} alt="" height={175}/>
          <p className="portHeading">Personal Portfolio</p>
                    </a>
        </div>
        <div>
        <a href="https://github.com/sandeshpatil-008/Netflix-Clone" className="anchore">
          <img src={Netflix} alt="" />
          <p className="portHeading">Netflix Clone</p>
          </a>
        </div>
        <div>
        <a href="https://github.com/sandeshpatil-008/Gym" className="anchore">
          <img src={Expence} alt="" height={175}/>
          <p className="portHeading">Expense Tracker</p>
          </a>
        </div>
        <div>
          <a href="https://github.com/sandeshpatil-008/Gym" className="anchore">
          <img src={Gym} alt="" height={175}/>
          <p className="portHeading">Gym Site</p>
          </a>
        </div>
        <div>
        <a href="https://github.com/sandeshpatil-008/To_Do_App" className="anchore">
          <img src={Todo} alt="" height={175}/>
          <p className="portHeading">To Do App</p>
          </a>
        </div>
        <div>
        <a href="https://github.com/sandeshpatil-008/User_Information" className="anchore">
          <img src={User} alt="" height={175}/>
          <p className="portHeading">User information</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
