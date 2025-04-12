import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import BgImg from '../assets/bg.png';

const Tamilgrammar = () => {
  const [inputText, setInputText] = useState('');
  const [errorResult, setErrorResult] = useState('');

  const handleChange = (e) => {
    const input = e.target.value;
    setInputText(input);

    // 🔍 Dummy error checking logic – replace with real grammar check
    if (input.includes('அவன் சென்றான் சென்றான்')) {
      setErrorResult('தவறு: "சென்றான்" இருமுறை இடப்பட்டது. ஒரே வார்த்தையை இருமுறை பயன்படுத்தக்கூடாது.');
    } else if (input.trim() !== '') {
      setErrorResult('இவ்வாக்கியத்தில் வெளிப்படையான வழுக்கல் எதுவும் இல்லை.');
    } else {
      setErrorResult('');
    }
  };

  return (
    <div
          style={{ backgroundImage: `url(${BgImg})` }}
          className="bg-cover bg-center min-h-screen  "
        >
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className='pt-[100px]'>
      {/* Input Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-6 mt-6">
        <h2 className="text-2xl font-bold mb-4 text-yellow-800">Enter a Tamil Sentence</h2>
        <textarea
          value={inputText}
          onChange={handleChange}
          placeholder="உங்கள் தமிழ்ச் சொற்றொடரை இங்கே எழுதுங்கள்..."
          className="w-full h-32 p-4 border border-yellow-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      {/* Grammar Error Output */}
      <div className="max-w-4xl mx-auto mt-8 bg-white shadow-md rounded-xl p-6">
        <h3 className="text-xl font-semibold text-yellow-700 mb-2">Grammar Check Result</h3>
        <p className="text-gray-700 text-lg">
          {errorResult || 'சரிபார்ப்பு முடிவுகள் இங்கே தோன்றும்.'}
        </p>
      </div>
      </div>
    </div>
  );
};

export default Tamilgrammar;
