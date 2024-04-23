import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const [productData, setProductData] = useState({})
  const { id } = useParams();
  const API_URL = `https://fakestoreapi.com/products/${id}`;

  const fetchData = async (id) => {
    const response = await fetch(API_URL);
    const result = await response.json();
    setProductData(result);
    console.log(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
  <div>
    <h3>{productData.title}</h3>
  </div>
  )
};

export default ProductPage;
