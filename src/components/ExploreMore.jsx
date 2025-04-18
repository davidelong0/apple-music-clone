import React from 'react';


const ExploreMore = () => {
  const categories = [
    'Esplora per genere',
    'Decenni',
    'Attività e stati d\'animo',
    'Worldwide',
    'Classifiche',
    'Audio spaziale',
    'Video musicali',
    'Nuovi artisti',
    'Hit del passato'
  ];

  return (
    <section className="my-4">
      <h5 className="mb-3">Altro da esplorare</h5>
      <div className="row">
        {categories.map((text, i) => (
          <div className="col-12 col-md-4 mb-2" key={i}>
            <div className="explore-item text-center py-3">
              <span className="explore-text">{text}</span>
              <span className="explore-symbol">&gt;</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreMore;
