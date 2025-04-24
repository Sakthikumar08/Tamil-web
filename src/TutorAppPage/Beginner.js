import React, { useState } from 'react';

const Beginner = () => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  // Sample MCQ questions and options for Tamil learning
  const question = {
    text: 'What is the Tamil word for "hello"?',
    options: ['வணக்கம்', 'மாணவன்', 'பெண்', 'நன்றி'],
    correctAnswer: 'வணக்கம்',
  };

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedAnswer === question.correctAnswer) {
      alert('Correct Answer! You have completed the Beginner Tamil course.');
    } else {
      alert('Incorrect Answer. Please try again!');
    }
  };

  return (
    <div className="min-h-screen bg-white p-8 md:p-16">
      <h1 className="text-4xl font-bold text-center text-yellow-600 mb-8">Beginner Tamil Course</h1>

      {/* Content Section: Explanation */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Lesson 1: Basic Tamil Greetings</h2>
        <p className="text-lg text-gray-800 mb-6">
          Tamil is one of the oldest languages in the world. It's widely spoken in Tamil Nadu (India) and Sri Lanka.
          In this lesson, we will learn some basic greetings in Tamil.
        </p>
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Greetings</h3>
        <p className="text-lg text-gray-800">
          In Tamil, "hello" is translated to <span className="text-yellow-600 font-semibold">வணக்கம்</span>.
          It's a common greeting used in both formal and informal situations. Another common greeting is <span className="text-yellow-600 font-semibold">நன்றி</span>, which means "thank you."
        </p>
      </div>

      {/* MCQ Section */}
      <div className="bg-yellow-100 p-6 rounded-xl shadow-lg mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Quiz: Test Your Knowledge</h2>
        <p className="text-lg text-gray-700 mb-4">{question.text}</p>
        
        {/* Multiple Choice Options */}
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <div key={index} className="flex items-center">
              <input
                type="radio"
                name="answer"
                value={option}
                id={`option-${index}`}
                onChange={handleAnswerChange}
                className="mr-4"
              />
              <label htmlFor={`option-${index}`} className="text-lg text-gray-800">
                {option}
              </label>
            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 py-2 px-6 bg-yellow-600 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-700 transition duration-300"
        >
          Submit Answer
        </button>
      </div>

      {/* Footer / Next Step */}
      <div className="text-center mt-12">
        <p className="text-lg text-gray-800">
          Congratulations on completing the Beginner Tamil Course! Keep practicing and move on to the Intermediate Course.
        </p>
      </div>
    </div>
  );
};

export default Beginner;
