import React from 'react';
import appleLogo from '../assets/apple.svg';

const MobileNavbar = () => {
  return (
    <nav className="mobile-navbar d-flex justify-content-between align-items-center px-3 py-2 bg-dark d-md-none position-fixed bottom-0 w-100">
    
      <div className="logo-container">
        <img src={appleLogo} alt="Apple Logo" style={{ height: '20px' }} />
      </div>

     
      <div className="d-flex align-items-center gap-3">
        <i className="bi bi-play-fill" style={{ fontSize: '1.5rem', color: '#A9A9A9' }}></i>
        <i className="bi bi-skip-forward-fill" style={{ fontSize: '1.5rem', color: '#A9A9A9' }}></i>
      </div>
    </nav>
  );
};

export default MobileNavbar;
