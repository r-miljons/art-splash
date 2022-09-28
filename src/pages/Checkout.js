import React from 'react'
import CheckoutForm from '../components/CheckoutForm'
import "./styles/Checkout.css"

export default function Checkout() {
  return (
    <div className='checkout-container'>
      <section className="checkout-area">
            <CheckoutForm/>
            <div className="purchase-summary">
              <h2 className="summary-text">Your Order</h2>
              <button className='order-button'>Order</button>
            </div>
        </section>
    </div>
  )
}
