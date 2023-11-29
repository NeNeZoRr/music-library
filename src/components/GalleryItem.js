import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../App.css';

function GalleryItem(props) {
    const [isDetailView, setDetailView] = useState(false);

    const toggleDetailView = () => {
        setDetailView(!isDetailView);
    };

    const itemStyle = isDetailView ? 'gallery-item-detail' : 'gallery-item-simple';

    return (
        <div onClick={toggleDetailView} className="gallery-item-container" key={props.item.id}>
            <div className={`gallery-item ${itemStyle}`}>
                {isDetailView ? (
                    <div>
                        <h2>{props.item.trackName}</h2>
                        <h3>
                            <Link to={`/artist/${props.item.artistId}`}>{props.item.artistName}</Link>
                        </h3>
                        <h3>
                            <Link to={`/album/${props.item.collectionId}`}>{props.item.collectionName}</Link>
                        </h3>
                        <h4>{props.item.primaryGenreName}</h4>
                        <h4>{props.item.releaseDate}</h4>
                    </div>
                ) : (
                    <div>
                        <h3>{props.item.trackName}</h3>
                        <h4>{props.item.collectionName}</h4>
                    </div>
                )}
            </div>
        </div>
    );
}

GalleryItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        trackName: PropTypes.string.isRequired,
        collectionName: PropTypes.string.isRequired,
        artistId: PropTypes.number.isRequired,
    }).isRequired,
};

export default GalleryItem;
