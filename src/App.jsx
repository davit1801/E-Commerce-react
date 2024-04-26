import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function App() {
  const token = localStorage.getItem('token');

  const [cartItems, setcartItmes] = useState(
    localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : []
  );
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  const addTocart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      alert('This Product is allready added');
    } else {
      setcartItmes([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
      {token ? (
        <div className="App flex flex-col justify-betwwen">
          <Header cartItems={cartItems} />
          <div className="max-w-5xl m-auto">
            <Outlet context={[addTocart, cartItems, setcartItmes]} />
          </div>
          <Footer />
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default App;
