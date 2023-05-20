import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductPage.css'
import Navbar from '../../Components/Header/Navbar'
import { useDispatch } from 'react-redux'
import TopProducts from '../../Components/TopProduct/TopProducts'
const ProductPage = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [img, setImg] = useState("")
    const dispatch=useDispatch()
    useEffect(() => {
        axios.get(`/product/id/${id}`).then((res) => {
            setProduct(res.data.product)
            setImg(product.photos[0].secure_url)
        }).catch((e) => console.log(e.message))

    })
    const AddToCart=(e)=>{
        e.preventDefault();
        const pr={id:product._id,name:product.name,img,price:product.price}
        console.log(pr);
        dispatch({
            type:"addToCart",
            payload:pr
        })
    }
    // console.log(product);
    return (
        <>
            <Navbar />
            <div className="productPage">
                <div className="productPage_product">

                    <div className="img1">
                        <img className='ppageimg' src={img} alt="product " />
                        <button onClick={AddToCart} className="lgbutton">ADD TO CART</button>
                    </div>
                    {/* <img className='ppageimg' src={product.photos[0].secure_url} alt="" /> */}

                    <div className="product_info">
                        <h3>{product.name}</h3>
                        <h4>price : {product.price} ₹</h4>
                        <p>description : {product.description}</p>
                    </div>
                </div>
            </div>
            <div className="productPageRecom">

                <h4>Recommended Products</h4>
                <TopProducts/>
            </div>
        </>
    )
}


export default ProductPage