import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RegistrationForm from './components/RegistrationForm';
import ConfirmationPage from './components/ConfirmationPage';
import ListingPage from './components/ListingPage';

function App() {
  return (
    <Router>
      <div>
      
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
      <Route path="/list" element={<ListingPage/>} />
         
      </Routes>
       
      </div>
    </Router>
  );
}

export default App;


