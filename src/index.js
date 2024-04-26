import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import SignPage from './pages/SignPage';
import Cart from './pages/Cart';
import Login from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="cart" element={<Cart />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="sign" element={<SignPage />} />
    </Routes>
  </BrowserRouter>
);
