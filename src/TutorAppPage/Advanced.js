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

  const questions = [
    {
      proverb: 'அழுக்கு தொட்டால் தழுக்கு வரும்.',
      meaning: 'If you touch filth, you will get dirty.',
      explanation: 'This proverb means that associating with bad things or people will negatively affect you.'
    },
    {
      proverb: 'நாயின் ஊர் தப்பினால், கறி சமைக்கும்.',
      meaning: 'A dog’s home is wherever it goes.',
      explanation: 'This suggests that a person who is wandering or does not have a permanent place to live will adapt and make any place their own.'
    },
    {
      proverb: 'குரங்கு கண்ணில் முத்து.',
      meaning: 'A person who is ignorant of something valuable cannot appreciate it.',
      explanation: 'It implies that people who don’t understand the value of something will not recognize its worth, just like a monkey can’t appreciate a pearl.'
    },
    {
      proverb: 'அகன்ற கீரை உண்டால் கரம் பிடிக்காது.',
      meaning: 'You cannot hold onto something if it is not right.',
      explanation: 'This suggests that if the situation is not right or the conditions are wrong, you will not be able to keep or manage things properly.'
    },
    {
      proverb: 'குதிரை சொட்டில் வருவதை விட குதிரை செல்வது மேல்.',
      meaning: 'A horse running on its own will always be better than one that is pushed.',
      explanation: 'This highlights that natural effort or talent leads to better results than being forced to do something.'
    },
    {
      proverb: 'எழுந்தாலும் ஏழனாகவே இரு.',
      meaning: 'Do not lose your character.',
      explanation: 'This teaches that no matter how successful you become, you should always remain humble and true to your nature.'
    },
    {
      proverb: 'நாக்கின் மேல் சுண்டி உண்டு.',
      meaning: 'A person who speaks a lot is often empty inside.',
      explanation: 'This suggests that those who talk excessively often lack substance or true knowledge behind their words.'
    },
    {
      proverb: 'அடியேன் களி, பெரியவன் களி.',
      meaning: 'People who don\'t know the value of something will misuse it.',
      explanation: 'It indicates that those who don’t understand the worth of something will mismanage it, just like an inexperienced person mishandling something valuable.'
    }
  ];

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

      {/* Extra Proverbs Section */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold text-yellow-700 mb-6">More Tamil Proverbs with Meanings</h2>
        <ul className="space-y-6">
          {questions.map((q, idx) => (
            <li key={idx} className="text-gray-800">
              <p className="text-xl font-semibold text-purple-700">{idx + 1}. {q.proverb}</p>
              <p className="mt-1 text-yellow-900 font-medium">English Meaning: {q.meaning}</p>
              <p className="text-gray-700 mt-1">Explanation: {q.explanation}</p>
            </li>
          ))}
        </ul>
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