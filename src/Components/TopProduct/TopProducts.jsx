import React, { useEffect, useState } from 'react'
import './TopProducts.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'


const TopProducts = () => {
    const [topProduct,setTopProducts]=useState([])
    useEffect(()=>{
        axios.get(`/product/645b1c3bb5f32f212614414c`).then((res)=>setTopProducts(res.data.products)).catch((e)=>console.log(e))

},[])
    
    return (
        <div className="TopProducts">
            <div className="heading">

                <h3>Top Products</h3>

            </div>
            <div className="products">
            {topProduct.map((item,i)=>(
                    <Product key={i} id={item._id} name={item.name} price={item.price} img={item.photos[0].secure_url}/>
                ))}
            </div>
        </div>
    )
}
export const Product=({id,name,img,price})=>{
    const dispatch=useDispatch();
    const handleAddToCart=(e)=>{
        e.preventDefault();
        const product={id,name,img,price}
        console.log(product);
       dispatch({
        type:"addToCart",
        payload:product
       })

    }
    return(
        <div className="product">
            <div className="piimg">
                <img src={img} alt="" className="pp" />
            </div>
            <h4>{name}</h4>
        <h5>{price}</h5>
        <button onClick={handleAddToCart} className="lgbutton">add to cart</button>
        </div>
    )
}

export default TopProducts