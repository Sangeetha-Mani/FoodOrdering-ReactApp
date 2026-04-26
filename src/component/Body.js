import ResturantCard from "./RestaurantCard";
import resObj from "../Utils/mockdata";
import { useState, useEffect } from "react";
import ShimmerUI from "./shimmerUI";
import { Link } from "react-router-dom";

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
  const [restaurantList, setRestaurantList] = useState([]); //nevertouch 
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchTxt, setSearchTxt] = useState(""); // controlled components

  //it will called after rendering the component
  useEffect(() => {
    fetchData();
    // setSearchTxt("");
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8358507&lng=79.7055922&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await response.json();
    const data =
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(data);
    setFilteredRestaurantList(data);
  };
  console.log(filteredRestaurantList, "check");
  //conditional rendering
  // if(restaurantList.length === 0) {
  //   return <ShimmerUI/>
  // }

  return restaurantList.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="main">
        <div className="search-container">
          {/* bind the input value to local state variable (searchTxt) and input update the state is controlled component */}
          <input
            type="text"
            placeholder="search food"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
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
              setFilteredRestaurantList(filteredList);
            }}
          >
            Top Rated Resturants
          </button>
        </div>

        <div className="res-container">
          {filteredRestaurantList.length === 0 ? (
            <div>No Restaurant Available! Kindly Search Again!</div>
          ) : (
            filteredRestaurantList.map((resturant) => {
              return (
                <Link to={"/restaurant/" + resturant.info.id} key={resturant.info.id}>
                <ResturantCard resData={resturant} />
                </Link>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default BodyComponent;
