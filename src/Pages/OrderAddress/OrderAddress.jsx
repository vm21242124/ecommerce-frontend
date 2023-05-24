import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import './OrderAddress.css'
import axios from 'axios'
const OrderAddress = () => {
    const nav = useNavigate();
    const cart = useSelector((state) => state.cart.cart)
    const appliedCoupon = useSelector((state) => state.coupon.appliedCopon)
    const dispatch=useDispatch()
    const [address, setAddress] = useState("")
    const [phoneNumber, setPhoneno] = useState("")
    
    const user = useSelector((state) => state.user.user)
    const [paymentRes, setPaymentRes] = useState(null)
    let products = cart.map((ele => (
        {
            productId: ele.id,
            count: ele.quantity,
            price: ele.price
        }
    )))
    useEffect(() => {
        if (!cart.length) {
            nav("/")
        }
        if (paymentRes===200) {
            nav("/paymentSuccess")
        }
    }, [paymentRes])

    

    const paynow = async (e) => {
        e.preventDefault()

        let dataToSend = {
            products,
            coupon: appliedCoupon,
            address,
            phoneNumber
        }
        // console.log(dataToSend);
        try {
            const { data: { key } } = await axios.get("/order/getkey")

            const { data: { order, userOrderId } } = await axios.post("/order/checkout", dataToSend)
            const options = {
                key,
                amount: order.amount,
                currency: "INR",
                name: "Shopee",
                description: "Delivering Quality",
                image: "https://learnyst-user-assets.s3.ap-south-1.amazonaws.com/school-assets/schools/2410/schoolLogo/1657573685244Custom%20Size%20%E2%80%93%201.png",
                order_id: order.id,
                "handler": function (res) {
                    console.log(res);
                    axios.post("/order/paymentverification", {
                        razorpay_order_id:res.razorpay_order_id,
                        razorpay_payment_id:res.razorpay_payment_id,
                        razorpay_signature:res.razorpay_signature,
                        userOrderId
                    }).then((resp)=>setPaymentRes(resp.status)).catch(e=>console.log(e.message))
                },
                prefill: {
                    "name": user.name,
                    "email": "vm21242124@gmail.com",
                    "contact": "9993339991"
                },
                notes: {
                    "address": "Razorpay Corporate Office"
                },
                theme: {
                    "color": "#3399cc"
                }

            }
            const razor = new window.Razorpay(options);
            razor.open()

        } catch (error) {

            console.log(error.message);
        }
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
                        onChange={(e) => setPhoneno(e.target.value)}

                    />
                    <textarea
                        className="in1"
                        placeholder="Enter Address"
                        required={true}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <button onClick={paynow} className='lgbutton' >PayNow</button>
            </form>
        </div>
    )
}

export default OrderAddress