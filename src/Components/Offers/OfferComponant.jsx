import React, { useEffect } from 'react'
import './OfferComponant.css'
import download from '../../Assests/download.jpg'
const OfferComponant = () => {
    useEffect(()=>{
        
    })
    return (
        <div className="offercomponant">
            <div className="newArrivals">

                <img className='f' src={download} />
            </div>
            <div className="info">
                <h3>Lorem ipsum dolor sit.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aperiam officiis ad provident mollitia, facere laborum vitae dignissimos harum magnam id doloremque?</p>
                
                <button style={{"width":"50%","cursor":"pointer"}} className='lgbutton'>Add To Cart</button>
            </div>
        </div>
    )
}

export default OfferComponant