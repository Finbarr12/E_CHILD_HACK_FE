import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Dashboard from "../Pages/Dashboard";
import SignIn from "../Pages/SignIn";

export const mainroute = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
