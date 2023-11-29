import React, { useEffect, useState, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import AlbumView from './components/AlbumView';
import ArtistView from './components/ArtistView';
import './App.css'; 

function App() {
  let [search, setSearch] = useState('');
  let [message, setMessage] = useState('Search for Music!');
  let [data, setData] = useState([]);

  const API_URL = 'https:/youtube.com/results?search=';
 // https:/youtube.com/results?search_query=

  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        document.title = `${search} Music`;
        const response = await fetch(API_URL + search);
        const resData = await response.json();
        if (resData.results.length > 0) {
          setMessage('');
          return setData(resData.results);
        } else {
          setMessage('No items to display');
          return setData([]);
        }
      };
      fetchData();
    } else {
      setMessage('Search for Music!');
      setData([]);
    }
  }, [search]);

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearch(term);
  };

  return (
    <div className="App">
      <div className="message">{message}</div>
      <Router>
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
          <Route path="/album/:id" element={<AlbumView />} />
          <Route path="/artist/:id" element={<ArtistView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
