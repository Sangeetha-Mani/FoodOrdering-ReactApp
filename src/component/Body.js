import ResturantCard, { withRestaurantCard } from "./RestaurantCard";
import resObj from "../Utils/mockdata";
import { useState, useEffect } from "react";
import ShimmerUI from "./shimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useDispatch } from "react-redux";
import { addItem } from "../Slices/cartSlice";

const sortOptions = [
  {
    id: 1,
    label: "Low to High",
    value: "LOW_TO_HIGH",
  },
  {
    id: 2,
    label: "High to Low",
    value: "HIGH_TO_LOW",
  },
  {
    id: 3,
    label: "Rating",
    value: "RATING",
  },
];
const BodyComponent = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchTxt, setSearchTxt] = useState(""); // controlled components
  const [selectedValue, setSelectedValue] = useState("sort"); // controlled select elemt value
 
  // const [sortRating, setSortRating] = useState([]);
  const onlineStatus = useOnlineStatus();
  const dispatch = useDispatch(); // which return function

  const RestaurantCardPromoted = withRestaurantCard(ResturantCard);

  //it will called after rendering the component
  useEffect(() => {
    fetchData();
    // setSearchTxt("");a
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8358507&lng=79.7055922&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      );
      if (!response.ok) throw new Error("API Failed" + response.status);
      const json = await response.json();
      console.log(json, "from fetchDAta");
      const data =
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestaurantList(data);
      setFilteredRestaurantList(data);
    } catch (err) {
      console.log(err);
    }
  };
// reusable helper function
  const extractCost = (cost)=>{
    //get the cost string helper
    
    return Number(cost.split(" ")[0].replace(/[^\d]/g,""));
   
  }

  const handleSorting = (e) => {
    // console.log(e.target.value)
    const value = e.target.value;
    setSelectedValue(value);
    if (value=== "LOW_TO_HIGH") {
      const sortAscending = [...restaurantList].sort((a, b) => {
        return extractCost(a?.info?.costForTwo) - extractCost(b?.info?.costForTwo);
      });
    
      setFilteredRestaurantList(sortAscending);
    }
    if (value === "HIGH_TO_LOW") {
      const sortDescending = [...restaurantList].sort((a, b) => {
        return extractCost(b?.info?.costForTwo) - extractCost(a?.info?.costForTwo);
      });
      
      setFilteredRestaurantList(sortDescending);
    }
    if (value === "RATING") {
      const filterRating = [...restaurantList].filter((res) => {
        return res?.info?.avgRating > 4;
      });
      setFilteredRestaurantList(filterRating);
    }
  };

  return !filteredRestaurantList ||
    !restaurantList ||
    restaurantList.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="max-w-[980px] mx-auto">
        <h1 className="font-bold text-2xl">Restaurants with online food delivery in Kanchipuram</h1>
        <div className=" p-2 ">
          
          {/* bind the input value to local state variable (searchTxt) and input update the state is controlled component */}
          <input
            className="border border-be-black-400 border-be-black-400 border-x-white border-bs-white"
            type="text"
            placeholder="search food"
            value={searchTxt}
            onChange={(e) => {
              // setSortRating([])
              setSearchTxt(e.target.value);
            }}
          />
          <button
            className="bg-orange-300 rounded-2xl p-2 border border-black ml-4 cursor-pointer"
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

          <select

            value={selectedValue}
            onChange={(e) => {
              handleSorting(e);
            }}
            className="m-2 p-2 border border-black cursor-pointer"
          >
            <option value="sort">--Sort--</option>
            {sortOptions.map((ele) => {
              return (
                <option key={ele.id} value={ele.value}>
                  {ele.label}
                </option>
              );
            })}
          </select>
        </div>

        <div className="p-2 m-2 flex  flex-wrap ">
          {filteredRestaurantList.length === 0 ? (
            <div>No Restaurant Available! Kindly Search Again!</div>
          ) : (
            filteredRestaurantList.map((resturant) => {
              return (
                <div
                  className="flex flex-col rounded-lg overflow-hidden shadow-lg bg-white h-full"
                  key={resturant.info.id}
                >
                  <Link to={"/restaurant/" + resturant.info.id}>
                    {/* {true ? (
                      <RestaurantCardPromoted resData={resturant} />
                    ) : ( */}
                      <ResturantCard resData={resturant} />
                    
                  </Link>
                  <div className="flex justify-center">
                  <button
                    className="bg-orange-400 text-black mb-3  hover:bg-orange-700-50 cursor-pointer w-40 rounded-2xl"
                    onClick={() => {
                      dispatch(addItem(resturant.info.name));
                    }}
                  >
                    Add to Cart
                  </button>
                  </div>
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
