import React, { useEffect, useState } from 'react'
import { Product } from '../TopProduct/TopProducts'
import axios from 'axios'

const Lastproduct = () => {
    const [moreproducts, setMoreProducts] = useState([])
    useEffect(() => {
        axios.get(`/product/all`).then((res) => setMoreProducts(res.data.product)).catch((e) => console.log(e))

    }, [])
    const products = moreproducts.slice(4)
    return (
        <div className="TopProducts">
            <div className="heading">

                <h3>Recomended</h3>

            </div>
            <div className="products">
                {products?.map((item, i) => (
                    <Product key={i} id={item._id} name={item.name} price={item.price} img={item.photos[0].secure_url} />
                ))}
            </div>
        </div>
    )
}

export default Lastproduct