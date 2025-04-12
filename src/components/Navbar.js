import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black shadow-lg py-4 px-6 text-white font-sans tracking-wide">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-yellow-400 tracking-widest animate-pulse">
          தமிழ் பாரம்பரியம்
        </div>
        <ul className="flex space-x-6 text-lg">
          <li className="hover:text-yellow-400 transition duration-300 ease-in-out hover:scale-105">
            <Link to="/directionary">Dictionary</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-300 ease-in-out hover:scale-105">
            <Link to="/grammar-error">Grammar Error</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-300 ease-in-out hover:scale-105">
            <Link to="/pure-tamil">Pure Tamil</Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-300 ease-in-out hover:scale-105">
            <Link to="/tamil-tutorial">Tamil Tutorial</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
