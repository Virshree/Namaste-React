import React, { useState } from 'react'
import ItemList from './ItemList'
import { useDispatch, useSelector } from 'react-redux'

import { clearCart } from '../utils/cartSlice'

const Cart = () => {
  const [showClear,setShowClear]=useState('');

    const cartItems=useSelector((store)=>store.cart.items);

    const disptach=useDispatch();

    const handleClearCart = ()=>{
        disptach(clearCart());
        setShowClear(!showClear);
    }
  return (
    <div className='text-center m-4 p-4'>
          <button className="m-3 p-2 bg-black text-white font-bold text-xl"
           onClick={handleClearCart}>Clear Cart</button>
           {showClear && <p className='text-xl'>Cart is empty.Add Items to cart</p>}
        
        <div className='w-6/12 m-auto p-2 bg-white-400'>
     
        <ItemList data={cartItems}/>
        </div>
    </div>
  )
}

export default Cart