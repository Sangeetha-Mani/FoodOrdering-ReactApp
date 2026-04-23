import ResturantCard from "./RestaurantCard";
import resObj from "../Utils/mockdata";

const BodyComponent = () => {
  return (
    <>
      <div className="main">
        <div className="search-container">
          <input type="text" placeholder="search food" />{" "}
          <button>Search</button>
        </div>
        <div className="res-container">
          {resObj.map((resturant) => {
            return (
              <ResturantCard key={resturant.info.id} resData={resturant} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BodyComponent;
