import { useEffect, useState } from 'react';

const NewReleases = ({ artistQuery = 'queen' }) => {
  const [tracks, setTracks] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [error, setError] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistQuery}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data && data.data.length > 0) {
          setTracks(data.data.slice(0, 10));
          setError(false);
        } else {
          setTracks([]);
          setError(true);
        }
      })
      .catch((err) => {
        console.error('Errore nel fetch:', err);
        setError(true);
      });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [artistQuery]);

  return (
    <section className="my-4">
      <h5 className="mb-3">
        Nuove uscite <span className="arrow">&gt;</span>
      </h5>

      {error && (
        <div className="text-danger mb-3">
          Nessun contenuto trovato per "{artistQuery}"
        </div>
      )}

      <div className="container-fluid">
        <div className="row row-cols-3 row-cols-md-5 g-2 g-md-3">
          {tracks.slice(0, isMobile ? 6 : 10).map((track, i) => (
            <div className="col" key={i}>
              <div className="track-card">
                <img
                  src={track.album.cover_medium}
                  alt={track.title}
                  className="track-img"
                />
                <div className="track-info">
                  <div className="track-header">
                    <p className="track-title">{track.title}</p>
                    <span className="track-ep">E</span>
                  </div>
                  <p className="track-artist">{track.artist.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewReleases;
