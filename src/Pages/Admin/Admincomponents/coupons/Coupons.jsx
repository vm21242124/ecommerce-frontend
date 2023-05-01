import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Coupons = () => {
  const [name,setName]=useState("")
  const [discount,setDiscount ]=useState("") 
  const [coupon,setCoupon]=useState([])
  console.log(coupon);
  const handleSubmit =(e)=>{
    e.preventDefault();
    
     axios.post('/coupon/create',{name,discount}).then((res)=>{
      if(res.status===200){
        alert("coupon created successfully")
        console.log(res.data);
      }
     }).catch((e)=>console.log(e))
    
  }
  useEffect(()=>{
    axios.get('/coupon/all').then((res)=>setCoupon(res.data.coupons)).catch(e=>console.log(e))
  }
  )
  return (
    <div className="createproductForm">
      <h1>create coupon</h1>
      <form method='POST' onSubmit={handleSubmit}>
        <div className="createproduct">

          <input
            className="in1"
            placeholder="Coupon name"
            onChange={(e)=>setName(e.target.value)}
            required={true}
          />
         <input
            className="in1"
            placeholder="Discount"
            onChange={(e)=>setDiscount(e.target.value)}
            required={true}
          />
        </div>
        <div className="bn">

          <button type="submit" className="createproductbtn">
            Create coupon
          </button>
        </div>
      </form>
        <h1>All Coupons</h1>
      <div className="allavailablecartegories">
      {coupon.length!==0 ? coupon.map((item,i)=>(
          <div className='collections' key={i}>
            <span>{item.code}</span>
          </div>
        )):
        <div><span>coupons not available create one now</span></div>
      }
      </div>
    </div>
  )
}

export default Coupons