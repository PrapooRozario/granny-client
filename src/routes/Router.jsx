import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import AllFoods from "@/pages/AllFoods";
import FoodDetails from "@/pages/FoodDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all/foods",
        element: <AllFoods></AllFoods>,
      },
      {
        path: "/food/details/:id",
        element: <FoodDetails></FoodDetails>,
      },
    ],
  },
]);
