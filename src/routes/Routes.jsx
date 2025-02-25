import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import HomePage from '../screens/HomePage'
import MainLayout from '../layout/MainLayout';
import Restaurants from '../screens/Restaurants'
import Reservation from '../screens/Reservation'
import RestaurantPage, {restaurantLoader} from '../screens/RestaurantPage'
import NotFound from '../screens/NotFound';
import AddRestaurant from '../screens/AddRestaurant';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<MainLayout /> }>
      <Route index element = {<HomePage />} />
      <Route path = '/restaurants' element = {<Restaurants />}/> 
      <Route path = '/reservation' element = {<Reservation />}/> 
      <Route path = '/add-restaurant' element = {<AddRestaurant />}/> 
      <Route path='/restaurants/:id' element = {<RestaurantPage />} loader= {restaurantLoader}/> //passing the function exported by the component to the loader parameter.
      <Route path='*' element= {<NotFound />}></Route> 
    </Route>
  ) 
);

export default router