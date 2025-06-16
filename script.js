import React, {  useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./src/screen/Home";
import Venue from "./src/screen/venue";
import { Outlet, Router } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./src/screen/Error";
import Header from "./src/component/Header";
import Venuedetail from "./src/screen/Venue-detail";
import { NetworkProvider } from "./src/context/oninternetConnection";
import Eventdetails from "./src/screen/Event-details";
import MenuAccordion from "./src/component/menuAccordion";
import Login from "./src/screen/Login";
import Footer from "./src/component/Footer";
import Booking from "./src/screen/Upcomingbooking";

const Div = document.querySelector("#root");
const root = ReactDOM.createRoot(Div);

const Applayout = () => {

  const [filterText,setfilterText] = useState('')
  const [mediadata,setmediadata] = useState([])
  // const [menuAccordioncard,setmenuAccordioncard] = useState([])

  const onSearchClick = (ele)=>{
      setfilterText(ele)
  }
  return (
    <>
      <Header onSearchClick={onSearchClick}/>
      <Outlet context={{filterText,setmediadata,mediadata}}/>
      <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Venue",
        element: <Venue/>,
      },
      {
        path: "/venue-detail/:venueId",
        element: <Venuedetail />,
      },
      {
        path: "/event-detail/:eventId",
        element:<Eventdetails/>
      },
      {
       path:"accordion",
       element:<MenuAccordion/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/UpcomingBookings",
        element:<Booking/>
      }
    ],
  },
]);
root.render(<NetworkProvider>
  <RouterProvider router={router}/>
  </NetworkProvider>);
// const router=createBrowserRouter([
//   { path: "/", element: <Home /> }])
// root.render(<EventAppLayout/>)
// root.render(  <RouterProvider router={Home} />);
