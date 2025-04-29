import React, { useState } from 'react';

const Beginner = () => {
  const questions = [
    {
      text: 'Which word starts with the Uyir ezhuthu "அ"?',
      options: ['அறுவை', 'நூல்', 'திறமை', 'சிந்தனை'],
      correctAnswer: 'அறுவை',
    },
    {
      text: 'Which word starts with the Uyir ezhuthu "இ"?',
      options: ['இசை', 'உறுதி', 'பொறுப்பு', 'நம்பிக்கை'],
      correctAnswer: 'இசை',
    },
    {
      text: 'Which word starts with the Uyir ezhuthu "உ"?',
      options: ['உணர்வு', 'கலை', 'நாடகம்', 'விழிப்பு'],
      correctAnswer: 'உணர்வு',
    },
    {
      text: 'Which word begins with the Mei ezhuthu "த்"?',
      options: ['திறமை', 'உணர்வு', 'உறுதி', 'அன்பு'],
      correctAnswer: 'திறமை',
    },
    {
      text: 'Which word begins with the Mei ezhuthu "ப்"?',
      options: ['பொறுப்பு', 'அறம்', 'நிலை', 'விளக்கம்'],
      correctAnswer: 'பொறுப்பு',
    },
    {
      text: 'Which word begins with the Mei ezhuthu "ம்"?',
      options: ['முயற்சி', 'பொழுது', 'அருவை', 'தூக்கம்'],
      correctAnswer: 'முயற்சி',
    },
    {
      text: 'Which word begins with the Mei ezhuthu "ச்"?',
      options: ['சிந்தனை', 'உறுதி', 'தைரியம்', 'நம்பிக்கை'],
      correctAnswer: 'சிந்தனை',
    },
    {
      text: 'Which word begins with the Mei ezhuthu "ந்"?',
      options: ['நம்பிக்கை', 'உறுதி', 'அறிவு', 'விளக்கம்'],
      correctAnswer: 'நம்பிக்கை',
    },
    {
      text: 'Which word begins with the Mei ezhuthu "ய்"?',
      options: ['யோசனை', 'அம்மா', 'உறவு', 'நதி'],
      correctAnswer: 'யோசனை',
    },
    {
      text: 'Which word begins with the Mei ezhuthu "ற்"?',
      options: ['அறம்', 'அறுவை', 'திறமை', 'உரிமை'],
      correctAnswer: 'அறம்',
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer('');
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen bg-white p-8 md:p-16">
      <h1 className="text-4xl font-bold text-center text-yellow-600 mb-8">Beginner Tamil Course</h1>

      {/* Content Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Lesson 1: Uyir & Mei Ezhuthukal</h2>
        <p className="text-lg text-gray-800 mb-4">
          Tamil has 12 Uyir (vowel) letters: <strong>அ, ஆ, இ, ஈ, உ, ஊ, எ, ஏ, ஐ, ஒ, ஓ, ஔ</strong>. These are pure vowel sounds.
          Tamil also has 18 Mei (consonant) letters: <strong>க், ச், ட், த், ப், ற், ஞ், ங், ண், ந், ம், ய், ர், ல், வ், ழ், ள், ன்</strong>. These consonants combine with vowels to form complete syllables.
        </p>
        <p className="text-lg text-gray-800">
          In this lesson, you will identify which Tamil words start with specific Uyir or Mei ezhuthukal.
        </p>
      </div>

      {/* Quiz Section */}
      <div className="bg-yellow-100 p-6 rounded-xl shadow-lg mb-12">
        {!showResult ? (
          <>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Question {currentQuestionIndex + 1} of {questions.length}
            </h2>
            <p className="text-lg text-gray-800 mb-4">{questions[currentQuestionIndex].text}</p>

            <div className="space-y-4">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    id={`option-${index}`}
                    checked={selectedAnswer === option}
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
              disabled={!selectedAnswer}
            >
              Submit Answer
            </button>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-green-600 mb-4">Quiz Completed!</h2>
            <p className="text-xl text-gray-800">Your Score: {score} / {questions.length}</p>
            <p className="mt-4 text-lg">Great work! You're ready to explore the next lesson.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Beginner;
