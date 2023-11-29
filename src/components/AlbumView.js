import { useParams } from 'react-router-dom';
import React from 'react';

function AlbumView() {
    const { id } = useParams();

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Album Data Goes Here!</p>
        </div>
    );
}

export default AlbumView;
