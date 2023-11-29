// SearchBar.js

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
        </form>
    );
}

SearchBar.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
