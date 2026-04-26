import { LOGO_URL } from "../Utils/constants";
//import { useState } from "react";
import {Link} from 'react-router-dom'

const HeaderComponent = () => {

  // const [loginBtn, setLoginBtn] = useState("Login")

  return (
    <div className="header">
      <img alt="Logo" src={LOGO_URL} />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About US</Link></li>
          <li><Link to="/contact">Contact US</Link></li>
          <li>Cart</li>
          {/* <button className="login-btn" onClick={()=>{
             loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
          }}>{loginBtn}</button> */}
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
