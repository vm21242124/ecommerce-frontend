import React from 'react'
import Navbar from '../../Components/Header/Navbar'
import OfferComponant from '../../Components/Offers/OfferComponant'
import TopProducts from '../../Components/TopProduct/TopProducts'
import CategoryHeader from '../../Components/CategoryHeader/CategoryHeader'
import MoreProducts from '../../Components/MoreProducts/MoreProducts'
import Lastproduct from '../../Components/Lastproducts/Lastproduct'

function HomePage() {
  return (
   <div className="homepage">
    <Navbar/>
    <CategoryHeader/>
    <OfferComponant/>
    <TopProducts/>
    <MoreProducts/>
    <Lastproduct/>
   </div>
  )
}

export default HomePage