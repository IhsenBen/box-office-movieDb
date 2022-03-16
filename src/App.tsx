import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home';

function App() {
  return (
    <div className="App bg-gray-50 ">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
