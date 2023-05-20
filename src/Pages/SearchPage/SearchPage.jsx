import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './SearchPage.css'
import Navbar from '../../Components/Header/Navbar'
const SearchPage = () => {
    const { search } = useParams()
    const [product, setProducts] = useState([])
    useEffect(() => {
        axios.get(`/product/search?q=${search}`).then((res) => setProducts(res.data.products)).catch((e) => console.log(e.message))
    })

    return (
        <>
            <Navbar />
            <div className="searchProductPage">
                <div className="searchProductPage__container">
                    <h4>Product Match {product.length}</h4>
                    {product.length !== 0 ? product.map((item, i) => (

                        <div key={i} className="searchproduct">
                            <img className='ww' src={item.photos[0].secure_url} alt="s" />
                            <h3>{item.name}</h3>
                        </div>
                    )) : <div className='nf'><h1>search product not available</h1>
                    </div>}
                </div>
            </div>
        </>
    )
}


export default SearchPage