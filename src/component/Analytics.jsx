import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Two } from '../assets/Image';

function Analytics() {
  return (
    <div className="flex flex-row items-center justify-center space-x-4 mx-auto px-5 lg:px-10 py-10 lg:py-20   lg:mt-5">
         {/* Image Section */}
     <div className="image-section w-2/5 lg:w-2/5 mt-10 lg:mt-10 flex justify-center lg:mr-10 ">
        <img
          src={Two}
          alt="Hero Section"
          className="w-full max-w-sm lg:max-w-lg"
        />
      </div>
      {/* Text Section */}
      <div className="text-section w-2/5 lg:w-2/5   ">
      <p className='mb-5 uppercase text-teal-400 text-l lg:text-xl'>Analytics</p>
        <h1 className="text-xl lg:text-5xl text-gradient font-bold ">
         Built-In Analytics To<br /> Track Your NFTs
        </h1>
        <p className="mt-4 lg:mt-6 text-lg ">
          Use our built-in analytics dashboard to pull<br /> valuable insight and monitor the value of your <br/> crypto portifolio over time
        </p>
        <div className="flex mt-10">
          <Link
            to="/pricing"
            className="flex items-center justify-center h-12 mainbtn p-4 px-6 bg-indigo-400 text-white shadow-lg hover:bg-teal-300 transition rounded-full ml-10 text-l lg:text-xl"
          >
            VIEW OUR PRICING
          </Link>
          </div>
    </div>
    </div>
  )
}

export default Analytics


  