import React from 'react';
import '../styles/PlanSection.css'; 
import planBg from '../img/planBg.jpg';
import app1 from '../img/recipe_img/appetiser1.png';
import app2 from '../img/recipe_img/appetiser2.png';
import app3 from '../img/recipe_img/appetiser3.png';
import star1 from '../img/recipe_img/Arancini.png';
import star2 from '../img/recipe_img/Pasta salad.png';
import main1 from '../img/recipe_img/Dijon salmon and lemon.png';
import main2 from '../img/recipe_img/Seasoned chicken.png';
import dess1 from '../img/recipe_img/Chocolate Souffle.png';
import dess2 from '../img/recipe_img/Apple pie.png';

// Recipe component
const Recipe = ({ name, imageUrl }) => {
    return (
        <div className="recipe">
            <h3>{name}</h3>
            <img src={imageUrl} alt={name} className="recipe-image" />
            <button className="add-to-meal">+</button>
        </div>
    );
};

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
                            <Recipe name="Creamy bread" imageUrl={app1}/>
                            <Recipe name="Cheese plat" imageUrl={app2}/>
                            <Recipe name="Mini pie" imageUrl={app3}/>
                            {/* Add more recipes as needed */}
                       </div>
                    </div>
                    <div className="row">
                        <h2 className="row-title">Starters</h2>
                        <div className="dish-container">
                            <Recipe name="Arancini" imageUrl={star1}/>
                            <Recipe name="Pasta salad" imageUrl={star2}/>
                            {/* Add more recipes as needed */}
                       </div>
                    </div>
                    <div className="row">
                        <h2 className="row-title">Main dishes</h2>
                        <div className="dish-container">
                            <Recipe name="Dijon salmon&lemon" imageUrl={main1}/>
                            <Recipe name="Seasoned chicken" imageUrl={main2}/>
                            {/* Add more recipes as needed */}
                       </div>
                    </div>
                    <div className="row">
                        <h2 className="row-title">Desserts</h2>
                        <div className="dish-container">
                            <Recipe name="Chocolate Souffle" imageUrl={dess1}/>
                            <Recipe name="Apple pie" imageUrl={dess2}/>
                            {/* Add more recipes as needed */}
                       </div>
                    </div>
                </div>
                <div className="column">
                    <h2 className="row-title">Your Meal</h2>
                    <div className="table-section">
                        <table>
                            <thead>
                                <tr>
                                    <th>Recipe</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Add selected recipes here */}
                                <tr>
                                    <td>Creamy bread</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Chocolate Souffle</td>
                                    <td>1</td>
                                </tr>
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </div>
                    <button className="create-list-button">Create Shopping List</button>
                </div>
            </div>           
        </div>
    );
}