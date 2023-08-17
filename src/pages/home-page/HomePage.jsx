import React from 'react';
import './HomePage.css'
import { GAMES } from '../../data/data.js';
import GameItem from '../../components/GameItem/GameItem';

const HomePage = (props) => {
    return (
        <div className='home-page'>
            {GAMES.map(game => <GameItem game={game} key={game.id} />)}
        </div>
    );
}

export default HomePage;