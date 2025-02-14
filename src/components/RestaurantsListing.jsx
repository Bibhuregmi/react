import React from 'react'
import RenderRestaurants from './RenderRestaurants'
import restaurants from '../restaurants.json'
const RestaurantsListing = () => {
return (
    <>
        <div className='flex flex-col justify-center rounded-md px-2 py-6 bg-emerald-600'>
            <h2 className='text-2xl font-semibold text-center mb-6 text-white'>Best Recommendations</h2>
            <div className="grid grid-cols-3 gap-4 group">
                <RenderRestaurants restaurants = {restaurants.slice(0,6)}> 
                    <a className='w-1/2 rounded-lg justify-center text-center block mx-auto py-2 font-bold cursor-pointer bg-emerald-600 hover:shadow-lg text-white hover:scale-105'
                        href= '/restaurants'
                    >
                        Discover More  
                    </a>
                </RenderRestaurants>
            </div>
        </div>
        

    </>
)
}
export default RestaurantsListing
