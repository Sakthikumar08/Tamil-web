import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Bghome from '../assets/bg.png';
import LiteracyImg1 from '../assets/imghome1.png';
import LiteracyImg2 from '../assets/imghome2.png';
import LiteracyImg3 from '../assets/imghome3.jpg';

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
    <div
      style={{ backgroundImage: `url(${Bghome})` }}
      className="bg-cover bg-center min-h-screen text-white"
    >
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <div className="bg-black bg-opacity-40 pt-24 px-4 md:px-20 pb-10 min-h-screen">
        
        {/* Tamil Literacy Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20 mt-20 animate-fade-in-up">
          <div className="w-full md:w-1/2 h-[250px] overflow-hidden rounded-xl shadow-2xl animate-slide-in-left">
            <img
              src={images[currentImage]}
              alt="Tamil Literacy"
              className="w-full h-full object-cover rounded-xl transition-all duration-1000 ease-in-out"
            />
          </div>
          <div className="text-left md:w-1/2 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">தமிழ் கல்வி பெருமை</h2>
            <p className="text-lg leading-relaxed tracking-wide text-gray-200">
              தமிழ் என்பது உலகின் பழமையான மொழிகளில் ஒன்று. சங்க காலத்தில் இருந்து தமிழ் இலக்கியங்கள்,
              கல்வி, அறிவியல் மற்றும் நாகரிக வளர்ச்சியில் முன்னிலை வகித்துள்ளன. தமிழில் எழுதப்பட்ட நூல்கள்
              உலகளவில் பெருமைப்படுத்தப்படுகின்றன.
            </p>
          </div>
        </div>

        {/* Tamil Strength Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-20 animate-fade-in-up delay-200">
          <div className="w-full md:w-1/2 h-[250px] overflow-hidden rounded-xl shadow-2xl animate-slide-in-right">
            <img
              src={LiteracyImg2}
              alt="Tamil Strength"
              className="w-full h-full object-cover rounded-xl transform hover:scale-105 transition duration-1000 ease-in-out"
            />
          </div>
          <div className="text-left md:w-1/2 animate-fade-in-up delay-300">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">தமிழ் மொழியின் வலிமை</h2>
            <p className="text-lg leading-relaxed tracking-wide text-gray-200">
              தமிழ் நம் பண்பாட்டு அடையாளம் மட்டுமல்ல, அதன் இலக்கணம், உரைபாடல்கள், மற்றும் பன்னாட்டுத் தமிழ்
              சமூகத்தின் பெருமையையும் காட்டுகிறது. இது உலகில் பரந்த தமிழ் இனத்தின் ஒன்றிப்பையும் காட்டுகிறது.
            </p>
          </div>
        </div>

        {/* Additional Content 1 */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20 animate-fade-in-up delay-300">
          <div className="w-full md:w-1/2 h-[250px] overflow-hidden rounded-xl shadow-2xl animate-zoom-in">
            <img
              src={LiteracyImg3}
              alt="Tamil Art"
              className="w-full h-full object-cover rounded-xl transform hover:scale-105 transition duration-1000 ease-in-out"
            />
          </div>
          <div className="text-left md:w-1/2">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">தமிழ் கலையின் கம்பீரம்</h2>
            <p className="text-lg leading-relaxed text-gray-200">
              பாரம்பரிய இசை, நடனம் மற்றும் சிற்பகலை ஆகியவை தமிழின் கலாசாரத்தைக் காட்டும் முக்கியமான கூறுகளாகும்.
              இந்தக் கலை வடிவங்கள் உலகளாவிய வாசகர்களை ஈர்த்துள்ளன.
            </p>
          </div>
        </div>

        {/* Additional Content 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 animate-fade-in-up delay-500">
          <div className="w-full md:w-1/2 h-[250px] overflow-hidden rounded-xl shadow-2xl animate-fade-in-up">
            <img
              src={LiteracyImg1}
              alt="Tamil Heritage"
              className="w-full h-full object-cover rounded-xl transform hover:scale-105 transition duration-1000 ease-in-out"
            />
          </div>
          <div className="text-left md:w-1/2">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">தமிழர் பண்பாட்டு பாரம்பரியம்</h2>
            <p className="text-lg leading-relaxed text-gray-200">
              தமிழர்களின் வாழ்க்கைமுறை, மரபுகள், பண்டிகைகள் மற்றும் உணவுகள் — இவை அனைத்தும் ஒரு அரிய பாரம்பரியத்தை
              பிரதிபலிக்கின்றன. இது நம் அடையாளமும் பெருமையும் ஆகும்.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
