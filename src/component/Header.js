import { LOGO_URL } from "../Utils/constants";
const HeaderComponent = () => {
  return (
    <div className="header">
      <img alt="Logo" src={LOGO_URL} />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
