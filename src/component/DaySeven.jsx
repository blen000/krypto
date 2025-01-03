import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import { e1 } from '../assets/Image';

const DaySeven = () => {
    const [spendAmount, setSpendAmount] = useState(0);
    const [receiveAmount, setReceiveAmount] = useState(0);
  
    const handleSpendChange = (e) => {
      setSpendAmount(e.target.value);
      // Assuming a placeholder conversion rate for simplicity
      const conversionRate = 3388.40; // Replace with dynamic rate if needed
      setReceiveAmount((e.target.value / conversionRate).toFixed(6));
    };
  
    return (
      <div className="min-h-screen text-white pt-40">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Buy NFT</h1>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/*         Hot Cryptos Section */}
            <div className="bg-[#1E1A55] rounded-lg p-6 lg:pt-10">
              <h2 className="text-2xl font-semibold mb-4">Hot Cryptos</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">BTC</span>
                  <span className="text-lg">$97,252.32</span>
                  <span className="text-red-500">-3.82%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">ETH</span>
                  <span className="text-lg">$3,388.40</span>
                  <span className="text-red-500">-7.68%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">BNB</span>
                  <span className="text-lg">$674.47</span>
                  <span className="text-red-500">-3.60%</span>
                </div>
              </div>
            </div>
  
            {/* Buy Section */}
            <div className="bg-[#1E1A55] rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Buy</h2>
  
              <div className="space-y-6">
                <div>
                  <label htmlFor="spend" className="block text-sm font-medium mb-2">
                    Spend
                  </label>
                  <div className="flex items-center bg-[#7D7ED6] rounded-lg px-4 py-2">
                    <input
                      type="number"
                      id="spend"
                      value={spendAmount}
                      onChange={handleSpendChange}
                      className="bg-transparent outline-none text-white w-full"
                      placeholder="0"
                    />
                    <span className="ml-2 text-gray-400">ETB</span>
                    
                  </div>
                </div>
  
                <div>
                  <label htmlFor="receive" className="block text-sm font-medium mb-2">
                    Receive
                  </label>
                  <div className="flex items-center bg-[#7D7ED6] rounded-lg px-4 py-2">
                    <input
                      type="text"
                      id="receive"
                      value={receiveAmount}
                      readOnly
                      className="bg-transparent outline-none text-white w-full"
                    />
                    <span className="ml-2 text-gray-400">ETH</span>
                  </div>
                  <div>
                  <button className="flex flex-row justify-center mt-10 mx-auto border py-2 px-12 rounded-full hover:bg-teal-300">BUY</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-white min-h-screen py-10 mx-4 lg:mx-60">
          {/* Top Section */}
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <img
                  src={e1}
                  alt="Ethereum Logo"
                  className="h-8 w-8"
                />
                <h1 className="text-2xl font-semibold">ETH</h1>
              </div>
              <h2 className="text-4xl font-bold">$3,572.33</h2>
              <h3 className="text-green-500 text-lg">3.77%</h3>
            </div>
            <div className="flex space-x-4">
              <Link 
              to="/BuyNFT" 
              className="px-4 py-2 text-sm rounded-lg bg-[#7D7ED6] hover:bg-teal-400 focus:outline-none">
                1D
                </Link>
                <Link 
              to="/DaySeven" 
              className="px-4 py-2 text-sm rounded-lg bg-[#7D7ED6] hover:bg-teal-400 focus:outline-none">
                7D
                </Link>
              {/* {["1D", "7D", "1M", "3M", "1Y"].map((label) => (
                <button
                  key={label}
                  className="px-4 py-2 text-sm rounded-lg bg-[#7D7ED6] hover:bg-teal-400 focus:outline-none"
                >
                  {label}
                </button>
                // <button>hell</button>
              ))} */}
            </div>
          </div>
  
          {/* Chart Section */}
          <div className="my-10">
  <div className="h-60 bg-[#1E1A55] p-4 rounded-lg flex">
    <div className="w-full h-full relative">
      <svg className="h-full w-full">
        {/* Compact graph with more ups and downs */}
        <polyline
          points="0,120 20,100 40,130 60,80 80,110 100,90 120,140 140,70 160,110 180,50 200,90 220,40 240,100 260,60 280,120 300,70 320,130 340,60 360,110 380,40 400,80 420,50 440,90 460,60 480,100"
          fill="none"
          stroke="teal"
          strokeWidth="2"
        />
      </svg>
    </div>
  </div>
</div>

  
          {/* Market Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-semibold">Markets</h2>
              <div className="mt-4 space-y-2">
                <p>
                  <span className="font-semibold">Popularity:</span> #2
                </p>
                <p>
                  <span className="font-semibold">Market Cap:</span>  $425.56B
                </p>
                <p>
                  <span className="font-semibold">Volume:</span> $70.86B
                </p>
                <p>
                  <span className="font-semibold">Circulation Supply:</span>{" "}
                  120.45M
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Conversion Tables</h2>
              <div className="mt-4 space-y-2">
                <p>
                  <span className="font-semibold">7 days exchange rate:</span>{" "}
                  <span className="text-red-500">-10.02%</span>
                </p>
                <p>
                  <span className="font-semibold">24-hour exchange rate:</span>{" "}
                  <span className="text-green-500">+3.77%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    );
  };

export default DaySeven;