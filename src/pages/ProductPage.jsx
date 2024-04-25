import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IoIosStarOutline } from 'react-icons/io';
import { BiSolidCartAdd } from 'react-icons/bi';
import { useOutletContext } from 'react-router-dom';

const ProductPage = (props) => {
  const { onAdd } = props;
  const [productData, setProductData] = useState({});
  const [productRate, setProductRate] = useState('');
  const [addTocart] = useOutletContext();
  const { id } = useParams();
  const API_URL = `https://fakestoreapi.com/products/${id}`;

  const { image, title, category, price, description } = productData;
  const starsArray = [];

  for (let i = 0; i < productRate; i++) {
    starsArray.push(<IoIosStarOutline className="text-xl" color="orange" />);
  }

  const fetchData = async (id) => {
    const response = await fetch(API_URL);
    const result = await response.json();
    setProductData(result);
    setProductRate(Math.round(result.rating.rate));
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div className="flex  gap-16 py-16 px-10">
      <div className="max-w-44 flex justify-center items-center">
        <img src={image} alt={title} className="" />
      </div>
      <div className="flex flex-col gap-y-3 ">
        <h3 className=" text-4xl ">{title}</h3>
        <div className="item-rating flex gap-x-4">{starsArray}</div>
        <p className="text-xl">
          <span className="font-bold ">Category</span>: {category}
        </p>
        <p className="text-xl">
          <span className="font-bold ">Price</span>: ${price}
        </p>
        <div
          className="flex items-center w-44 justify-between bg-red-500 rounded-lg px-3 cursor-pointer "
          onClick={() => addTocart(productData)}
        >
          <span className="text-white">ADD TO CART</span>
          <BiSolidCartAdd className="text-4xl" color="white" onClick={onAdd} />
        </div>
        <div className="w-4/5">
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
