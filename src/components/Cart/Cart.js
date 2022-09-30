import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CartItems from './CartItems'
import close from '../../assets/close.svg';

export default function Cart({setCartOpen}) {
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cart);

  return (
    <div className='shopping-cart-container'>
        <div className='cart-wrap'>
            <header className='cart-header'>
              <h2>Your Cart</h2>
              <img src={close} alt='close cart' onClick={() => setCartOpen(false)}/>
            </header>
            <div className='cart-items-container'>
              <CartItems setCartOpen={setCartOpen}/>
            </div>
            <div className='cart-checkout'>
              <p className='cart-total'>Total: <span className='price'>{cartData.total} €</span></p>
              <button className='cart-button' onClick={() => {navigate('/checkout'); setCartOpen(false)}}>Checkout</button>
            </div>
        </div>
    </div>
  )
}
