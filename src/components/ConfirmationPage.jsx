import React, { useEffect, useState } from 'react';
import './ConfirmationPage.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const [showGIF, setShowGIF] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [showWaitingListMessage, setShowWaitingListMessage] = useState(false);

  useEffect(() => {
    
    const gifTimeout = setTimeout(() => {
      setShowGIF(true);
    }, 1000);

    // Delay showing the "Congratulations" text
    const congratulationsTimeout = setTimeout(() => {
      setShowCongratulations(true);
    }, 3000);

    // Delay showing the waiting list message
    const waitingListTimeout = setTimeout(() => {
      setShowWaitingListMessage(true);
    }, 5000);

    return () => {
      clearTimeout(gifTimeout);
      clearTimeout(congratulationsTimeout);
      clearTimeout(waitingListTimeout);
    };
  }, []);

  const handleDoneClick = () => {
    // Navigate to the listing page
    navigate('/list');
  };

  return (
    <div className='confirmation-container'>
      <header className="header">
        <img src="/assests/logo1.png" alt="Logo" className="logo" />
      </header>
      <div className="container">
        {showGIF && (
          <div className="gif-container">
            <div><iframe src="https://giphy.com/embed/VIe5NOnlPxJ9FcONBq" width="100%" height="100%"  frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/gift-present-prezzie-VIe5NOnlPxJ9FcONBq"></a></p>
          </div>
        )}
        {showCongratulations && (
          <h2 className="congratulations-text">Congratulations</h2> 
        )}
        {showWaitingListMessage && (
          <p className="waiting-list-message">You have been added to the waiting list.</p> 
        )}
        {showWaitingListMessage && <button className='btn' onClick={handleDoneClick}>Done</button>}
      </div>
    </div>
  );
};

export default ConfirmationPage;
