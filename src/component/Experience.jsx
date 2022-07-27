import React from 'react';
import './Experience.css'

const Experience = () => {

    return (
        <div className='experience' id="experience">
            <div className='achievement achievementRight'>
                <div className='circle'>0.4+</div>
                <span>Years</span>
                <span>Experience</span>
            </div>
            <div className='achievement achievementRight'>
                <div className='circle'>5+</div>
                <span>Completed</span>
                <span>Projects</span>
            </div>
            <div className='achievement'>
                <div className='circle'>0+</div>
                <span>Companies</span>
                <span>Work</span>

            </div>
        </div>
        
    );
};

export default Experience;