import React, { useEffect, useState, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import AlbumView from './Views/AlbumView';
import ArtistView from './Views/ArtistView';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('Search for Music!');
  const [data, setData] = useState([]);

  const API_URL = 'https://itunes.apple.com/search?term=';
  const navigate = useNavigate();

  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        try {
          const response = await fetch(API_URL + search);
          const resData = await response.json();
          if (resData.results.length > 0) {
            setMessage('');
            setData(resData.results);
          } else {
            setMessage('No items to display');
            setData([]);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();

      document.title = `${search} Music - My Music Library`;
    } else {
      setMessage('Search for Music!');
      setData([]);
    }
  }, [search]);

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearch(term);
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className="App">
      <div className="message">{message}</div>
      <Router>
        <div>
          <Link to="/" onClick={handleHome}>
            Home
          </Link>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <SearchBar handleSearch={handleSearch} />
                <Gallery data={data} />
              </Fragment>
            }
          />
          <Route path="/album/:id" element={<AlbumView handleHome={handleHome} />} />
          <Route path="/artist/:id" element={<ArtistView handleHome={handleHome} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;