import React from 'react'
import NavBar from './components/NavBar'
import MainContent from './components/MainContent'
import RestaurantsListing from './components/RestaurantsListing'

const App = () => {
  return (
    <>
    <NavBar/>
    <MainContent/>
    <RestaurantsListing />
    </>
  )
}

export default App