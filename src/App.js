import { useState, useRef } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { DataContext } from './context/DataContext'
import { SearchContext } from './context/SearchContext'

function App() {
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])
  let searchInput = useRef('')

  const API_URL = 'https://itunes.apple.com/search?term='

  const handleSearch = (e, term) => {
    e.preventDefault()
    // Fetch Data
    const fetchData = async () => {
      document.title = `${term} Music`
      const response = await fetch(API_URL + term)
      const resData = await response.json()
      if (resData.results.length > 0) {
        // Set State and Context value
        return setData(resData.results)
      } else {
        return setMessage('Not Found')
      }
    }
    fetchData()
  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        document.title = `${search} Music`
        const response = await fetch(API_URL + search)
        const resData = await response.json()
        if (resData.results.length > 0) {
          return setData(resData.results)
        } else {
          return setMessage('Not Found')
        }
      }
      fetchData()
    }
  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  return (
    <div>
      <SearchContext.Provider value={{
        term: searchInput,
        handleSearch: handleSearch
      }}>
        <SearchBar />
      </SearchContext.Provider>
      {message}
      <Gallery data={data} />
    </div>
  );
}

export default App;