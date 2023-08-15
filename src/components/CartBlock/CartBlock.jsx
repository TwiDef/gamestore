import React from 'react';
import './CartBlock.css';
import { BsCart } from 'react-icons/bs';

const CartBlock = (props) => {
    return (
        <div className='cart-block'>
            <BsCart size={25} className='cart-block__icon' />
            <span className='cart-block__total-price'>2355 руб</span>
        </div>
    );
}

export default CartBlock;
