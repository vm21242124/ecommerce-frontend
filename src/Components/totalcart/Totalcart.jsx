import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './Totalcart.css'
import { AiOutlineClose } from 'react-icons/ai'
import axios from 'axios'
const Totalcart = () => {
  const cart = useSelector((state) => state.cart.cart)

  const total = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const [coupon, setCoupons] = useState([])
  useEffect(() => {
    axios.get('/coupon/all').then((res) => setCoupons(res.data.coupons)).catch((e) => console.log(e.message))
  }, [])
  const [appliedcopon, setAppliedcoupon] = useState("")
  const [discount, setDiscount] = useState(0)

  return (
    <div className="totalprice">
      <div className="pricecmp">
        <h3>TOTAL PRICE</h3>
        <span style={{ color: "white" }}>₹ {discount!== 0? Math.floor(total - (total * (discount / 100))):total}</span>
      </div>
      <div className="coupons">
        <h4 style={{ color: "white" }}>Coupons</h4>
        <div className="cpns">
          {coupon.map((item, i) => (
            <div className="onecoupon" key={i}>
              <p onClick={() => { setAppliedcoupon(item?.code); setDiscount(item.discount) }}>{item?.code}</p>
            </div>
          ))}
        </div>


      </div>
      <button className="lgbutton">BUY NOW</button>
      <div className="appliedCoupons">
        <p>Applied Coupon</p>
        {appliedcopon !== "" ?
          <div className="cmp">
            <p>{appliedcopon} <AiOutlineClose style={{ cursor: "pointer" }} onClick={() => {setAppliedcoupon("");setDiscount(0)}} /></p>
          </div> : ""
        }
      </div>
    </div>
  )
}

export default Totalcart