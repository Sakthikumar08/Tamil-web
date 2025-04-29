import React, { useState } from 'react';

const Intermediate = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const questions = [
    {
      text: 'How do you say "I am a student" in Tamil?',
      options: [
        'நான் ஒரு மாணவன்',
        'நீ ஒரு ஆசிரியர்',
        'அவன் ஒரு மருத்துவர்',
        'நீ ஒரு மாணவி'
      ],
      correctAnswer: 'நான் ஒரு மாணவன்',
    },
    {
      text: 'How do you say "Come inside" in Tamil?',
      options: [
        'வீட்டிற்குள் செல்',
        'உள்ளே வா',
        'வா வெளியே',
        'உள்ளே போ'
      ],
      correctAnswer: 'உள்ளே வா',
    },
    {
      text: 'How do you translate "Usually" into Tamil?',
      options: [
        'அவசரமாக',
        'வழக்கமாக',
        'அப்போது',
        'சில நேரங்களில்'
      ],
      correctAnswer: 'வழக்கமாக',
    },
    {
      text: 'What is the Tamil word for "Where"?',
      options: [
        'எங்கே',
        'எப்போது',
        'ஏன்',
        'எப்படி'
      ],
      correctAnswer: 'எங்கே',
    },
    {
      text: 'How do you say "Without delay" in Tamil?',
      options: [
        'அகால',
        'தாமதமில்லாமல்',
        'சிறிது நேரத்தில்',
        'விரைவில்'
      ],
      correctAnswer: 'தாமதமில்லாமல்',
    },
    {
      text: 'Translate "Before" into Tamil.',
      options: [
        'பிறகு',
        'முன்னால்',
        'அப்போது',
        'அதன்பிறகு'
      ],
      correctAnswer: 'முன்னால்',
    },
    {
      text: 'How do you say "Tomorrow" in Tamil?',
      options: [
        'இன்று',
        'இன்றிரவு',
        'நாளை',
        'மறுநாள்'
      ],
      correctAnswer: 'நாளை',
    },
    {
      text: 'What is the correct Tamil word for "Why"?',
      options: [
        'எப்படி',
        'ஏன்',
        'எப்பொழுது',
        'யார்'
      ],
      correctAnswer: 'ஏன்',
    },
    {
      text: 'How do you say "Until then" in Tamil?',
      options: [
        'அப்போது',
        'அதுவரை',
        'அந்த நாள்',
        'இந்த நாள்'
      ],
      correctAnswer: 'அதுவரை',
    },
    {
      text: 'How do you translate "Sorry for the inconvenience caused" into Tamil?',
      options: [
        'மன்னிக்கவும் உங்களது ஒப்புதல் வேண்டும்',
        'ஏற்பட்ட சிரமங்களுக்காக வருந்துகின்றோம்',
        'நன்றி தெரிவிக்கின்றோம்',
        'உறுதிப்படுத்துகிறோம்'
      ],
      correctAnswer: 'ஏற்பட்ட சிரமங்களுக்காக வருந்துகின்றோம்',
    },
  ];

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      alert('✅ Correct Answer! Well done.');
    } else {
      alert('❌ Incorrect. Keep practicing!');
    }

    // Move to next question if available
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
    } else {
      alert('🎉 You have completed the quiz! Great job.');
      setCurrentQuestionIndex(0);
      setSelectedAnswer('');
    }
  };

  return (
    <div className="min-h-screen bg-white p-8 md:p-16">
      <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">Intermediate Tamil Course</h1>

      {/* Lesson Content */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Lesson 2: Common Vocabulary & Sentences</h2>
        <p className="text-lg text-gray-800 mb-4">
          In this lesson, we will focus on learning Tamil translations for daily-use English words and phrases like
          "today", "tomorrow", "soon", "without delay", and question words like "where", "why", "how".
        </p>
        <p className="text-lg text-gray-800 mb-4">
          You will also learn simple sentence structures such as "Come inside" (உள்ளே வா) and formal words for letter writing like 
          "Sorry for the inconvenience caused" (ஏற்பட்ட சிரமங்களுக்காக வருந்துகின்றோம்).
        </p>
        <p className="text-lg text-gray-800">
          Remember: Tamil follows Subject + Object + Verb order. Also, it is important to know the gender-specific terms and polite expressions.
        </p>
        <ul className="list-disc list-inside text-lg text-gray-800 mt-4 space-y-2">
          <li>நான் ஒரு மாணவன் — I am a student</li>
          <li>உள்ளே வா — Come inside</li>
          <li>வழக்கமாக — Usually</li>
          <li>எங்கே — Where</li>
          <li>தாமதமில்லாமல் — Without delay</li>
          <li>முன்னால் — Before</li>
          <li>நாளை — Tomorrow</li>
          <li>ஏன் — Why</li>
          <li>அதுவரை — Until then</li>
          <li>ஏற்பட்ட சிரமங்களுக்காக வருந்துகின்றோம் — Sorry for the inconvenience caused</li>
        </ul>
      </div>

      {/* MCQ Quiz */}
      <div className="bg-purple-100 p-6 rounded-xl shadow-lg mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Quiz: Translate and Learn</h2>
        <p className="text-lg text-gray-700 mb-4">{questions[currentQuestionIndex].text}</p>

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
          className="mt-6 py-2 px-6 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
        >
          {currentQuestionIndex < questions.length - 1 ? 'Submit Answer' : 'Finish Quiz'}
        </button>
      </div>

      {/* Completion Message */}
      <div className="text-center mt-12">
        <p className="text-lg text-gray-800">
          Excellent effort! You are building a strong foundation in Tamil language. Keep practicing and move towards Advanced Level! 💪
        </p>
      </div>
    </div>
  );
};

export default Intermediate;
