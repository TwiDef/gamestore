import React, { useCallback } from 'react';
import './FavoriteBlock.css';
import { AiOutlineHeart } from 'react-icons/ai'
import ItemsInFavorite from './ItemsInFavorite/ItemsInFavorite';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setIsCartMenuVisible } from '../../redux/cart/reducer';

const FavoriteBlock = (props) => {
    const favItems = useSelector(state => state.favorites.itemsInFavorites)
    const itemsInCart = useSelector(state => state.cart.itemsInCart)
    const history = useHistory()
    const dispatch = useDispatch()

    const handleClick = useCallback(() => {
        if (itemsInCart > 1) {
            dispatch(setIsCartMenuVisible())
        }

        history.push('/favorites')
    }, [history])

    return (
        <div className='favorite-block'>
            <ItemsInFavorite quantity={favItems.length} />
            <AiOutlineHeart size={25} onClick={handleClick} />
        </div>
    );
}

export default FavoriteBlock;