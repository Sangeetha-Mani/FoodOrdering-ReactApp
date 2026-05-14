// import { LOGO_URL } from "../Utils/constants";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import useOnlineStatus from "../Utils/useOnlineStatus";
import Cart from './Cart';
import {useSelector } from 'react-redux';
//import foodLogo from "../assests/food-logo.jpg";
const imageUrl = new URL('../assests/logo.webp', import.meta.url);
const HeaderComponent = () => {
  //console.log(foodLogo)
  const onlineStatus = useOnlineStatus();
  

 const getcartItems = useSelector((store) => store.cart.items)

  return (
    <div className="flex  justify-between sticky top-0 z-50 bg-white shadow-md">
     
      <img className="w-20 h-20" alt="Logo" src={imageUrl.toString()} />
      {/* {LOGO_URL}  */}
      <div className=" ">
        <ul className="flex">
          <li  className="p-4" style={{"display":"flex"}}>Online status:<div className={onlineStatus ?   "w-4 h-4  ml-4 mt-1  bg-green-600" : "w-4 h-4 ml-4 mt-1  bg-red-600"}></div></li>
          <li className="p-4"><Link to="/">Home</Link></li>
          <li className="p-4"><Link to="/about">About US</Link></li>
          <li className="p-4"><Link to="/contact">Contact US</Link></li>
          <li className="p-4"><Link to="/grocery">Grocery</Link></li>
          <li className="p-4">{
            
            <Cart items={getcartItems}/>}</li>
          <li>
            <Link to='/login'><button 
            className="bg-orange-600
             text-black border-2 border-black m-2 p-2"
          // onClick={()=>{c
          //    loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
          // }}
          >Login</button></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
