import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PaymentSucess.css'

const PaymentSucess = () => {
  const nav=useNavigate()

  useEffect(()=>{
    const timeout=setTimeout(()=>{
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