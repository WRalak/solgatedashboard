import React from 'react'

import Hero from '../components/Hero'
import RecentOrders from '../components/RecentOrders'

import BidsAndActivity from '../components/BidsAndActivity'
import TopSellingProducts from '../components/TopSelling'

const page = () => {
  return (
    <>
    <Hero/>
    <RecentOrders/>
    <BidsAndActivity/>
    <TopSellingProducts/>
    </>
  )
}

export default page

  