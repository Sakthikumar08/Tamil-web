import React from 'react';
import BgImg from '../assets/bg.png'; // Ensure this path is correct
import WordSection from '../components/WordSection';
import Navbar from '../components/Navbar';

const engineeringWords = [
  { tamil: 'மின்னியல்', english: 'Electronics' },
  { tamil: 'வெப்பவியல்', english: 'Thermodynamics' },
  { tamil: 'தொழில்நுட்பம்', english: 'Technology' },
  { tamil: 'மின்னணுவியல்', english: 'Microelectronics' },
  { tamil: 'வலையமைப்பு', english: 'Networking' },
  { tamil: 'தொடரமைப்பு', english: 'Architecture' },
  { tamil: 'தரவுத்தொகுப்பு', english: 'Database' },
  { tamil: 'கணித மாதிரி', english: 'Algorithm' },
  { tamil: 'தானியங்கி', english: 'Automation' },
  { tamil: 'பொறியியலாளர்', english: 'Engineer' },
];

const medicalWords = [
  { tamil: 'மருந்தியல்', english: 'Pharmacology' },
  { tamil: 'உடலியல்', english: 'Anatomy' },
  { tamil: 'நோயியல்', english: 'Pathology' },
  { tamil: 'மருத்துவம்', english: 'Medicine' },
  { tamil: 'அறுவை சிகிச்சை', english: 'Surgery' },
  { tamil: 'மருத்துவர்', english: 'Doctor' },
  { tamil: 'தசைகள்', english: 'Muscles' },
  { tamil: 'எலும்புகள்', english: 'Bones' },
  { tamil: 'இரத்தம்', english: 'Blood' },
  { tamil: 'மனநலம்', english: 'Mental Health' },
];



const Directionary = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BgImg})` }}
      className="bg-cover bg-center min-h-screen  "
    >
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="bg-black bg-opacity-20 mt-10 p-8 md:p-16 rounded-xl shadow-2xl w-full max-w-6xl mx-auto">
        <WordSection title="Engineering Dictionary" words={engineeringWords} />
        <WordSection title="Medical Dictionary" words={medicalWords} />
      </div>
    </div>
  );
};

export default Directionary;
