import React, { useEffect, useState } from 'react'
import './CategoryHeader.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CategoryHeader = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get('/collections/all').then((res) => setCategory(res.data)).catch((e) => console.log(e))

    })
    
    const nav=useNavigate()
    return (
        <div className="categories">
            {category.map((item, i) => (
                <div className="category" key={i}>
                    <h4 onClick={()=>nav(`/categoryproducts/${item._id}`)}>{item.name.toUpperCase()}</h4>
                    
                </div>
            ))}
        </div>
    )
}

export default CategoryHeader