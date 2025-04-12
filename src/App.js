import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Directionary from './pages/Directionary';
import GrammarError from './pages/Tamilgrammar';
import PureTamil from './pages/PuretamilConvert';
import TamilTutorial from './pages/Tamiltutorials';
import Beginner from './pages/Beginner';
import Intermediate from './pages/Intermediate';
import Advanced from './pages/Advanced';
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
        <Route path="/beginner" element={<Beginner />} />
        <Route path="/intermediate" element={<Intermediate />} />
        <Route path="/advanced" element={<Advanced />} />
      </Routes>
    </Router>
  );
}

export default App;
