import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Screen4 from './components/Screen4';

function App(){

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Screen1/>} />
          <Route exact path="/screen2" element={<Screen2/>} />
          <Route exact path="/screen3" element={<Screen3/>} />
          <Route exact path="/screen4" element={<Screen4/>} />
        </Routes>
      </Router>
    </div>
    )
}

export default App;