import React, { useEffect, useState } from 'react'
import './CategoryHeader.css'
import axios from 'axios'
const CategoryHeader = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get('/collections/all').then((res) => setCategory(res.data)).catch((e) => console.log(e))

    }, [category])
    return (
        <div className="categories">
            {category.map((item, i) => (
                <div className="category" key={i}>
                    <h4>{item.name.toUpperCase()}</h4>
                </div>
            ))}
        </div>
    )
}

export default CategoryHeader