import React, { useState } from 'react';

const Advanced = () => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const question = {
    text: 'Choose the correct meaning of the Tamil proverb: "அறிவுக்கு அரணாக உளர்"',
    options: [
      'Knowledge is a curse',
      'Knowledge is a shield',
      'Knowledge is dangerous',
      'Knowledge is money'
    ],
    correctAnswer: 'Knowledge is a shield',
  };

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedAnswer === question.correctAnswer) {
      alert('✅ Excellent! You’ve mastered this concept!');
    } else {
      alert('❌ Not quite. Review the proverb and try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <h1 className="text-4xl font-bold text-center text-yellow-700 mb-10">
        Advanced Tamil Course
      </h1>

      {/* Lesson */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
          Lesson 3: Complex Sentences & Proverbs
        </h2>
        <p className="text-lg text-gray-800 mb-4">
          In advanced Tamil, we focus on compound sentences, idioms, and proverbs. Understanding cultural expressions is key.
        </p>

        <h3 className="text-xl font-bold text-yellow-700 mt-6 mb-2">Example 1: Compound Sentence</h3>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold text-purple-700">
            நான் பாடம் படிக்கவில்லை, ஆனால் தேர்வில் வெற்றி பெற்றேன்.
          </span>
          <br />
          I didn't study, but I passed the exam.
        </p>

        <h3 className="text-xl font-bold text-yellow-700 mt-6 mb-2">Example 2: Tamil Proverb</h3>
        <p className="text-gray-700">
          <span className="font-semibold text-purple-700">அறிவுக்கு அரணாக உளர்</span> — Knowledge acts as a fortress or shield.
        </p>
        <p className="mt-2 text-gray-800">
          Proverbs add depth and context to the language. They are often used in daily conversations and literature.
        </p>
      </div>

      {/* Quiz */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-2xl shadow mb-12">
        <h2 className="text-2xl font-semibold text-yellow-800 mb-4">Quiz: Proverbs</h2>
        <p className="text-lg text-gray-800 mb-4">{question.text}</p>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <div key={index} className="flex items-center">
              <input
                type="radio"
                name="answer"
                value={option}
                id={`option-${index}`}
                onChange={handleAnswerChange}
                className="mr-3"
              />
              <label htmlFor={`option-${index}`} className="text-lg text-gray-900">{option}</label>
            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 py-2 px-6 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition duration-300"
        >
          Submit Answer
        </button>
      </div>

      {/* End Message */}
      <div className="text-center text-gray-700">
        <p className="text-lg">
          You've completed the Advanced Level of Tamil. Keep practicing daily to master fluency! 🌟
        </p>
      </div>
    </div>
  );
};

export default Advanced;
