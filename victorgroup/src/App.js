import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and related components
import Navbar from './components/Navbar';
import Home from './components/Home';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className='Content'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
