///////////////////////// Template ////////////////////////

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom"

import NavBar from "./components/Navbar";

// import Home from "./pages/Home";
// import Recipe from "./pages/Recipe";
// import Share from "./pages/Share";
// import Shopping from "./pages/Shopping"
// import Nutrition from "./pages/Nutrition"

import HomeSection from "./components/HomeSection";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <div className="container main"><HomeSection /></div>
      </div>

      {/* This should work but doesnt 
        <Router>
        <NavBar />
        <div className="container main">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Recipe" element={<Recipe />} />
            <Route path="/Share" element={<Share />} />
            <Route path="/Shopping" element={<Shopping />} />
            <Route path="/Nutrition" element={<Nutrition />} />
          </Routes>
        </div>
      </Router> */}

      {/* ///////////////////////// End Of Template //////////////////////// */}

      {/* This is the end of the html page */}

    </>
  )
}

export default App;
