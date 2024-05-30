import React from 'react';
import "./LandingPage.css"
import { useNavigate } from 'react-router-dom';
const Header = () => (
  <header className="header">
    <img src="/assests/logo.png" alt="Logo" className="logo" />
  </header>
);

const MainSection = () => {
  const navigate = useNavigate();

  const handleJoinNow = () => {
    navigate('/register');
  };

  return (
  <main className="main">
    <section className="section">
      <div className='wrapper'>
        <div className="text">
          <h2 className="h2">They say, when life gives you lemons, make lemonade!</h2>
          <p className="p">But your lemonade might taste different from others considering how well you play with the ingredients.</p>
          <p className="p">Let's see how your lemonade tastes!</p>
          <button className="btn" onClick={handleJoinNow}>Join now →</button>
        </div>
        <div className="lemonade">
          <img src="/assests/lemonade.png" alt="Lemonade" className="image" />
        </div>
      
      </div>
    </section>
    <section className="text-center">
      <h3 className="h3">Take the test & know which of the lemon personalities you resonate with</h3>
      <div className="image-container">
        <div className="image-wrapper">
          <img src="/assests/img-1.png" alt="Practical Achiever" className="img" />
          <p>Practical Achiever</p>
        </div>
        <div className="image-wrapper">
          <img src="/assests/img-2.png" alt="Cautiously Optimistic" className="img" />
          <p>Cautiously Optimistic</p>
        </div>
        <div className="image-wrapper">
          <img src="/assests/img-3.png" alt="The Wanna-be Stabilizer" className="img" />
          <p>The Wanna-be Stabilizer</p>
        </div>
        <div className="image-wrapper">
          <img src="/assests/img-4.png" alt="The Sleeping Beauty" className="img" />
          <p>The Sleeping Beauty</p>
        </div>
        <div className="image-wrapper">
          <img src="/assests/img-5.png" alt="The Chaotic Overspender" className="img" />
          <p>The Chaotic Overspender</p>
        </div>
      </div>
    </section>
  </main>
);
}
const LemonadeComponent = () => (
  <div className="section">
    <Header />
    <MainSection />
  </div>
);


export default LemonadeComponent;

