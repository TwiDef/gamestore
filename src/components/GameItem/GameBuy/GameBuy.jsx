import React from 'react';
import { useDispatch } from 'react-redux';
import './GameBuy.css';
import Button from '../../Button/Button';
import { setItemInCart } from '../../../redux/cart/reducer';

const GameBuy = ({ game }) => {
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.stopPropagation()
        dispatch(setItemInCart(game))
    }

    return (
        <div className='game-buy'>
            <span className='game-buy__price'>{game.price} руб.</span>
            <Button
                type="primary"
                onClick={handleClick}
            >
                В Корзину
            </Button>
        </div>
    );
}

export default GameBuy;