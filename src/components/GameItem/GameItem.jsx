import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import GameCover from './GameCover/GameCover';
import GameBuy from './GameBuy/GameBuy';
import GameGenre from './GameGenre/GameGenre';
import { setCurrentGame } from '../../redux/games/reducer';
import './GameItem.css';


const GameItem = ({ game }) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setCurrentGame(game))
        history.push(`/app/${game.title}`)
    }

    return (
        <div className='game-item' onClick={handleClick}>
            <GameCover image={game.image} />
            <div className='game-item__details'>
                <span className='game-item__title'>{game.title}</span>
                <div className='game-item__genre'>
                    {
                        game.genres.map(genre => <GameGenre genre={genre} key={genre} />)
                    }
                </div>
                <div className='game-item__buy'>
                    <GameBuy game={game} />
                </div>
            </div>
        </div>
    );
}

export default GameItem;