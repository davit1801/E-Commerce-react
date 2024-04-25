import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSolidCartAdd } from 'react-icons/bi';

const Product = ({ product, addTocart }) => {
  const handleClick = (id) => {
    navigate(`product/${id}`);
  };

  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-y-3 items-center">
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
        <h3 className="product-title text-center text-xl font-medium text-zinc-600">
          {product.title}
        </h3>
        <div className="flex justify-center items-center">
          <p className="product-price text-center font-bold text-xl ">
            ${product.price}
          </p>
        </div>
      </div>
      <div className="add-btn" onClick={() => addTocart(product)}>
        <BiSolidCartAdd className="text-3xl" />
        <p>ADD TO CART</p>
      </div>
    </div>
  );
};

export default Product;
