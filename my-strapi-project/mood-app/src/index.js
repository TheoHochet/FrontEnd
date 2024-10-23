import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.js';
import Accueil from './Components/accueil.js';
import Register from './Components/register.js'
import Test from './Components/test.js'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/test" element={<Test/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
