import React from 'react'
import './EmptyCart.css'
const EmptyCart = () => {
  return (
    <div className="emptycart">
        <h2 style={{color:"violet"}}>Your cart is empty</h2>
        <p>Please add some product to your cart</p>
    </div>
  )
}

export default EmptyCart