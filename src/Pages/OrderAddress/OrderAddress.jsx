import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import './OrderAddress.css'

const OrderAddress = () => {
    const nav = useNavigate();
    const cart = useSelector((state) => state.cart.cart)
    const [address, setAddress] = useState("")
    const [phoneNumber, setPhoneno] = useState("")

    const user = useSelector((state) => state.user.user)
    const [paymentRes, setPaymentRes] = useState(null)
    useEffect(() => {
        if (!cart.length) {
            nav("/")
        }
        if (paymentRes?.sucess) {
            nav("/")
        }
    }, [paymentRes])

    let products = cart.map((ele => (
        {
            productId: ele.id,
            count: ele.quantity,
            price: ele.price
        }
    )))

    const paynow=async(e)=>{
        e.preventDefault()
        // let dataToSend={
        //     products,
        //     coupon,
        //     address,
        //     phoneNumber
        // }
    }

    return (
        <div className="OrderDetails">
            <h2>ADD DETAILS</h2>
            <form  >
                <div className="frm">
                    <input
                        className="in1"
                        
                        placeholder="enter Phone No"
                        required={true}
                        onChange={(e)=>setPhoneno(e.target.value)}

                    />
                    <textarea
                        className="in1"
                        placeholder="Enter Address"
                        required={true}
                        onChange={(e)=>setAddress(e.target.value)}
                    />
                </div>
                <button onClick={paynow} className='lgbutton' >PayNow</button>
            </form>
        </div>
    )
}

export default OrderAddress