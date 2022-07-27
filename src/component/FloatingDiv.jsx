import React from 'react';
import './FloatingDiv.css'

const FloatingDiv = (props) => {
    return (
        <div className='floatingDiv'>
            <img src={props.image} alt=""/>
            <span>
                {props.txt1}
                <br/>
                {props.txt2}
            </span>
        </div>
    );
};

export default FloatingDiv;