import React from 'react'
import './UserCart.css'
import Navbar from '../../Components/Header/Navbar'
import { useDispatch, useSelector } from 'react-redux'
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
    const dispatch=useDispatch();
    const decrementQuantity=(item)=>{
        console.log(item);
        dispatch({
            type:"removeFromCart",
            payload:item
        })
    }
    const incrementQuantity=(item)=>{
        console.log(item);
        dispatch({
            type:"addToCart",
            payload:item
        })
    }
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
                            <button onClick={()=>decrementQuantity(item)} className='incbtnd'>-</button>
                            <p><b>{item.quantity}</b></p>
                            <button onClick={()=>incrementQuantity(item)} className='incbtni'>+</button>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}
export default UserCart