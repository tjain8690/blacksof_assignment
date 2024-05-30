import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSubmissions, submitForm } from '../services/api'; // Import API submission function
import './RegistrationForm.css';

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    contact_no: '',
    message: '',
  });

  const [validity, setValidity] = useState({
    full_name: true,
    email: true,
    contact_no: true,
    message: true,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setValidity({ ...validity, [e.target.name]: e.target.value.trim() !== '' });
  };

  const handleSubmit = async () => {
    // Check for empty fields
    if (Object.values(formData).some((value) => value.trim() === '')) {
      alert('Please fill out all fields before submitting the form.');
      return;
    }

    navigate('/confirmation');
  };
 
  return (
    <div className="registration-form-container">
      <header className="header">
        <img src="/assests/logo1.png" alt="Logo" className="logo" />
      </header>
      <div className="join-now">
        <img src="/assests/p.png" alt="Icon" className="icon" />
        <p>Join now and get AED50</p>
      </div>
      <form className="form">
        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={formData.full_name}
          onChange={handleChange}
          className={validity.full_name ? '' : 'invalid'}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={validity.email ? '' : 'invalid'}
          required
        />
        <input
          type="text"
          name="contact_no"
          placeholder="Contact No."
          value={formData.contact_no}
          onChange={handleChange}
          className={validity.contact_no ? '' : 'invalid'}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" onClick={handleSubmit}>Submit</button>

      </form>
    </div>
  );
}

export default RegistrationForm;


