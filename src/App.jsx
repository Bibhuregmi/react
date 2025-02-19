import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './screens/HomePage';
import MainLayout from './layout/MainLayout';
import Restaurants from './screens/Restaurants'
import Reservation from './screens/Reservation'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<MainLayout /> }>
      <Route index element = {<HomePage />} />
      <Route path = '/restaurants' element = {<Restaurants />}/> 
      <Route path = '/reservation' element = {<Reservation />}/> 
    </Route>
  ) 
);

const App = () => {
  return (
    <>
      <RouterProvider router={router}/> 
    </>
  )
}

export default App