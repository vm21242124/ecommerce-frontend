import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Categories.css'
const Categories = () => {
  const [name,setName]=useState("")
  const handleSubmit =(e)=>{
    e.preventDefault();
     axios.post('/collections/create',{name}).then((res)=>{
      if(res.status===200){
        alert("collection created successfully")
      }
     }).catch((e)=>console.log(e))
    
  }
  const [collection,setCollection]=useState([]);
  useEffect(()=>{
    axios.get('/collections/all').then((res)=>setCollection(res.data)).catch(e=>console.log(e))
  })
  return (
    <div className="createproductForm">
      <h1>create collection</h1>
      <form method='POST' onSubmit={handleSubmit}>
        <div className="createproduct">

          <input
            className="in1"
            placeholder="collection name"
            onChange={(e)=>setName(e.target.value)}
            required={true}
          />
         
        </div>
        <div className="bn">

          <button type="submit" className="createproductbtn">
            Create Collection
          </button>
        </div>
      </form>
        <h1>All Categories</h1>
      <div className="allavailablecartegories">
        {collection.length!==0 ? collection.map((item,i)=>(
          <div className='collections' key={i}>
            <span>{item.name}</span>
          </div>
        )):
        <div><span>not Categories yet create now</span></div>
      }
      </div>
    </div>
  )
}

export default Categories