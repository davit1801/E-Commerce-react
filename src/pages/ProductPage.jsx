import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  const API_URL = `https://fakestoreapi.com/products/${id}`;

  const fetchData = async (id) => {
    const response = await fetch(API_URL);
    const result = await response.json();
    console.log(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>ProductPage</div>;
};

export default ProductPage;
