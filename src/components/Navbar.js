import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative bg-black text-white font-sans tracking-wide">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 py-4">
        {/* Icon Button */}
        <button
          onClick={toggleMenu}
          className="text-yellow-400 text-2xl focus:outline-none z-50"
        >
          <i className={`fa ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>

        {/* Logo */}
        <div className="text-xl font-bold text-yellow-400 tracking-widest">
        அறிவொளி
        </div>
      </div>

      {/* Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40 shadow-lg`}
      >
        <ul className="mt-20 space-y-6 px-6 text-lg">
          <li className="hover:text-yellow-400 transition duration-300">
            <Link to="/directionary" onClick={toggleMenu}>
            அகராதி
            </Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-300">
            <Link to="/grammar-error" onClick={toggleMenu}>
            தமிழ் இலக்கண சரிபார்ப்பு
            </Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-300">
            <Link to="/pure-tamil" onClick={toggleMenu}>
            தமிழ் மொழிபெயர்பு கருவி
            </Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-300">
            <Link to="/tamil-tutorial" onClick={toggleMenu}>
            தமிழ் கல்வி கணையம்
            </Link>
          </li>
          <li className="relative group hover:text-yellow-400 transition duration-300">
  <div className="cursor-pointer">வேந்தர் வம்சம்</div>

  {/* Submenu */}
  <ul className="absolute left-full top-0 mt-0 ml-2 bg-black  text-white text-sm w-48 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transform -translate-x-4 transition-all duration-300 z-50">
    <li className="hover:bg-yellow-400 hover:text-black p-2">
      <Link to="/cheradynasty" onClick={toggleMenu}>
      சேரர் வம்சம்
      </Link>
    </li>
    <li className="hover:bg-yellow-400 hover:text-black p-2">
      <Link to="/choradynasty" onClick={toggleMenu}>
      சோழர் வம்சம்
      </Link>
    </li>
    <li className="hover:bg-yellow-400 hover:text-black p-2">
      <Link to="/pandyadynasty" onClick={toggleMenu}>
      பாண்டியர் வம்சம்
      </Link>
    </li>
  </ul>
</li>
          <li className="hover:text-yellow-400 transition duration-300">
            <Link to="/tamiltradition" onClick={toggleMenu}>
            தமிழர் பாரம்பரியம்
            </Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-300">
            <Link to="/tamilsanghaliterature" onClick={toggleMenu}>
            தமிழ் சங்க இலக்கியங்கள்
            </Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-300">
            <Link to="/tamilinscriptions" onClick={toggleMenu}>
            தமிழர் கல்வெட்டுகள்
            </Link>
          </li>
          <li className="hover:text-yellow-400 transition duration-300">
            <Link to="/tamilculture" onClick={toggleMenu}>
            தமிழர் கலாச்சாரம்
            </Link>
          </li>
         
        </ul>
      </div>

      {/* Dim Background */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
