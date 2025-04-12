import React from 'react'

const WordSection = ({ title, words }) => (
    <div className="mb-20">
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {words.map((word, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white bg-opacity-10 backdrop-blur-md border border-yellow-500 rounded-xl p-4 hover:scale-105 transition-transform duration-300 shadow-md"
          >
            <span className="text-lg md:text-xl text-white font-medium">{word.tamil}</span>
            <span className="text-lg md:text-xl text-yellow-300 font-semibold">{word.english}</span>
          </div>
        ))}
      </div>
    </div>
  );
  

export default WordSection
