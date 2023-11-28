import React from 'react';
import GalleryItem from './GalleryItem';

function Gallery(props) {
    const { data } = props;

    if (!data || data.length === 0) {
        return <div>No items to display</div>;
    }

    const display = data.map((item) => (
        <GalleryItem item={item} key={item.id} />
    ));

    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '5px', 
    };

return <div style={containerStyle}>{display}</div>;
}

export default Gallery;
