import ResturantCard , {withRestaurantCard}from "./RestaurantCard";
import resObj from "../Utils/mockdata";
import { useState, useEffect } from "react";
import ShimmerUI from "./shimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import {useDispatch} from "react-redux";
import {addItem } from "../Slices/cartSlice";


/* topics covered from this foodordering app is 
declartive UI - describe how ui should look and react automaticaly updates the dom when state changes . one of the example is controlled component
Resuable component - use it multiple times with dynamic data using props
controlled component - where form inputs are driven by state instead of direct dom maniulation
implemented the search fearture and filter feature(only for morethna 4 ratings of resturant) 
useState
useEffect
whenever state is changed ,react re-render the component , react trigger the reconcilation processs and updated the UI efficiently
this is the beauty of react
react is fast by reconcillation process and update only changed part into real dom efficiently.
*/

const BodyComponent = () => {
  const [restaurantList, setRestaurantList] = useState([]); 
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchTxt, setSearchTxt] = useState(""); // controlled components
  // const [sortRating, setSortRating] = useState([]);
  const onlineStatus = useOnlineStatus();
  const dispatch = useDispatch(); // which return function


 
  //it will called after rendering the component
  useEffect(() => {
    fetchData();
    // setSearchTxt("");a
  }, []);

   const RestaurantCardPromoted = withRestaurantCard(ResturantCard)

  const fetchData = async () => {
    try{

       const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8358507&lng=79.7055922&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    if(!response.ok) throw new Error("API Failed" + response.status)
    const json = await response.json();
    console.log(json,'from fetchDAta')
    const data =
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(data);
    setFilteredRestaurantList(data);
    } catch(err) {
      console.log(err)
    }
   
  };
  console.log(filteredRestaurantList, "check");
  //conditional rendering
  // if(restaurantList.length === 0) {
  //   return <ShimmerUI/>
  // }

  const handleSortRating = () => {
    let sortRating1 = [...restaurantList].sort((a,b)=>
      {
        
       return  a?.info?.avgRating - b?.info?.avgRating});
      console.log(sortRating1) 
      setFilteredRestaurantList(sortRating1)
    
  }
 

  return  !filteredRestaurantList || !restaurantList || restaurantList.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="m-2 p-2">
        <div className="m-2 p-2 border-2 ">
          {/* bind the input value to local state variable (searchTxt) and input update the state is controlled component */}
          <input
            type="text"
            placeholder="search food"
            value={searchTxt}
            onChange={(e) => {
            // setSortRating([])
              setSearchTxt(e.target.value);
            }}
          />
          <button className="bg-pink-300 rounded-b-sm"
            onClick={() => {
              // get the input searchTxt and filteredResturant from original list. and update the ui
              let filteredList = restaurantList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchTxt.toLowerCase());
              });
              console.log(filteredList, "check the filere");
              setFilteredRestaurantList(filteredList);
            }}
          >
            Search
          </button>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = restaurantList.filter(
                (res) => res.info.avgRating > 4,
              );
              // setSortRating([])
              setFilteredRestaurantList(filteredList);
            }}
          >
            Top Rated Resturants
          </button>
          <button onClick={(()=>{handleSortRating()})}>Sort Rating</button>
        </div>

        <div className="p-2 m-2 flex flex-wrap ">
        {
           }
          {filteredRestaurantList.length === 0 ? (
            <div>No Restaurant Available! Kindly Search Again!</div>
          ) : (
          
           filteredRestaurantList.map((resturant) => {
              return (
                <div className="flex flex-col items-center" key={resturant.info.id}>
                <Link  to={"/restaurant/" + resturant.info.id} >
                
                {true ? <RestaurantCardPromoted resData={resturant}/> :
                <ResturantCard resData={resturant} /> 
                }
                </Link>
                <button 
                className="bg-blue-400 text-white hover:bg-blue-600 cursor-pointer w-40"
                  onClick={() => 
                  {  console.log(resturant.info.name,'check thename');
                    dispatch(addItem(resturant.info.name))}}>Add to Cart</button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default BodyComponent;
