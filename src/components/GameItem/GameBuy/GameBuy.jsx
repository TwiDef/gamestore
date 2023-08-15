import React from 'react';
import './GameBuy.css';
import Button from '../../Button/Button';

const GameBuy = ({ game }) => {
    return (
        <div className='game-buy'>
            <span className='game-buy__price'>{game.price} руб.</span>
            <Button
                type="primary"
                onClick={() => null}
            >
                В Корзину
            </Button>
        </div>
    );
}

export default GameBuy;