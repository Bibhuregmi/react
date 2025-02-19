import React from 'react'
import RenderRestaurants from './RenderRestaurants'
import restaurants from '../restaurants.json'
import {Link} from 'react-router-dom'
const RestaurantsListing = () => {
return (
    <>
        <div className='rounded-md px-2 py-6 bg-emerald-600 mb-6 items-center flex flex-col'>
            <h2 className='text-2xl font-semibold text-center mb-6 text-white'>Best Recommendations</h2>
            <div className="grid grid-cols-3 gap-4 group">
                <RenderRestaurants restaurants = {restaurants.slice(0,6)}> 
                    <Link className='w-1/2 rounded-lg justify-center text-center block mx-auto py-2 font-bold cursor-pointer bg-emerald-600 hover:shadow-lg text-white hover:scale-105'
                        to = '/restaurants'
                    >
                        Discover More  
                    </Link>
                </RenderRestaurants>
            </div>         
            <Link className='w-52 rounded-lg bg-white text-emerald-600 px-2 py-2 mb-4 mt-8 shadow-lg hover:scale-105 cursor-pointer text-center'
                to ='/restaurants'
            >
                    View All 
            </Link>
        </div>
    </>
)
}
export default RestaurantsListing
