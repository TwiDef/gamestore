import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { deleteItemFromCart } from '../../../../redux/cart/reducer';
import './CartItem.css';

const CartItem = ({ title, price, id, game }) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(deleteItemFromCart(game.id))
    }

    return (
        <div className='cart-item'>
            <span>{title}</span>
            <div className="cart-item__price">
                <span>{price} руб.</span>
                <AiOutlineCloseCircle
                    size={25}
                    className='cart-item__delete-icon'
                    onClick={handleClick} />
            </div>
        </div>
    );
}

export default CartItem;