import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api'; // Base URL for your backend

// Function to submit the form data
export const submitForm = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/submissions`, formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};

// Function to get submissions
export const getSubmissions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/submissions`);
    return response.data;
  } catch (error) {
    console.error('Error fetching submissions:', error);
    throw error;
  }
};

