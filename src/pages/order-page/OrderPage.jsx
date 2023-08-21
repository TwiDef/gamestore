import React from 'react';
import './OrderPage.css';
import { useSelector } from 'react-redux';
import { calcTotalPrice, enumerate } from '../../utils';
import OrderItem from '../../components/OrderItem/OrderItem';

const OrderPage = (props) => {
    const items = useSelector(state => state.cart.itemsInCart)

    if (items.length < 1) {
        return <h1>Ваша корзина пуста</h1>
    }

    return (
        <div className='order-page'>
            <div className="order-page__left">
                {items.map(game => <OrderItem game={game} key={game.id} />)}
            </div>
            <div className="order-page__right">
                <div className="order-page__total-price">
                    <span>
                        <b>{items.length} </b>
                        {enumerate(items.length, ['товар', 'товара', 'товаров'])} на сумму <b>{calcTotalPrice(items)}</b> руб.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default OrderPage;