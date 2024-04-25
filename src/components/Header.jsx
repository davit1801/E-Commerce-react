import React from 'react';
import { Link } from 'react-router-dom';
import { HiMiniShoppingCart } from 'react-icons/hi2';
import { FaShopify } from 'react-icons/fa';

const Header = ({ cartItems }) => {
  return (
    <header className="bg-neutral-800 header">
      <div className="max-w-5xl flex items-center justify-between py-4 px-10 m-auto ">
        <Link to="/">
          <FaShopify className="text-6xl" color="white" />
        </Link>
        <nav className="text-slate-50">
          <ul className="flex w-96 text-xl justify-between">
            <li>
              <Link to="/" className="nav-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/cart" className="nav-item">
                Shopping Cart
              </Link>
            </li>
          </ul>
        </nav>
        <div className='relative'>
          <HiMiniShoppingCart
            className="shop-cart-btn text-5xl"
            color="white"
          />
          <span className="cart-quantity text-smd text-bold">{cartItems.reduce((quantity, item) => quantity + item.quantity, 0)}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
