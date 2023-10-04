import React from 'react'
import './About.css';
import Ceci from '../assets/Ceci.png'

const About=({ persona}) => {
    return (
        <div className='contenedor'>
            <div className='caja'>
                <img src={Ceci} className='Picture' />
                <h4>{persona}</h4>
            </div>
        </div>
    )
}



export default About;