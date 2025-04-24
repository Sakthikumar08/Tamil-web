import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import LiteracyImg1 from '../assets/imghome1.png';
import LiteracyImg2 from '../assets/imghome2.png';
import LiteracyImg3 from '../assets/imghome3.jpg';
import '../styles/FloatingTamil.css';

const Home = () => {
  const images = [LiteracyImg1, LiteracyImg2, LiteracyImg3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen text-white bg-gradient-to-b from-[#060a11] to-[#0b1320]">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
  {[
    { top: '10%', left: '5%' },
    { top: '30%', left: '10%' },
    { top: '60%', left: '5%' },
    { top: '15%', left: '40%' },
    { top: '50%', left: '45%' },
    { top: '75%', left: '40%' },
    { top: '20%', right: '10%' },
    { top: '40%', right: '5%' },
    { top: '70%', right: '10%' },
  ].map((style, index) => (
    <span
      key={index}
      className="floating-letter"
      style={{ ...style }}
    >
      {['அ','ஆ','இ','ஈ','உ','ஊ','எ','ஏ','ஐ'][index % 9]}
    </span>
  ))}
</div>


      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 px-4 md:px-20 pb-20 backdrop-blur-sm">
        
        {/* Section Template */}
        {[
          {
            title: 'தமிழ் கல்வி பெருமை',
            desc: 'தமிழ் என்பது உலகின் பழமையான மொழிகளில் ஒன்று. இதன் இலக்கியம், செம்மொழி status மற்றும் கல்வி வளர்ச்சி நம்மை பெருமைப்படச் செய்கிறது.',
            img: images[currentImage],
            reverse: false,
          },
          {
            title: 'தமிழ் மொழியின் வலிமை',
            desc: 'தமிழ் நம் பண்பாட்டு அடையாளம் மட்டுமல்ல, அறிவியல், கலை மற்றும் அரசியல் வரலாற்றிலும் முக்கிய பங்கு வகிக்கிறது.',
            img: LiteracyImg2,
            reverse: true,
          },
          {
            title: 'தமிழ் கலையின் கம்பீரம்',
            desc: 'பாரம்பரிய இசை, நடனம் மற்றும் சிற்பகலை மூலம் தமிழ் கலையின் தனிச்சிறப்பை காணலாம்.',
            img: LiteracyImg3,
            reverse: false,
          },
          {
            title: 'தமிழர் பண்பாட்டு பாரம்பரியம்',
            desc: 'தமிழர்களின் வாழ்க்கைமுறை, மரபுகள், பண்டிகைகள் மற்றும் பாரம்பரியம் நம் அடையாளமாக உள்ளது.',
            img: LiteracyImg1,
            reverse: true,
          },
        ].map(({ title, desc, img, reverse }, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-10 mb-20`}
          >
            <div className="w-full md:w-1/2 h-[300px] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover rounded-2xl transition-all duration-1000 ease-in-out"
              />
            </div>
            <div className="text-left md:w-1/2">
              <h2 className="text-4xl font-bold text-yellow-400 mb-4">{title}</h2>
              <p className="text-base leading-relaxed tracking-wide text-gray-200">{desc}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Home;
