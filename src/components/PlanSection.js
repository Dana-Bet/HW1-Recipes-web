import React from 'react';
import '../styles/PlanSection.css'; 
import planBg from '../img/planBg.jpg';

export default function PlanSection() {
    return (
        <div className="section plan">
            <div className='image-container'>
                <img className='cus_img' src={planBg} alt="" /> 
                <div className='overlay'>
                    <h1>Plan Your Meal</h1>
                </div>
            </div>
            <div className="content">
                <div className="column">
                    <div className="row">
                    <h2 className="row-title">Appetizers</h2>
                        <div className="dish-container">

                            {/* Add more recipes as needed */}
                        </div>
                    </div>
                    <div className="row">
                        <h2 className="row-title">Starters</h2>
                        <p>Content for starters goes here.</p>
                    </div>
                    <div className="row">
                        <h2 className="row-title">Main dishes</h2>
                        <p>Content for main dishes goes here.</p>
                    </div>
                    <div className="row">
                        <h2 className="row-title">Desserts</h2>
                        <p>Content for desserts goes here.</p>
                    </div>
                </div>
                <div className="column">
                    <h2>Column 2</h2>
                    <p>Content for column 2 goes here.</p>
                </div>
            </div>           
        </div>
    );
}