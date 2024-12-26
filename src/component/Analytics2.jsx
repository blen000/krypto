import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { other } from '../assets/Image';

function Analytics2() {
  return (
        <div className="flex flex-col lg:flex-row items-center justify-center space-x-4 mx-auto px-5 lg:px-10 py-10 lg:py-20 lg:mt-5">
            {/* Text Section */}
                  <div className="text-section w-full lg:w-2/5 text-center lg:text-left flex flex-col">
                  <p className='mb-5 uppercase text-teal-400 text-l lg:text-xl'>Analytics </p>
                    <h1 className="text-2xl lg:text-5xl text-gradient font-bold ">
                     Built-In Analytics To<br /> Track Your NFTs
                    </h1>
                    {/* Image Section for small screen */}
     <div className="image-section w-1/2 mt-10 flex justify-center lg:hidden mx-auto ">
        <img
          src={other}
          alt="Hero Section"
          className="w-full max-w-sm lg:max-w-lg"
        />
      </div>
                    <p className="lg:mt-6 text-sm sm:text-base md:text-lg mt-4">
                      Use our built-in analytics dashboard to pull<br /> valuable insight and monitor the value of your <br/> crypto portifolio over time
                    </p>
                    <div className="flex mt-10 justify-center lg:justify-start">
                      <Link
                        to="/pricing"
                        className="flex items-center justify-center h-12 p-4 px-6 bg-indigo-400 text-white  shadow-lg hover:bg-teal-300 transition rounded-full ml-10 text-l lg:text-xl"
                      >
                        VIEW OUR PRICING
                      </Link>
                      </div>
                </div>
                {/* Image Section for large*/}
     <div className="image-section hidden lg:flex w-full lg:w-2/5 justify-center">
             <img
               src={other}
               alt="Hero Section"
               className="w-3/4 max-w-xs sm:max-w-sm lg:max-w-lg"
             />
           </div>

        </div>
  )
}

export default Analytics2