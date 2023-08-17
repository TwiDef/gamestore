import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './CartBlock.css';
import { BsCart } from 'react-icons/bs';
import CartMenu from './CartMenu/CartMenu';
import { calcTotalPrice } from '../../utils';
import ItemsInCart from './CartMenu/ItemsInCart/ItemsInCart';

const CartBlock = (props) => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = calcTotalPrice(items)

    return (
        <div className='cart-block'>
            <ItemsInCart quantity={items.length} />
            <BsCart
                size={25}
                className='cart-block__icon'
                onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} />

            {totalPrice > 0 ? <span className='cart-block__total-price'>{totalPrice} руб.</span> : null}
            {isCartMenuVisible && <CartMenu items={items} onClick={() => { }} />}
        </div>
    );
}

export default CartBlock;
