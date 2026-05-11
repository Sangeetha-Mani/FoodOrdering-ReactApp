// import { LOGO_URL } from "../Utils/constants";
//import { useState } from "react";
import {Link} from 'react-router-dom';
import useOnlineStatus from "../Utils/useOnlineStatus";


const HeaderComponent = () => {
  const onlineStatus = useOnlineStatus();
  // const [loginBtn, setLoginBtn] = useState("Login")

  console.log(onlineStatus,'cecks')

  return (
    <div className="flex m-5 justify-between">
      <img className="w-20 h-18" alt="Logo" src="#" />
      {/* {LOGO_URL}  */}
      <div className=" ">
        <ul className="flex">
          <li  className="p-4" style={{"display":"flex"}}>Online status:<div className={onlineStatus ?   "w-4 h-4  ml-4 mt-1  bg-green-600" : "w-4 h-4 ml-4 mt-1  bg-red-600"}></div></li>
          <li className="p-4"><Link to="/">Home</Link></li>
          <li className="p-4"><Link to="/about">About US</Link></li>
          <li className="p-4"><Link to="/contact">Contact US</Link></li>
          <li className="p-4"><Link to="/grocery">Grocery</Link></li>
          <li className="p-4">Cart</li>
          <li>
            <Link to='/login'><button className="login-btn" 
          // onClick={()=>{
          //    loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
          // }}
          >Login</button></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
