import React from 'react';
import './GameCover.css';

const GameCover = ({ image = "" }) => {
    return (
        <div className='game-cover' style={{ backgroundImage: `url(${image})` }}>

        </div>
    );
}

export default GameCover;