import React from 'react';
import FavoriteItem from './FavoriteItem';

export default function FavoriteList({ value, favorites }) {

    // const favorites = JSON.parse(localStorage.getItem('fav'));
    
    return (
        <div className='container-fluid'>
            {favorites.map(item => {
                return <FavoriteItem key={item.id} item={item} value={value} />
            })}
            
        </div>
    )
}
