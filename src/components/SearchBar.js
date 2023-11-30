import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function SearchBar({ handleSearch, clearSearchTerm }) {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setSearchTerm('');
    }, [clearSearchTerm]);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(e, searchTerm);
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
        </form>
    );
}

SearchBar.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    clearSearchTerm: PropTypes.bool.isRequired,
};

export default SearchBar;
