import React from 'react'
import Home from './component/Home'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Trust from './component/Trust';
import Analytics from './component/Analytics';
import Analytics2 from './component/Analytics2';
import Testemonial from './component/Testemonial';
import NavBar from './component/NavBar';
import Footer from './component/Footer';

  function App() {
    return (
      <div>
        <NavBar/>
        <Home/>
        <Trust/>
        <Analytics/>
        <Analytics2/>
        <Testemonial/>
        <Footer/>
      </div>
    );
  }

  // color-#050031
export default App