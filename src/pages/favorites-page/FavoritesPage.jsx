import React from 'react';
import './FavoritesPage.css';
import { useSelector } from 'react-redux';
import FavItem from '../../components/FavItem/FavItem';


const FavoritesPage = (props) => {
    const items = useSelector(state => state.favorites.itemsInFavorites)

    if (items.length < 1) {
        return <h1>В избранном пока что ничего нет.</h1>
    }
    return (
        <div className='favorite-page'>
            {items.map(game => <FavItem game={game} key={game.id} />)}
        </div>
    );
}

export default FavoritesPage;