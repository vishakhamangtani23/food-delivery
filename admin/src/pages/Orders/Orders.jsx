import React, { useContext, useState, useEffect } from 'react'
import './Orders.css'
import {toast} from "react-toastify"
import axios from 'axios'
import { assets } from '../../assets/assets'
import assert from 'assert'
const Orders = ({url}) => {
  const [orders,setOrders] = useState([]);
  const fetchOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if(response.data.success){
      setOrders(response.data.data);
    }
    else
    {
      toast.error("Error")
    }
  }
  const statusHandler = async(event , orderId) =>{
    const response = await axios.post(url + "/api/order/status",{orderId,status:event.target.value})
    if(response.data.success){
      toast.success("Updated")
      await fetchOrders();
    }
    else{
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchOrders();
  }, [])


  return (
    <div className='order add'>
      <h3>order Page</h3>
      <div className="order-list">
        {orders.map(
          (order,index) =>(
            <div key = {index} className='order-item'>
              <img src={assets.parcel_icon} alt="" />
              <div>
                <p className="order-item-food">
                  {order.items.map((item,index)=>{
                    if(index===order.items.length-1){
                      return item.name + " x " + item.quantity
                    }
                    else{
                      return item.name + " x " + item.quantity + ", "
                    
                    }

                  })}
                </p>
                <p className="order-item-name">
                  {order.address.firstName + " "+order.address.lastName}
                </p>
                <div className="order-item-address">
                  <p>{order.address.street}</p>
                 <p> {  order.address.city + ", " + order.address.state + ", " + order.address.zipcode + ", " + order.address.country}</p>
                </div>
                <p className="order-item-phone">{order.address.phone}</p>
              </div>
              <p>
                Items : {order.items.length}
              </p>
              <p>
                Rs. {order.amount}
              </p>
              <select onChange={(event)=>{
statusHandler(event,order._id)
              }} value={order.status} name="" id="">
                <option value="pending">pending</option>
                <option value="Out for Delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          )
        )}
      </div>

    </div>
  )
}
export default Orders
