import React, { useEffect, useState } from 'react'
import './OfferComponant.css'
import {AiFillLeftCircle,AiFillRightCircle} from 'react-icons/ai'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const OfferComponant = () => {
    const [offer, setOffer] = useState([])
    useEffect(() => {
        axios.get("/product/646e0ff4b94a4589b5858deb").then((res) => setOffer(res.data.products)).catch((e) => console.log(e.message))
    })
    const [offerno,setOfferno]=useState(0)
    const lefthandle=(e)=>{
        e.preventDefault()
        if(offerno>0){
            setOfferno(offerno-1);
        }else{
            setOfferno(offer.length-1);
        }

    }
    const righthandle=(e)=>{
        e.preventDefault()
        if(offerno<offer.length-1){
            setOfferno(offerno+1);
        }else{
            setOfferno(0);
        }

    }
    const nav = useNavigate()
    return (
        <div className="offercomponant">
            <div className="arrbuttons" onClick={lefthandle}><AiFillLeftCircle className='arrows'/></div>
            <div className="newArrivals">

                <img className='f' onClick={() => nav(`/product/${offer[offerno]._id}`)} src={offer[offerno]?.photos[0].secure_url} alt="" />
            </div>
            <div className="info">
                <div className="offerproduct_corasol">
                    <h3 style={{ cursor: "pointer" }} onClick={() => nav(`/product/${offer[offerno]._id}`)} > {offer[offerno]?.name}</h3>
                    <h4>₹ {offer[offerno]?.price}</h4>
                    <button style={{ "width": "50%", "cursor": "pointer" }} onClick={() => nav(`/product/${offer[offerno]._id}`)} className='lgbutton'>CHECK NOW</button>

                </div>
            </div>
                <div className="arrbuttons" onClick={righthandle}><AiFillRightCircle className='arrows'/></div>
        </div>
    )
}

export default OfferComponant