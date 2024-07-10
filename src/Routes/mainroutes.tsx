import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Dashboard from "../Pages/Dashboard";
import SignIn from "../Pages/SignIn";
import RightSide from "../components/RightSide";
import Quiz from "../components/Quiz";
import Poems from "../components/Poems";
import FunFacts from "../components/FunFacts";

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
    children: [
      {
        index: true,
        element: <RightSide />,
      },
      {
        path: "/dashboard/quiz",
        element: <Quiz />,
      },
      {
        path: "/dashboard/poems",
        element: <Poems />,
      },
      {
        path: "/dashboard/funfacts",
        element: <FunFacts />,
      },
    ],
  },
]);
