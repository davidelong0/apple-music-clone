import React from 'react';
import appleLogo from '../assets/apple.svg';

const DesktopNavbar = () => {
  return (
    <nav className="desktop-navbar d-none d-md-flex align-items-center justify-content-between px-3 py-2 bg-dark text-white">
      <div className="d-flex align-items-center gap-3 player-controls" style={{ marginLeft: 'calc(200px + 60px)' }}>
        <i className="bi bi-shuffle" style={{ fontSize: '1rem', color: '#A9A9A9' }}></i>
        <i className="bi bi-skip-backward-fill" style={{ fontSize: '1.5rem', color: '#A9A9A9' }}></i>
        <i className="bi bi-play-fill" style={{ fontSize: '1.5rem', color: '#A9A9A9' }}></i>
        <i className="bi bi-skip-forward-fill" style={{ fontSize: '1.5rem', color: '#A9A9A9' }}></i>
        <i className="bi bi-arrow-repeat" style={{ fontSize: '1rem', color: '#A9A9A9' }}></i>
      </div>

      <div className="logo-container bg-secondary rounded-1 px-5 py-1 d-flex justify-content-center align-items-center" style={{ width: '200px' }}>
        <img src={appleLogo} alt="Apple Logo" style={{ height: '20px' }} />
      </div>

      <div className="d-flex align-items-center gap-3" style={{ marginLeft: '10px' }}>
        <i className="bi bi-volume-up-fill" style={{ fontSize: '1.5rem', color: '#A9A9A9', marginRight: '20px' }}></i>
        <button className="btn btn-danger btn-sm fw-bold">Accedi</button>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
