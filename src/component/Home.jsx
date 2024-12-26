import React from "react";
import { Link } from "react-router-dom";
import Trust from "./Trust";
import Analytics from "./Analytics";
import Analytics2 from "./Analytics2";
import Testemonial from "./Testemonial";
import Video from "./Video";
import { hero } from "../assets/Image";

function Home() {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center mx-auto px-6 lg:px-12 py-12 lg:py-20 mt-20 lg:mt-20 custom-bg">
        {/* Text Section */}
        <div className="lg:w-2/5 mt-10 lg:mt-0 text-center lg:text-left">
          <h1 className="text-3xl lg:text-6xl font-bold text-gradient font-mono">
            Discover And <br /> Collect Rare <br /> NFTs
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            The most secure marketplace for buying and selling unique crypto assets.
          </p>
          <div className="flex justify-center lg:justify-start mt-10 gap-4">
            <Link
              to="/BuyNFT"
              className="flex items-center justify-center h-12 px-6 bg-indigo-500 text-white rounded-full shadow-lg hover:bg-teal-300 transition"
            >
              BUY NFTs
            </Link>
            <Link
              to="/BuyNFT"
              className="flex items-center justify-center h-12 px-6 border border-teal-300 rounded-full hover:bg-teal-300 transition"
            >
              SELL NFTs
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-2/5 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <img
            src={hero}
            alt="Hero Section"
            className="w-3/4 lg:w-full max-w-xs lg:max-w-md"
          />
        </div>
      </div>

      {/* Additional Sections */}
      <Trust />
      <Analytics />
      <Analytics2 />
      <Testemonial />
      <Video />
    </>
  );
}

export default Home;
