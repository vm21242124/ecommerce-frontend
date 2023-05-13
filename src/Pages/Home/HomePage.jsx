import React from 'react'
import Navbar from '../../Components/Header/Navbar'
import OfferComponant from '../../Components/Offers/OfferComponant'
import TopProducts from '../../Components/TopProduct/TopProducts'
import CategoryHeader from '../../Components/CategoryHeader/CategoryHeader'

function HomePage() {
  return (
   <div className="homepage">
    <Navbar/>
    <CategoryHeader/>
    <OfferComponant/>
    <TopProducts/>
   </div>
  )
}

export default HomePage