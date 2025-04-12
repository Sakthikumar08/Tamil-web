import React, { useState } from 'react';

const Intermediate = () => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const question = {
    text: 'What is the correct translation of "I am a student" in Tamil?',
    options: [
      'நான் ஒரு மாணவன்',
      'நான் ஒரு ஆசிரியர்',
      'அவன் ஒரு மாணவன்',
      'நீ ஒரு மாணவி'
    ],
    correctAnswer: 'நான் ஒரு மாணவன்',
  };

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedAnswer === question.correctAnswer) {
      alert('✅ Correct Answer! You’re progressing well in Tamil.');
    } else {
      alert('❌ Incorrect. Try again to improve your understanding!');
    }
  };

  return (
    <div className="min-h-screen bg-white p-8 md:p-16">
      <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">Intermediate Tamil Course</h1>

      {/* Lesson Content */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Lesson 2: Sentence Formation</h2>
        <p className="text-lg text-gray-800 mb-4">
          Now that you’ve learned basic greetings, it’s time to form simple Tamil sentences.
        </p>
        <p className="text-lg text-gray-800">
          In Tamil, sentence structure typically follows Subject + Object + Verb. For example:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-800 mt-4">
          <li>
            <span className="font-bold text-purple-700">நான் ஒரு மாணவன்</span> — I am a student
          </li>
          <li>
            <span className="font-bold text-purple-700">நீ ஒரு ஆசிரியர்</span> — You are a teacher
          </li>
          <li>
            <span className="font-bold text-purple-700">அவள் ஒரு மருத்துவர்</span> — She is a doctor
          </li>
        </ul>
        <p className="text-lg mt-6 text-gray-800">
          Tamil uses gender-specific words, so "மாணவன்" is a male student and "மாணவி" is a female student.
        </p>
      </div>

      {/* MCQ Quiz */}
      <div className="bg-purple-100 p-6 rounded-xl shadow-lg mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Quiz: Sentence Translation</h2>
        <p className="text-lg text-gray-700 mb-4">{question.text}</p>

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
          className="mt-6 py-2 px-6 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
        >
          Submit Answer
        </button>
      </div>

      {/* Completion Message */}
      <div className="text-center mt-12">
        <p className="text-lg text-gray-800">
          Great job! You're getting better at forming sentences. Next up: the Advanced Course! 💪
        </p>
      </div>
    </div>
  );
};

export default Intermediate;
