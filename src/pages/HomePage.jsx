import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = 'https://fakestoreapi.com/products?limit=20';

const HomePage = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(API_URL);
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const  navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`product/${id}`)
  };


  return (
    <div className="products-list">
      {data.map((product) => {
        return (
          <div
            className="product-card"
            key={product.id}
            onClick={() => handleClick(product.id)}
          >
            <div className="product-img-wrapper">
              <img
                className="product-img"
                src={product.image}
                alt={product.title}
              />
            </div>
            <h3 className="product-title">{product.title}</h3>
            <span className="product-price">{product.price}</span>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
