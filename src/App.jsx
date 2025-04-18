import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import RadioEpisodes from './components/RadioEpisodes';
import NewReleases from './components/NewReleases';
import ExploreMore from './components/ExploreMore';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import DesktopNavbar from './components/DesktopNavbar';
import MobileNavbar from './components/MobileNavbar'; 
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [artistQuery, setArtistQuery] = useState('queen'); 

  const handleSearch = (query) => {
    setArtistQuery(query);
  };

  return (
    <div className="bg-black text-white min-vh-100">
      <DesktopNavbar /> 
      <MobileNavbar /> 
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-2 px-0">
            <Navbar onSearch={handleSearch} />
          </div>
          <div className="col-12 col-md-10">
            <HeroBanner />
            <RadioEpisodes />
            <NewReleases artistQuery={artistQuery} />
            <ExploreMore />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
