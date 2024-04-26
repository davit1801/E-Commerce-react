import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiMiniShoppingCart } from 'react-icons/hi2';
import { FaShopify } from 'react-icons/fa';
import { CiLogout } from 'react-icons/ci';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';

const Header = ({ cartItems }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <header className="bg-neutral-800 header">
      <div className="max-w-5xl flex items-center justify-between py-4 px-10 m-auto main-header">
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
        <div className="relative shopping-basket">
          <HiMiniShoppingCart
            className="shop-cart-btn text-4xl"
            color="white"
          />
          <div className="cart-quantity text-xl text-bold">
            {cartItems.reduce((quantity, item) => quantity + item.quantity, 0)}
          </div>
        </div>
        <span className="text-white user-name">{user.email}</span>
        <CiLogout
          className="text-4xl cursor-pointer log-out"
          color="white"
          onClick={handleLogout}
        />
      </div>
    </header>
  );
};

export default Header;
