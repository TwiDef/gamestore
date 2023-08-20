import React from 'react';
import './OrderItem.css';
import { useDispatch } from 'react-redux';
import GameCover from '../GameItem/GameCover/GameCover';

const OrderItem = ({ game }) => {
    const dispatch = useDispatch()

    return (
        <div className='order-item'>
            <div className="order-item__cover">
                <GameCover image={game.image} />
            </div>
            <div className="order-item__title">
                <span>{game.title}</span>
            </div>
            <div className="order-item__price">
                <span>{game.price} руб.</span>
            </div>
        </div>
    );
}

export default OrderItem;