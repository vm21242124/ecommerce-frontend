import React, { useState } from 'react'
import './Products.css'
import { CreateProductforms, GetAllProducts } from './Poductsforms'
const Products = () => {
  const [active, setActive] = useState("create")
  return (
    <div className="AdminProducts">
      <div className="AdminProductsTopButtons">
        <div onClick={()=>setActive("create")} style={{ "backgroundColor": "rgb(165, 206, 243)" }} className="Adminproductsbtns">create Product</div><div onClick={()=>setActive("view")} style={{ "backgroundColor": "rgb(25, 197, 227)" }} className="Adminproductsbtns">View Products</div>
      </div>
      <div className="AdminProductsMainCard">
        {active === "create" ? <CreateProductforms /> : <GetAllProducts />}
      </div>
    </div>
  )
}

export default Products