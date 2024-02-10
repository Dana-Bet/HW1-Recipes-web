/////////// Template (This is our main page, what changes is only the components) //////////////

import React, { useState } from 'react';
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import PlanMeal from "./pages/Plan";
import Share from "./pages/Share";
import Shopping from "./pages/Shopping";

function App() {
  const [currentPage, setCurrentPage] = useState('Home'); // Base state in the main page

  // Function for changing the current component change
  const handlePageChange = (pageName) => {
    setCurrentPage(pageName);
  };

  return (
    <div>
      <NavBar currentPage={currentPage} onPageChange={handlePageChange} />
      <div className="container main">
        {currentPage === 'Home' && <Home />}
        {currentPage === 'Recipes' && <Recipes />}
        {currentPage === 'Plan Meal' && <PlanMeal />}
        {currentPage === 'Share' && <Share />}
        {currentPage === 'Shopping' && <Shopping />}
      </div>
      <div>Footer</div>
    </div>
  );
}

export default App;

////////////////////////// End Of Template /////////////////////////////