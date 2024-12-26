import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a23] text-white py-10 border-t border-t-blue-900">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {/* Section 1 - Logo and Tag */}
        <div className="text-center col-span-2 sm:col-span-1">
          <a href="/home" className="block">
            <h1 className="text-3xl font-bold">KRYPTO</h1>
          </a>
          <p className="mt-2">Your go-to marketplace for NFTs.</p>
        </div>

        {/* Section 2 - Navigation */}
        <div className="text-center">
          <h3 className="font-semibold mb-4">Krypto</h3>
          <ul className="space-y-2">
            <li><a href="/home">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/BuyNFT">Buy NFT</a></li>
          </ul>
        </div>

        {/* Section 3 - Market */}
        <div className="text-center">
          <h3 className="font-semibold mb-4">Market</h3>
          <ul className="space-y-2">
            <li>Browse NFTs</li>
            <li>Buy NFTs</li>
            <li>Sell NFTs</li>
          </ul>
        </div>

        {/* Section 4 - Contact */}
        <div className="text-center">
          <h3 className="font-semibold mb-4">Contact</h3>
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
        <h3 className="font-semibold mb-4">Join Our Newsletter</h3>
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
