import { useParams, useLoaderData } from 'react-router-dom';
import Restaurant from '../components/Restaurant';

const RestaurantPage = () => {
    const restaurant = useLoaderData(); 
    console.log(restaurant)
    const {id} = useParams(); 
    
  return <Restaurant restaurant={restaurant}/>
}

//so inseted of using useEffect for fetching, I am using the loader provided by react-router-dom
//and to use the data provided by loader, useLoaderData() hook is used 
//the main advantage is that this fucntion can be used on other components to fetch data based on id
const restaurantLoader = async({ params }) => {
  console.log('fetching the data with id', params.id)
  const res = await fetch (`/api/restaurants/${params.id}`);
  console.log(res.status)
  const data = await res.json(); 
  return data; 
}

export {RestaurantPage as default, restaurantLoader} //exporting both function and the component 