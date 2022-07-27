import React from 'react';
import './Card.css'
const Card = (props) => {
    return (
        <div className='card'>
            <img className='cardRight' src={props.emoji} alt=""/>
            <span className='cardRight'>{props.heading}</span>
            <span className='cardRight'>{props.detail}</span>
            {/* <button className="c-button" style={{fontFamily:"cursive"}}>Learn More</button> */}
        </div>
    );
};

export default Card;