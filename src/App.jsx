import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import PCategory from './Components/PCategory'
import TBDeal from './Components/TBDeal'
import Electronic from './Components/Electronic'
import Beauty from './Components/Beauty'
import ShopCategory from './Components/ShopCategory'
import Mens from './Components/Mens'
import Womens from './Components/Womens'
import FeatureBlog from './Components/FeatureBlog'
import BestSeller from './Components/BestSeller'
import Footer from './Components/Footer'

const App = () => {
  return <>
    <Navbar />
    <Hero/>
    <PCategory/>
    <TBDeal/>
    <Electronic />
    <Beauty/>
    <ShopCategory/>
    <Mens/>
    <Womens/>
    <BestSeller/>
    <FeatureBlog />
    <Footer />
  </>
}

export default App