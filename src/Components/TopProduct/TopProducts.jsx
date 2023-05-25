import React, { useEffect, useState } from 'react'
import './TopProducts.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { appendStringAfterLength } from '../../UtilityFunctions'


const TopProducts = () => {
    const [topProduct, setTopProducts] = useState([])
    useEffect(() => {
        axios.get(`/product/645b1c3bb5f32f212614414c`).then((res) => setTopProducts(res.data.products)).catch((e) => console.log(e))

    }, [])

    return (
        <div className="TopProducts">
            <div className="heading">

                <h3>Top Products</h3>

            </div>
            <div className="products">
                {topProduct.map((item, i) => (
                    <Product key={i} id={item._id} name={item.name} price={item.price} img={item.photos[0].secure_url} />
                ))}
            </div>
        </div>
    )
}
export const Product = ({ id, name, img, price }) => {
    const nav = useNavigate()
    const dispatch = useDispatch();
    const handleAddToCart = (e) => {
        e.preventDefault();
        const product = { id, name, img, price }
        dispatch({
            type: "addToCart",
            payload: product
        })

    }
    const pname = appendStringAfterLength(name, 50, ".....")
    return (
        <div className="product">
            <div>
                <img onClick={() => nav(`/product/${id}`)} src={img} alt="" className="pp" />
            </div>
            <h4 onClick={() => nav(`/product/${id}`)}>{pname}</h4>
            <p className='ppe'>₹ <h5>{price}</h5></p>

            <button onClick={handleAddToCart} className="lgbutton">add to cart</button>
        </div>
    )
}

export default TopProducts