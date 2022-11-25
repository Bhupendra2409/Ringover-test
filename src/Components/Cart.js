import React from 'react'
import { useSelector } from 'react-redux';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem';

import './styles/cart.css'

export default function Cart() {
  const cart = useSelector((state) => state.appSlice.cart);
  console.log(cart)
  return (
    <div className='big-cnt bs  sidebar o-2'>
      <div className="topbar">
        <div className="title fs-l fw-sb">Cart</div>
      </div>
      
        {cart.length ?
          <div className="my-cart-cnt">
          {cart.map((shoe) => {
            return <CartItem shoe={shoe} />
          })}
          </div>
          :
          <EmptyCart />
        }
      
      <button className='btn' id='checkout-btn'>Checkout</button>
    </div>
  )
}
