<<<<<<< HEAD
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import GalleryItem from './GalleryItem'

function Gallery() {
    const data = useContext(DataContext)

    const display = data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })
    return (
        <div>
            {display}
        </div>
    )
=======
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
        backgroundColor: '#595959',
        color: 'red',
    };

    return <div style={containerStyle}>{display}</div>;
>>>>>>> d75f6d710a830d84d879120ec1e889070be430f0
}

export default Gallery;
