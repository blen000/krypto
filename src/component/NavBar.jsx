import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#050031] w-full fixed top-0 z-40 shadow-md border-b border-blue-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex items-center justify-between h-24">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link
            to="/Home"
            className="text-gradient text-3xl font-bold uppercase text-white"
          >
            Krypto
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/Home"
            className="text-white text-lg hover:text-purple-800 uppercase font-medium transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/About"
            className="text-white text-lg hover:text-purple-800 uppercase font-medium transition duration-300"
          >
            About
          </Link>
          <Link
            to="/Pricing"
            className="text-white text-lg hover:text-purple-800 uppercase font-medium transition duration-300"
          >
            Pricing
          </Link>
          <Link
            to="/Contact"
            className="text-white text-lg hover:text-purple-800 uppercase font-medium transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/BuyNFT"
            className="text-white text-lg hover:text-purple-800 uppercase font-medium transition duration-300"
          >
            Buy NFTs
          </Link>
          <Link
            to="/Viewmore"
            className="text-white text-lg hover:text-purple-800 uppercase font-medium transition duration-300"
          >
            View More
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="sr-only">Toggle Menu</span>
          <svg
            className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-[#050031] w-full absolute top-24 left-0 z-30`}
      >
        <div className="flex flex-col items-center gap-6 py-4">
          <Link
            to="/Home"
            className="text-white text-lg uppercase"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/About"
            className="text-white text-lg uppercase"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/Pricing"
            className="text-white text-lg uppercase"
            onClick={closeMenu}
          >
            Pricing
          </Link>
          <Link
            to="/Contact"
            className="text-white text-lg uppercase"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            to="/BuyNFT"
            className="text-white text-lg uppercase"
            onClick={closeMenu}
          >
            Buy NFTs
          </Link>
          <Link
            to="/Viewmore"
            className="text-white text-lg uppercase"
            onClick={closeMenu}
          >
            View More
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
