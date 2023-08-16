import React from 'react';
import { useSelector } from 'react-redux';
import './CartBlock.css';
import { BsCart } from 'react-icons/bs';
import CartMenu from './CartMenu/CartMenu';
import { calcTotalPrice } from '../../utils';

const CartBlock = (props) => {
    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = calcTotalPrice(items)

    return (
        <div className='cart-block'>
            <BsCart size={25} className='cart-block__icon' />
            <span className='cart-block__total-price'>{totalPrice} руб</span>
            <CartMenu items={items} onClick={() => { }} />
        </div>
    );
}

export default CartBlock;
