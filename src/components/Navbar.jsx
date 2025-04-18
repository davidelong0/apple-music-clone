import { useState } from 'react';
import logo from '../assets/music.svg';
import { HouseFill, Broadcast, Stars, Search } from 'react-bootstrap-icons';

const Navbar = ({ onSearch }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // Stato per gestire la ricerca

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    onSearch(searchQuery); // Chiama la funzione onSearch passata come prop
  };

  return (
    <nav className="bg-dark py-2 px-3 position-relative d-flex flex-column flex-md-column" style={{ height: '100%' }}>
      <div className="d-flex d-md-none justify-content-between align-items-center w-100 p-2">
        <button
          className="btn p-0 border-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div style={{ width: '30px', height: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ height: '3px', backgroundColor: 'red', borderRadius: '2px' }}></div>
            <div style={{ height: '3px', backgroundColor: 'red', borderRadius: '2px' }}></div>
          </div>
        </button>
        <img
          src={logo}
          alt="Logo"
          style={{ width: 60, filter: 'invert(100%)' }}
        />
        <span className="text-danger fw-semibold">Accedi</span>
      </div>

      <div className="d-none d-md-block mb-3">
        <img
          src={logo}
          alt="Logo"
          style={{ width: 60, filter: 'invert(100%)' }}
        />
      </div>

      <div className={`position-relative mb-3 w-100 ${!isMobileMenuOpen && 'd-none d-md-block'}`}>
        <input
          type="text"
          className="form-control"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Cerca"
          style={{
            backgroundColor: '#333',
            color: '#fff',
            border: '1px solid #999',
            paddingLeft: '30px',
          }}
        />
        <Search
          className="search-icon" // Aggiungi una classe per l'hover
          style={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'red',
          }}
          onClick={handleSearchSubmit}
        />
      </div>

      <ul className={`nav flex-column ${!isMobileMenuOpen && 'd-none d-md-flex'}`} style={{ alignSelf: 'flex-start' }}>
        <li className="nav-item mb-2">
          <a className="nav-link text-white d-flex align-items-center" href="#">
            <HouseFill className="me-2" style={{ color: 'red' }} /> Home
          </a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link text-white d-flex align-items-center" href="#">
            <Stars className="me-2" style={{ color: 'red' }} /> Novità
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white d-flex align-items-center" href="#">
            <Broadcast className="me-2" style={{ color: 'red' }} /> Radio
          </a>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
