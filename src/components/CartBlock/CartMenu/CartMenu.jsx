import React from 'react';
import { calcTotalPrice } from '../../../utils';
import Button from '../../Button/Button';
import CartItem from './CartItem/CartItem';
import { clearCart } from './../../../redux/cart/reducer';
import './CartMenu.css';
import { useDispatch } from 'react-redux';

const CartMenu = ({ items, onClick }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(clearCart())
    }

    return (
        <div className='cart-menu'>
            <div className="cart-menu__games-list">
                {
                    items.length > 0 ?
                        items.map(game => <CartItem
                            key={game.title}
                            price={game.price}
                            title={game.title}
                            game={game}
                            id={game.id} />) : "Корзина пуста"
                }
            </div>
            {
                items.length > 0 ?
                    <div className='cart-menu__arrange'>
                        <div className="cart-menu__total-price">
                            <span>Итого:</span>
                            <span>{calcTotalPrice(items)} руб.</span>
                        </div>
                        <div className="cart-menu__btns">
                            <Button type="primary" size="m" onClick={onClick} >
                                Оформить заказ
                            </Button>
                            <Button type="secondary" size="m" onClick={handleClick}>
                                Очистить корзину
                            </Button>
                        </div>
                    </div>
                    : null
            }
        </div>
    );
}

export default CartMenu;