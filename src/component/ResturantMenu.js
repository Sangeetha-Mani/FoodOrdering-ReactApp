import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import useOnlineStatus from "../Utils/useOnlineStatus";

const ResturantMenu = () => {
  const { resId } = useParams();
// desturing the object which returned by useRestaurantMenu
// we have to handle when network disconnected
  const { resMenu, loading, error } = useRestaurantMenu(resId);
  const onlineStatus = useOnlineStatus();

  console.log(onlineStatus);
  if(onlineStatus === false)  return <div>Opps! you are offline! please check your network!</div>

  if (loading) {
    return <div> Loading...</div>;
  }
  //in javacript if there is a text the it is true in if condition
  if (error) return <div>{error}</div>;


  return (
    <div>
      <h1>name of the resturant</h1>
      <h3>price</h3>
      <hr />
      <h2>Menu</h2>
      <div>
        <h1>helo</h1>
        <h2>content of header</h2>
      </div>
    </div>
  );
};

export default ResturantMenu;
