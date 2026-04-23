import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./component/Header";
import BodyComponent from "./component/Body";
import FooterComponent from "./component/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <>
      <div className="app">
        <HeaderComponent />
        <BodyComponent />
        <FooterComponent />
      </div>
    </>
  );
};

root.render(<AppLayout />);
