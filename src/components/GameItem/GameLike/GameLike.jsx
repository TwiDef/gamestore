import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import './GameLike.css';
import { useDispatch, useSelector } from 'react-redux';
import { setItemInFavorites } from '../../../redux/favorites/reducer';
import { deleteItemFromFavorites } from '../../../redux/favorites/reducer';

const GameLike = ({ game }) => {
    const items = useSelector(state => state.favorites.itemsInFavorites)
    const isItemInFavorites = items.some(item => item.id === game.id)
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.stopPropagation()

        if (isItemInFavorites) {
            dispatch(deleteItemFromFavorites(game.id))
        } else {
            dispatch(setItemInFavorites(game))
        }

    }

    return (
        <div>
            {isItemInFavorites ?
                <AiFillHeart size={25} className='game-like__fill' onClick={handleClick} /> :
                <AiOutlineHeart size={25} className='game-like_outline' onClick={handleClick} />}
        </div>
    );
}

export default GameLike;