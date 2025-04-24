import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Directionary from './pages/Directionary';
import GrammarError from './pages/Tamilgrammar';
import PureTamil from './pages/PuretamilConvert';
import TamilTutorial from './pages/Tamiltutorials';
import Beginner from './TutorAppPage/Beginner';
import Intermediate from './TutorAppPage/Intermediate';
import Advanced from './TutorAppPage/Advanced';
import TamilCulture from './pages/TamilCulture';
import TamilInscriptions from './pages/TamilInscriptions';
import TamilSanghaliterature from './pages/TamilSanghaliterature';
import TamilTradition from './pages/TamilTradition';
import CheraDynasty from './pages/Cheradynasty';
import Choradynasty from './pages/Choradynasty';
import PandyaDynasty from './pages/PandyaDynasty';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directionary" element={<Directionary />} />
        <Route path="/grammar-error" element={<GrammarError />} />
        <Route path="/pure-tamil" element={<PureTamil />} />
        <Route path="/tamil-tutorial" element={<TamilTutorial />} />
        <Route path="/tamilculture" element={<TamilCulture/>} />
        <Route path="/tamilinscriptions" element={<TamilInscriptions/>}/>
        <Route path="/tamilsanghaliterature" element={<TamilSanghaliterature />} />
        <Route path="/tamiltradition" element={<TamilTradition/>} />
        <Route path="/pandyadynasty" element={<PandyaDynasty/>}/>
        <Route path="/choradynasty" element={<Choradynasty />} />
        <Route path="/cheradynasty" element={<CheraDynasty/>} />
        
        {/* tutor-app */}
        <Route path="/beginner" element={<Beginner />} />
        <Route path="/intermediate" element={<Intermediate />} />
        <Route path="/advanced" element={<Advanced />} />
      </Routes>
    </Router>
  );
}

export default App;
