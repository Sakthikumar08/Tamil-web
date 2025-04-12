import React from 'react';
import { useNavigate } from 'react-router-dom';
import BgImg from '../assets/bg.png'; // Make sure this path is correct
import Navbar from '../components/Navbar';

const Tamiltutorials = () => {
  const navigate = useNavigate();

  const handleNavigate = (level) => {
    navigate(`/${level}`); // Routes to /beginner, /intermediate, /advanced
  };

  return (
    <div
      style={{ backgroundImage: `url(${BgImg})` }}
      className="bg-cover bg-center min-h-screen flex items-center justify-center px-4"
    >
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {/* Beginner Card */}
        <div
          onClick={() => handleNavigate('beginner')}
          className="bg-white bg-opacity-90 p-8 rounded-xl shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Beginner</h2>
          <p className="text-gray-700">
            Start with basic Tamil grammar and simple sentence practice.
          </p>
        </div>

        {/* Intermediate Card */}
        <div
          onClick={() => handleNavigate('intermediate')}
          className="bg-white bg-opacity-90 p-8 rounded-xl shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <h2 className="text-2xl font-bold text-yellow-700 mb-2">Intermediate</h2>
          <p className="text-gray-700">
            Practice moderate-level grammar and usage in conversations.
          </p>
        </div>

        {/* Advanced Card */}
        <div
          onClick={() => handleNavigate('advanced')}
          className="bg-white bg-opacity-90 p-8 rounded-xl shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <h2 className="text-2xl font-bold text-green-700 mb-2">Advanced</h2>
          <p className="text-gray-700">
            Master Tamil with advanced sentence construction and idioms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tamiltutorials;
