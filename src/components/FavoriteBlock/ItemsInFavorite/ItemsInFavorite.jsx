import React from 'react';
import './ItemsInFavorite.css';

const ItemsInFavorite = ({ quantity = 0 }) => {
    return (
        <>
            {quantity > 0 ? <div className='items-in-favorite'>{quantity}</div> : null}
        </>
    );
}

export default ItemsInFavorite;
