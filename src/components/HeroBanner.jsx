import React from 'react';
import chillImg from '../assets/1a.png';
import musicaUnoImg from '../assets/1b.png';

const HeroBanner = () => {
  return (
    <section className="my-4 ps-2 pe-0 text-white">
      <div className="mb-3">
        <h2 className="fw-bold display-5 mb-2">Novità</h2>
        <hr className="text-secondary" />
      </div>

      <div
        className="d-flex justify-content-between gap-3 mb-4 hide-scrollbar"
        style={{
          flexWrap: 'nowrap',
          overflowX: 'hidden',
        }}
      >
        <div
          className="flex-shrink-0"
          style={{
            maxWidth: '50%',
            wordWrap: 'break-word',
            whiteSpace: 'normal',
          }}
        >
          <div className="text-uppercase text-secondary small fw-semibold mb-1">
            Nuova stazione radio
          </div>
          <div className="fs-6">
            Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
          </div>
        </div>

        <div
          className="flex-shrink-0"
          style={{
            maxWidth: '50%',
            wordWrap: 'break-word',
            whiteSpace: 'normal',
          }}
        >
          <div className="text-uppercase text-secondary small fw-semibold mb-1">
            Nuova stazione radio
          </div>
          <div className="fs-6">
            Ecco la nuova casa della musica latina
          </div>
        </div>
      </div>

      <div
        className="d-flex d-md-none hide-scrollbar"
        style={{
          gap: '1rem',
          paddingInline: '0.5rem',
        }}
      >
        <img
          src={chillImg}
          alt="Chill"
          className="img-fluid rounded"
          style={{ minWidth: '65%' }}
        />
        <img
          src={musicaUnoImg}
          alt="Música Uno"
          className="img-fluid rounded"
          style={{ minWidth: '70%' }}
        />
      </div>

      <div className="d-none d-md-block">
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <img src={chillImg} alt="Chill" className="img-fluid rounded" />
          </div>
          <div className="col-12 col-md-6">
            <img src={musicaUnoImg} alt="Música Uno" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
