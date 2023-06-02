import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PaymentSucess.css'
import { useDispatch } from 'react-redux'

const PaymentSucess = () => {
  const nav=useNavigate()
  const dispatch=useDispatch()
  useEffect(()=>{
    const timeout=setTimeout(()=>{
      dispatch({
        type:"clearCart"
      })
      nav("/");
    },5000)
    return ()=>{
      clearTimeout(timeout)
    }
  },[])
  return (
    <div className="paymentSuccess">
      <h1>PAYMENT SUCCESSFULL</h1>
      <p>you will be redirected !!! please wait</p>
    </div>
)
}

export default PaymentSucess