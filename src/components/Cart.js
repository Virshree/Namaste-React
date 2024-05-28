import React from 'react'
import ItemList from './ItemList'
import { useDispatch, useSelector } from 'react-redux'

import { clearCart } from '../utils/cartSlice'

const Cart = () => {
    const cartItems=useSelector((store)=>store.cart.items);

    const disptach=useDispatch();

    const handleClearCart = (data)=>{
        disptach(clearCart(data));
    }
  return (
    <div className='text-center m-4 p-4'>
          <button className="m-3 p-2 bg-black text-white font-bold text-xl"
           onClick={handleClearCart}>Clear Cart</button>
        <div className='w-6/12 m-auto p-2 border border-b-2 shadow-lg bg-white-400'>
          
        <ItemList data={cartItems}/>
        </div>
    </div>
  )
}

export default Cart