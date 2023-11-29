<<<<<<< HEAD
import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

function Searchbar() {
    const { term, handleSearch } = useContext(SearchContext)

    return (
        <form >
            <input ref={term} type="text" placeholder="Enter a search term here" />
            <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
=======
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSearch(e, searchTerm);
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar-container">
            <input
                type="text"
                placeholder="Type Here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <input type="submit" />
>>>>>>> d75f6d710a830d84d879120ec1e889070be430f0
        </form>
    );
}

<<<<<<< HEAD
export default Searchbar
=======
SearchBar.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
>>>>>>> d75f6d710a830d84d879120ec1e889070be430f0
