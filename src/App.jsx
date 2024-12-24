import React from 'react'
import Home from './component/Home'
import { Routes, Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import About from './component/About';
import Pricing from './component/Pricing';
import BuyNFT from './component/BuyNFT';
import Contact from './component/Contact';
import DaySeven from './component/DaySeven';
import Viewmore from './component/Viewmore';

  function App() {
    return (
      <div>
        <NavBar/>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/BuyNFT" element={<BuyNFT />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/DaySeven" element={<DaySeven />} />
          <Route path="/Viewmore" element={<Viewmore />} />
        </Routes>
        <Footer/>
        
      </div>
    );
  }

  // color-#050031
export default App