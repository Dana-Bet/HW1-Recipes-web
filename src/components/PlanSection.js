import React from 'react';
import '../styles/PlanSection.css'; 
import planBg from '../img/planBg.jpg';

export default function PlanSection() {
    return (
        <div className="container">
            <div className='image-container'>
                <img src={planBg} alt="" /> 
                <div className='overlay'>
                    <h1>Plan Your Meal</h1>
                </div>
            </div>
        </div>
    );
}