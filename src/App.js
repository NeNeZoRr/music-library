import React, { useEffect, useState, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import AlbumView from './Views/AlbumView';
import ArtistView from './Views/ArtistView';
import NavButtons from './Views/NavButtons';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('Search for Music!');
  const [data, setData] = useState([]);
  const [clearSearchTerm, setClearSearchTerm] = useState(false);

  const API_URL = 'https://itunes.apple.com/search?term=';

  useEffect(() => {
    const fetchData = async () => {
      if (search) {
        const response = await fetch(API_URL + search);
        const resData = await response.json();
        if (resData.results.length > 0) {
          setMessage('');
          setData(resData.results);
        } else {
          setMessage('');
          setData([]);
        }
      }
    };

    fetchData();

    document.title = `${search} Music - My Music Library`;
  }, [search, setMessage]);

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearch(term);
    setClearSearchTerm(false);
  };

  const handleHome = () => {
    setSearch('');
    setMessage('Search for Music!');
    setData([]);
    setClearSearchTerm(true);
  };

  const handleBack = () => {
    console.log('Back button clicked');
  };

  return (
    <div className="App">
      <Router>
        <Fragment>
          <div className="message">{message}</div>
          <SearchBar handleSearch={handleSearch} clearSearchTerm={clearSearchTerm} />
          <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '10px', marginLeft:'-0px'}}>
            <NavButtons handleBack={handleBack} handleHome={handleHome} />
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <Fragment>
                  <Gallery data={data} />
                </Fragment>
              }
            />
            <Route path="/album/:id" element={<AlbumView handleHome={handleHome} />} />
            <Route path="/artist/:id" element={<ArtistView handleHome={handleHome} />} />
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;