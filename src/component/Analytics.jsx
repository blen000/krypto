import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Two } from '../assets/Image';

function Analytics() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mx-auto px-5 lg:px-10 py-10 lg:py-20 space-y-10 lg:space-y-0 lg:space-x-10">
      {/* Text Section */}
      <div className="text-section w-full lg:w-2/5 text-center lg:text-left flex flex-col">
        <p className="mb-5 uppercase text-teal-400 text-sm sm:text-base lg:text-xl">
          Analytics
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient">
          Built-In Analytics To<br /> Track Your NFTs
        </h1>

        {/* Image Section for Small Screens */}
        <div className="image-section flex justify-center w-1/2  lg:hidden my-6 mx-auto">
          <img
            src={Two}
            alt="Hero Section"
            className="w-3/4 max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>

        <p className="lg:mt-6 text-sm sm:text-base md:text-lg">
          Use our built-in analytics dashboard to pull<br /> valuable insights and monitor the value of your
          <br /> crypto portfolio over time.
        </p>
        <div className="flex justify-center lg:justify-start mt-6 lg:mt-10">
          <Link
            to="/pricing"
            className="flex items-center justify-center h-10 sm:h-12 mainbtn px-5 sm:px-6 bg-indigo-400 text-white shadow-lg hover:bg-teal-300 transition rounded-full text-sm sm:text-base md:text-lg"
          >
            VIEW OUR PRICING
          </Link>
        </div>
      </div>

      {/* Image Section for Large Screens */}
      <div className="image-section hidden lg:flex w-full lg:w-2/5 justify-center">
        <img
          src={Two}
          alt="Hero Section"
          className="w-3/4 max-w-xs sm:max-w-sm lg:max-w-lg"
        />
      </div>
    </div>
  );
}

export default Analytics;
// import { other } from '../assets/Image';
