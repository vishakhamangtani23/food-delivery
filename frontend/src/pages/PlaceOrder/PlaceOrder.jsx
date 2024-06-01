import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">
          delivery Information
        </p>
        <div className="multi-fields">
          <input type="
          " placeholder='First name' />
          <input type="text" placeholder='last Name' />
        </div>
        <input type="email" placeholder='Email Address'/>
        <input type="text" placeholder='Street'/>
      
      <div className="multi-fields">
          <input type="
          " placeholder='city' />
          <input type="text" placeholder='state' />
        </div>
        <div className="multi-fields">
          <input type="
          " placeholder='zipcode' />
          <input type="text" placeholder='country' />
        </div>
        <input type="text" placeholder='phone' /></div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs.{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs.{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs.{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button >Proceed To payment</button>
        </div>
      </div>

    </form>
  )
}

export default PlaceOrder
