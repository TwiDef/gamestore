import React from 'react';
import './FavItem.css';
import GameCover from '../GameItem/GameCover/GameCover';

const FavItem = ({ game }) => {
    return (
        <div className='fav-item'>
            <div className='fav-item__cover'>
                <GameCover image={game.image} />
            </div>
            <div className="fav-item__about">
                <div className="fav-item__title">
                    <span>{game.title}</span>
                </div>
                <div className="fav-item__descr">
                    <p>{game.description}</p>
                </div>
            </div>

        </div>
    );
}

export default FavItem;
