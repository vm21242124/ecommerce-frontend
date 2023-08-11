import React, { useEffect, useState } from 'react'
import './MoreProducts.css'
import axios from 'axios'
import { Product } from '../TopProduct/TopProducts'
const MoreProducts = () => {
    const [moreproducts,setMoreProducts]=useState([])
    useEffect(()=>{
        axios.get(`/product/all`).then((res)=>setMoreProducts(res.data.product)).catch((e)=>console.log(e))

},[])
const products=moreproducts.slice(0,4)
  return (
    <div className="TopProducts">
            <div className="heading">

                <h3>More Products</h3>

            </div>
            <div className="products">
            {products?.map((item,i)=>(
                    <Product key={i} id={item._id} name={item.name} price={item.price} img={item.photos[0]?.secure_url}/>
                ))}
            </div>
        </div>
  )
}

export default MoreProducts