import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CartBlock.css';
import { BsCart } from 'react-icons/bs';
import CartMenu from './CartMenu/CartMenu';
import { calcTotalPrice } from '../../utils';
import ItemsInCart from './CartMenu/ItemsInCart/ItemsInCart';
import { useHistory } from 'react-router-dom';
import { setIsCartMenuVisible } from '../../redux/cart/reducer';

const CartBlock = (props) => {

    const isCartMenuVisible = useSelector(state => state.cart.isCartMenuVisible)
    const items = useSelector(state => state.cart.itemsInCart)
    const dispatch = useDispatch()
    const totalPrice = calcTotalPrice(items)
    const history = useHistory()

    const handleClick = useCallback(() => {
        dispatch(setIsCartMenuVisible())
        history.push('/order')
    }, [history])

    return (
        <div className='cart-block'>
            <ItemsInCart quantity={items.length} />
            <BsCart
                size={25}
                className='cart-block__icon'
                onClick={() => dispatch(setIsCartMenuVisible())}
            />

            {totalPrice > 0 ? <span className='cart-block__total-price'>{totalPrice} руб.</span> : null}
            {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
        </div>
    );
}

export default CartBlock;
