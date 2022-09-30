import React from 'react'

export default function CheckoutForm({onSubmit}) {


  return (
    <div className="shipping-form">
        <h1 className="checkout-text">Checkout</h1>
        <form action="" method="post" id="checkout-form" onSubmit={onSubmit}>
            <p className="section-info">Billing details</p>
            <div className="form-grid">
                <div className="grid-section">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="" required/>
                </div>
                <div className="grid-section">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" placeholder="" required/>
                </div>
                <div className="grid-section">
                    <label htmlFor="number">Number</label>
                    <input type="tel" minLength="8" id="number" placeholder="" required/>
                </div>
            </div>
            <p className="section-info">Shipping info</p>
            <div className="form-grid">
                <div className="grid-section">
                    <label htmlFor="country">Country</label>
                    <select defaultValue="default " id="country" name="country" required>
                        <option value="default">Select a Country</option>
                        <option value="AT">Austria</option>
                        <option value="BY">Belarus</option>
                        <option value="BE">Belgium</option>
                        <option value="BG">Bulgaria</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="DK">Denmark</option>
                        <option value="EE">Estonia</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        <option value="GR">Greece</option>
                        <option value="GL">Greenland</option>
                        <option value="HU">Hungary</option>
                        <option value="IS">Iceland</option>
                        <option value="IT">Italy</option>
                        <option value="LV">Latvia</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LT">Lithuania</option>
                        <option value="MC">Monaco</option>
                        <option value="NL">Netherlands</option>
                        <option value="NO">Norway</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="SK">Slovakia</option>
                        <option value="SI">Slovenia</option>
                        <option value="ES">Spain</option>
                        <option value="SE">Sweden</option>
                        <option value="UA">Ukraine</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US">USA</option>
                    </select>
                </div>
                <div className="grid-section">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" placeholder="" required/>
                </div>
                <div className="grid-section">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" placeholder="" required/>
                </div>
                <div className="grid-section">
                    <label htmlFor="zip">Zip Code</label>
                    <input type="text" id="zip" placeholder="" required/>
                </div>
            </div>
            <p className="section-info">Payment Method</p>
            <div className="payment">
                <div className="payment-method">
                    <input className="radio" type="radio" name="pay" id="bank" value="Bank Transfer" defaultChecked/>
                    <label className="radio" htmlFor="bank">Bank Transfer</label>
                </div>
                <div className="payment-method">
                    <input className="radio" type="radio" name="pay" id="mail" value="Mail Money"/>
                    <label className="radio" htmlFor="mail">Mail Money</label>
                </div>
            </div>
        </form>
    </div>
  )
}
