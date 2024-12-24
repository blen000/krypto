import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Trust from './Trust';
import Analytics from './Analytics';
import Analytics2 from './Analytics2';
import Testemonial from './Testemonial';
import Video from './video';
import { hero } from '../assets/Image';

function Home() {
  return (
    <>
    <div className="flex flex-row items-center justify-center space-x-4 mx-auto px-5 lg:px-10 py-10 lg:py-20 mt-20  lg:mt-5 custom-bg">
      {/* Text Section */}
      <div className="text-section w-2/5 lg:w-2/5 mt-10 lg:mt-0">
        <h1 className="text-4xl lg:text-6xl font-bold text-gradient font-mono">
          Discover And <br /> Collect Rare <br /> NFTs
        </h1>
        <p className="mt-4 lg:mt-6 text-lg ">
          The most secure marketplace for buying<br /> and selling unique crypto assets.
        </p>
        <div className="flex mt-20">
          <Link
            to="/BuyNFT"
            className="flex items-center justify-center h-12 mainbtn p-4 px-6 bg-indigo-400 text-white rounded-full shadow-lg hover:bg-teal-300 transition"
          >
            BUY NFTs
          </Link>
          <Link
            to="/BuyNFT"
            className="flex items-center justify-center h-12 mainbtn p-4 px-6 border border-teal-300 rounded-full text-white shadow-lg ml-4 hover:bg-teal-300 transition"
          >
            SELL NFTs
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="image-section w-2/5 lg:w-2/5 mt-10 lg:mt-0 flex justify-center lg:mr-10 ">
        <img
          src={hero}
          alt="Hero Section"
          className="w-full max-w-sm lg:max-w-lg"
        />
      </div>
    </div>
        <Trust/>
        <Analytics/>
        <Analytics2/>
        <Testemonial/>
        <Video/>
        
    </>
  );
}

export default Home;
