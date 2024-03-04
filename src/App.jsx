import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cubee from './components/Cubee';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cubee />} />
      </Routes>
    </Router>
  );
}

export default App;