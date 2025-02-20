import React from 'react'
import RenderRestaurants from './RenderRestaurants'
import restaurants from '../restaurants.json'
import {Link} from 'react-router-dom'
const RestaurantsListing = ({isHome = false}) => {
    const restautantListing = isHome ? restaurants.slice(0,6) : restaurants
    const divClass = isHome ? 'rounded-md px-2 py-6 bg-emerald-600 mb-6 items-center flex flex-col' : 'rounded-md px-2 py-6 mb-6 items-center flex flex-col'
    const h2Class = isHome ? 'text-2xl font-semibold text-center mb-6 text-white' : 'text-4xl font-bold text-center mb-6 text-emerald-500' 
    const linkClass = isHome ? 'w-52 rounded-lg bg-white text-emerald-600 px-2 py-2 mb-4 mt-8 shadow-lg hover:scale-105 cursor-pointer text-center' : 'display-none'
return (
    <>
        <div className= {divClass}>
            <h2 className= {h2Class}>{isHome ? 'Best Recommendations' : 'Find best restaurants around city'}</h2>
            <div className="grid grid-cols-3 gap-4 group">
                <RenderRestaurants restaurants = {restautantListing}> 
                    <Link className='w-1/2 rounded-lg justify-center text-center block mx-auto py-2 font-bold cursor-pointer bg-emerald-600 hover:shadow-lg text-white hover:scale-105'
                        to = '/restaurant-description'
                    >
                        Discover More  
                    </Link>
                </RenderRestaurants>
            </div> 
            {isHome &&(
                <Link className= {linkClass}
                    to ='/restaurants'
                >
                        View All 
                </Link>
            )}        
        </div>
    </>
)
}
export default RestaurantsListing
