import React from 'react'
import {useEffect, useState} from 'react'
import RenderRestaurants from './RenderRestaurants'
import Spinner from './Spinner'
import {Link} from 'react-router-dom'
const RestaurantsListing = ({isHome = false}) => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true); 

    //logics for  conditional rendering 
    const divClass = isHome ? 'rounded-md px-2 py-6 bg-emerald-600 mb-6 items-center flex flex-col' : 'rounded-md px-2 py-6 mb-6 items-center flex flex-col'
    const h2Class = isHome ? 'text-2xl font-semibold text-center mb-6 text-white' : 'text-4xl font-bold text-center mb-6 text-emerald-500' 
    const linkClass = isHome ? 'w-52 rounded-lg bg-white text-emerald-600 px-2 py-2 mb-4 mt-8 shadow-lg hover:scale-105 cursor-pointer text-center' : 'display-none'
    //useEffect in react is used to return a cleanup function for updates or unmounting components, and react expects it to be synchronous and making it async, it must return a promise which is against the rule of react 
    useEffect(() => {
        const fetchRestaurants = async () => {
            const apiUrl = isHome ? '/api/restaurants?_limit=6' : '/api/restaurants'
            try {
                const res = await fetch(apiUrl)
                const data = await res.json();
                console.log(data)
                setRestaurants(data); 
            } catch (error) {
                console.error('Error fetching data', error)
            }finally{
                setLoading(false); 
            }
        }
        fetchRestaurants(); 
    }, [])
return (
    <>
        <div className= {divClass}>
            <h2 className= {h2Class}>{isHome ? 'Best Recommendations' : 'Find best restaurants around city'}</h2>
                {
                    loading ? (<Spinner/>) : (
                        <div className="grid grid-cols-3 gap-4 group">
                            {restaurants.map((restaurant) => (
                                <RenderRestaurants key={restaurant.id} restaurants = {restaurant}/> 
                            ))}
                        </div>
                    )
                } 
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
