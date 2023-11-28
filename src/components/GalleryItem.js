import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function GalleryItem(props) {
    const [isDetailView, setDetailView] = useState(false);

    const simpleStyle = {
        width: 'auto',
        height: 'auto',
        border: '1px solid black',
        margin: '2px',
    };

    const detailStyle = {
        width: 'auto',
        height: 'auto',
        border: '1px solid black',
        margin: '2px',
        backgroundImage: `url(${props.item.artworkUrl100})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        color: 'yellow',
    };

    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, auto)',
        gap: '5px', 
    };

    const simpleView = () => (
        <div style={containerStyle}>
            <div style={simpleStyle}>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        </div>
    );

    const detailView = () => (
        <div style={containerStyle}>
            <div style={detailStyle}>
                <h2>{props.item.trackName}</h2>
                <h3>
                    <Link to={`/artist/${props.item.artistId}`}>
                        {props.item.artistName}
                    </Link>
                </h3>
                <h3>
                    <Link to={`/album/${props.item.collectionId}`}>
                        {props.item.collectionName}
                    </Link>
                </h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        </div>
    );

    return (
        <div onClick={() => setDetailView(!isDetailView)} style={{ display: 'inline-block' }}>
            <div className="gallery-item">
                {isDetailView ? detailView() : simpleView()}
            </div>
        </div>
    );
}

GalleryItem.propTypes = {
    item: PropTypes.shape({
        trackName: PropTypes.string.isRequired,
        collectionName: PropTypes.string.isRequired,
        artistId: PropTypes.number.isRequired,
    }).isRequired,
};

export default GalleryItem;
