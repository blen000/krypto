import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a23] text-white py-10 border-t border-t-blue-900 border-b-1">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Section 1 - Logo */}
        <a href="/home" >
            <h1 className="text-3xl ml-4 lg:ml-40" >KRYPTO</h1>
        </a>
        {/* Section 2 - Navigation */}
        <div>
          <h3 className="font-semibold mb-4">krypto</h3>
          <ul className="space-y-2">
          <a href="/home" ><li>Home</li></a>
          <a href="/About" ><li>About</li></a>
          <a href="/Contact" ><li>Contact</li></a>
          <a href="/BuyNFT" ><li>Buy NFT</li></a>
          </ul>
        </div>

        {/* Section 3 - Market */}
        <div>
          <h3 className="font-semibold mb-4">Market</h3>
          <ul className="space-y-2">
            <li>Browse NFTs</li>
            <li>Buy NFTs</li>
            <li>Sell NFTs</li>
          </ul>
        </div>

        {/* Section 4 - Contact */}
        <div>
          <h3 className="font-semibold mb-4">contact</h3>
          <ul className="space-y-2">
            <li>Email</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-10 text-center">
        <h3 className="font-semibold mb-4">join our newsletter</h3>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Email Address"
            className="rounded-l-full px-4 py-2 w-64 outline-none bg-indigo-600"
          />
          <button className="bg-[#00c4ff] text-[#0a0a23] rounded-r-full px-6 py-2 font-bold">
            SUBMIT
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
