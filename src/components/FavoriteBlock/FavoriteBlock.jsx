import React from 'react';
import './FavoriteBlock.css';
import { AiOutlineHeart } from 'react-icons/ai'
import ItemsInFavorite from './ItemsInFavorite/ItemsInFavorite';
import { useSelector } from 'react-redux';

const FavoriteBlock = (props) => {
    const items = useSelector(state => state.favorites.itemsInFavorites)
    console.log(items)
    return (

        <div className='favorite-block'>
            <ItemsInFavorite quantity={items.length} />
            <AiOutlineHeart size={25} />
        </div>
    );
}

export default FavoriteBlock;