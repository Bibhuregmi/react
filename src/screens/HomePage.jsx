import React from 'react'
import MainContent from '../components/MainContent'
import RestaurantsListing from '../components/RestaurantsListing'
const HomePage = () => {
  return (
    <>
        <MainContent /> 
        <RestaurantsListing isHome = {true} /> 
    </>
  )
}

export default HomePage