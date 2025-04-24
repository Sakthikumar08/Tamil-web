import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import BgImg from '../assets/bg.png';
import axios from 'axios'; // Make sure axios is installed

const PuretamilConvert = () => {
  const [sentence, setSentence] = useState('');
  const [explanation, setExplanation] = useState('');

  const handleInputChange = async (e) => {
    const input = e.target.value;
    setSentence(input);
  
    if (input.trim() !== '') {
      try {
        const response = await axios.post('http://127.0.0.1:5000/api/translate', {
          text: input
        });
  
        setExplanation(response.data.translation); // ✅ Correct key
      } catch (error) {
        console.error('Error contacting backend:', error);
        setExplanation('Something went wrong. Please try again later.');
      }
    } else {
      setExplanation('');
    }
  };
  

  return (
    <div
      style={{ backgroundImage: `url(${BgImg})` }}
      className="bg-cover bg-center min-h-screen"
    >
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <div className="pt-[100px]">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-yellow-800">Enter a Tamil Sentence</h2>
          <textarea
            value={sentence}
            onChange={handleInputChange}
            placeholder="உங்கள் தமிழ்ச் சொற்றொடரை இங்கே எழுதுங்கள்..."
            className="w-full h-32 p-4 border border-yellow-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div className="max-w-4xl mx-auto mt-8 bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold text-yellow-700 mb-2">Explanation</h3>
          <p className="text-gray-700 text-lg whitespace-pre-line">
            {explanation || 'Explanation will appear here once you enter a sentence.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PuretamilConvert;
