import React from 'react'
import CartItems from '../components/Cart/CartItems'
import CheckoutForm from '../components/CheckoutForm'
import { useSelector } from 'react-redux'
import "./styles/Checkout.css"

export default function Checkout() {
  const cartData = useSelector((state) => state.cart);

  function handleCheckout(e) {
    e.preventDefault();
    console.log(e.target[3].value)
  }

  return (
    <div className='checkout-container'>
      <section className="checkout-area">
            <CheckoutForm onSubmit={handleCheckout}/>
            <div className="purchase-summary">
              <h2 className="summary-text">Your Order</h2>
              <CartItems />
              <div className='order-prices'>
                <p>Total: <span className='price'>{cartData.total} €</span></p>
                <p>Shipping: <span className='price'>{(cartData.contents.length * 10).toFixed(2)} €</span></p>
                <p className='grand-total'>Grand Total: <span className='price'>{(Number(cartData.total) + (cartData.contents.length * 10)).toFixed(2)} €</span></p>
              </div>
              <button className='order-button' type="submit" form="checkout-form">Order</button>
            </div>
        </section>
    </div>
  )
}
