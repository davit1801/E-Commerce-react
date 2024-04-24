import React from 'react';
import { useOutletContext } from 'react-router-dom';
import ProductList from '../components/ProductList';

const HomePage = () => {
  const [ addTocart] = useOutletContext();
  console.log(addTocart);
  return (
    <div className="py-8 px-10">
      <ProductList addTocart={addTocart} />
    </div>
  );
};

export default HomePage;
