import React, { useState, useEffect } from 'react';
import { useParams, Link,} from 'react-router-dom';

function ArtistView({ handleHome }) {
    const [artistData, setArtistData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `http://localhost:4000/album/${id}`;
                const response = await fetch(url);
                const data = await response.json();

                const albums = data.results.filter((item) => item.collectionType === 'Album');
                setArtistData(albums);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    const albumDisplay = artistData.map((album) => (
        <div key={album.collectionId}>
            <Link to={`/album/${album.collectionId}`}>
                <p>{album.collectionName}</p>
            </Link>
        </div>
    ));

    return (
        <div>
            <p>Artist Data Goes Here!</p>
            <p>ID: {id}</p>
            <Link to="/" onClick={handleHome}>
                Back to Home
            </Link>
            {artistData.length === 0 ? <p>Loading...</p> : albumDisplay}
        </div>
    );
}

export default ArtistView;