import React, { useState ,useContext} from 'react';
import './Navbar.css';
import Toggle from './Toggle';
import { Link } from 'react-scroll';
import * as Icon from 'react-bootstrap-icons'
import { themeContext } from './Context';

const Navbar = () => {

  const [click, setclick] = useState(false);
  const handelClick = () => setclick(!click);

  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='n-wrapper'>
      <div className='n-left'>
        {/* <div className='n-name'>Sandesh</div> */}
        <Toggle />
      </div>
      <div className='n-right' >
        
          <ul  className={click ? "n-list show" : "n-list"} style={{color:darkMode? 'white':'',}}>
            <li className='n-list1' >
              <Link activeClass="active" to="Navbar" spy={true} smooth={true} >
                Home
              </Link>
            </li>
            <li className='n-list1'>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li >
            <li className='n-list1'>
              <Link to="experience" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
          </ul>
          <div className='hamBurger' onClick={handelClick}>
            {click ? (<Icon.XLg size={20} className="xlg"  />) :
              <Icon.List size={22} className="xlg" />
            }
          </div>
        
        <Link className='n1' to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact me</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;