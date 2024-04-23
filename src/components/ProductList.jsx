import React, { useEffect, useState } from 'react';
import Product from './Product';

const API_URL = 'https://fakestoreapi.com/products?limit=20';

const ProductList = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(API_URL);
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2 className='text-center text-6xl py-2'>Products</h2>
        <div className="flex flex-wrap gap-x-20 gap-y-20 justify-center">
      {data.map((product) => {
        return <Product product={product} />;
      })}
    </div>
    </>

  );
};

export default ProductList;
