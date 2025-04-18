import radio1 from '../assets/2a.png';
import radio2 from '../assets/2b.png';
import radio3 from '../assets/2c.png';
import radio4 from '../assets/2d.png';
import radio5 from '../assets/2e.png';

const RadioEpisodes = () => {
  const episodes = [
    { img: radio1, title: 'Prólogo con Abuelo' },
    { img: radio2, title: 'The Wanderer' },
    { img: radio3, title: 'Michael Bublé & Carly Pearce' },
    { img: radio4, title: 'Stephan Moccio: The Zane Lowe Interview' },
    { img: radio5, title: 'Chart Spotlight: Julia Michaels' },
  ];

  return (
    <section className="my-4">
      <h5 className="mb-3">Nuovi episodi radio &gt;</h5>

      <div
        className="d-flex d-md-none"
        style={{
          gap: '0.8rem',
          paddingLeft: '1rem',
          paddingRight: '0',
          width: '100%',
        }}
      >
        {episodes.slice(0, 3).map((episode, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '33.33%' }}>
            <img
              src={episode.img}
              alt={`Radio ${i}`}
              className="img-fluid rounded"
              style={{
                objectFit: 'cover',
                height: '150px',
                width: '100%',
              }}
            />
            <p
              style={{
                fontSize: '0.7rem',
                color: 'gray',
                margin: '0',
              }}
            >
              {episode.title}
            </p>
          </div>
        ))}
      </div>

      <div className="d-none d-md-flex">
        <div
          className="d-flex w-100 justify-content-between"
          style={{
            gap: '0.8rem',
            overflowX: 'hidden',
          }}
        >
          {episodes.map((episode, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '19%' }}>
              <img
                src={episode.img}
                alt={`Radio ${i}`}
                className="img-fluid rounded"
                style={{
                  objectFit: 'cover',
                  height: '150px',
                  width: '100%',
                }}
              />
              <p
                style={{
                  fontSize: '0.7rem',
                  color: 'gray',
                  margin: '0',
                }}
              >
                {episode.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RadioEpisodes;
