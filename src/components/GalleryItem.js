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
    const itemKey = props.item.id ? props.item.id : null;
    const artistLink = props.item.artistId ? (
        <Link to={`/artist/${props.item.artistId}`}>{props.item.artistName}</Link>
    ) : null;

    const detailViewStyle = isDetailView
        ? {
            backgroundImage: props.item.artworkUrl100 ? `url(${props.item.artworkUrl100})` : 'none',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            color: 'red',
        }
        : null;

    return (
        <div onClick={toggleDetailView} className="gallery-item-container" key={itemKey}>
            <div className={`gallery-item ${itemStyle}`} style={detailViewStyle}>
                {isDetailView ? (
                    <div>
                        <h2>{props.item.trackName}</h2>
                        <h3>{artistLink}</h3>
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
        trackName: PropTypes.string.isRequired,
        collectionName: PropTypes.string,
        artistId: PropTypes.number.isRequired,
    }).isRequired,
};

export default GalleryItem;
