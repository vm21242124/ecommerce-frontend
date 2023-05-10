import React from 'react'
import Navbar from '../../Components/Header/Navbar'
import OfferComponant from '../../Components/Offers/OfferComponant'
import TopProducts from '../../Components/TopProduct/TopProducts'

function HomePage() {
  return (
   <div className="homepage">
    <Navbar/>
    <OfferComponant/>
    <TopProducts/>
   </div>
  )
}

export default HomePage