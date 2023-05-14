import React from 'react'
import './UserCart.css'
import Navbar from '../../Components/Header/Navbar'
import { useSelector } from 'react-redux'
const UserCart = () => {
    return (
        <>
            <Navbar />
            <div className="usercart">
                <div className="heading">
                    <h3>CART</h3>
                </div>
                <div className="cart">

                    <div className="cartitems">
                        <CartItems />
                    </div>
                    <div className="cartprice">

                    </div>
                </div>

            </div>
        </>
    )
}
const CartItems = () => {
    const cartItems = useSelector((state) => state.cart.cart)
    console.log(cartItems);
    return (
        <>
            {cartItems.map((item, i) => (
                <div className="cart-item" key={i}>
                    <div className='scs'>
                        <img className='cart-item-image' src={item.img} alt="" />
                    </div>
                    <div className="cart-item-name">

                        <h4>{item.name}</h4>
                        <div className="item-info">

                            
                            <p>Price : <b>{item.price}</b></p>
                        </div>
                        <div className="item-info">
                            <button className='incbtnd'>-</button>
                            <p><b>{item.quantity}</b></p>
                            <button className='incbtni'>+</button>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}
export default UserCart