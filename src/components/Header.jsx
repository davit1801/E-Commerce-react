import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMiniShoppingCart } from 'react-icons/hi2';
import { FaShopify } from 'react-icons/fa';

const Header = () => {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header className="bg-neutral-800">
      <div className="max-w-5xl flex items-center justify-between p-4 m-auto ">
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
              <Link to="/product" className="nav-item">
                Product
              </Link>
            </li>
          </ul>
        </nav>
        <HiMiniShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-btn text-4xl text-slate-50 ${
            cartOpen && 'active'
          }`}
        />
        {cartOpen && <div className="shop-cart"></div>}
      </div>
    </header>
  );
};

export default Header;
