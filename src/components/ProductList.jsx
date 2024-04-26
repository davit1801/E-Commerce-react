import React, { useEffect, useState } from 'react';
import Product from './Product';

const API_URL = 'https://fakestoreapi.com/products';

const ProductList = ({ addTocart }) => {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(10);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 10);
  };

  const fetchData = async () => {
    const response = await fetch(API_URL);
    const result = await response.json();
    console.log(result);
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2 className="text-center text-6xl py-2">Products</h2>
      <div className="flex flex-wrap gap-x-20 gap-y-10 justify-start product-list">
        {data.slice(0, visible).map((product, index) => {
          return (
            <Product product={product} key={index} addTocart={addTocart} />
          );
        })}
      </div>
      {visible >= data.length ? null : (
        <div className="flex ">
          <button
            onClick={showMoreItems}
            className="text-xl bg-red-600 text-white py-1 px-3 rounded-2xl my-10 mx-auto"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default ProductList;
