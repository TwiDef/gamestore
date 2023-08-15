import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import CartBlock from '../CartBlock/CartBlock';

const Header = (props) => {
    return (
        <div className='header'>
            <div className="wrapper">
                <Link to='/' className='header__store-title'>Game Store</Link>
            </div>
            <div className="wrapper header__cart-btn-wrapper">
                <CartBlock />
            </div>
        </div>
    );
}

export default Header;