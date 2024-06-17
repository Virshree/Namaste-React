import React, { useEffect, useState } from 'react';
import { decrementItem, incrementItem } from '../utils/cartSlice';
import { useDispatch, useSelector, useStore } from "react-redux";

import { useDispatch } from 'react-redux';
import { CART_API } from '../utils/constants';

function Counter() {
  const [quantity, setQuantity] = useState(0);

  const cartItems = useSelector((store) => store.cart.items);
console.log(cartItems);
  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => prevQuantity - 1);
  };
// let quantity=0;


  
  return (

 
 <div className="mr-36 p-3">
      <span className="bg-gray-200 text-black rounded-xl p-3 m-2 cursor-pointer font-bold text-2xl">
        <button className="m-2 p-3" onClick={()=>handleDecrement()}>-</button>
        <button className="w-12 bg-gray-200 text-black">{quantity}</button>
        <button className="m-2 p-3" onClick={()=>handleIncrement()}>+</button>
      </span>



    </div>
  );
}

export default Counter;
