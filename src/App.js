import React , { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./component/Header";
import BodyComponent from "./component/Body";
import FooterComponent from "./component/Footer";
import About from './component/About';
import Contact from './component/Contact';
import Error from './component/Error';
import ResturantMenu  from "./component/ResturantMenu";
import Login from './component/Login';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from './component/Grocery';

const root = ReactDOM.createRoot(document.getElementById("root"));

const Grocery = lazy(()=>import('./component/Grocery.js'))

const AppLayout = () => {
  return (
    <>
      <div className="app">
        <HeaderComponent />
        <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet/>
        </Suspense>
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
      },
      {
        path:'/grocery',
        element: <Grocery/>
      }
  ],
    errorElement:<Error/>
},
{
  path:'/login',
  element: <Login/>
}
  
])

root.render(<RouterProvider router={appRouter} />);
