import React from 'react'
import Navbar from '../../Components/Header/Navbar'
import OfferComponant from '../../Components/Offers/OfferComponant'

function HomePage() {
  return (
   <div className="homepage">
    <Navbar/>
    <OfferComponant/>
   </div>
  )
}

export default HomePage