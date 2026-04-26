import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./component/Header";
import BodyComponent from "./component/Body";
import FooterComponent from "./component/Footer";
import About from './component/About';
import Contact from './component/Contact';
import Error from './component/Error';
import ResturantMenu  from "./component/ResturantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));



const AppLayout = () => {
  return (
    <>
      <div className="app">
        <HeaderComponent />
        <Outlet/>
        <FooterComponent />
      </div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {path:'/',
    element:<AppLayout/>,
    children: [
      {
        path: "/",
        element: <BodyComponent/>
      },
      {

        path:'/about',
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:'/restaurant/:resId',
        element:<ResturantMenu/>
      }
  ],
    errorElement:<Error/>
}
  
])

root.render(<RouterProvider router={appRouter} />);
