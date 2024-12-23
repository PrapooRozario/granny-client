import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import AllFoods from "@/pages/AllFoods";
import FoodDetails from "@/pages/FoodDetails";
import useAxios from "@/hooks/useAxios";
import FoodPurchase from "@/pages/FoodPurchase";
import PrivateRoute from "./PrivateRoute";
import Gallery from "@/pages/Gallery";
const Axios = useAxios();
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
        loader: ({ params }) => Axios.get(`/foods/details/${params.id}`),
      },
      {
        path: "/food/purchase/:id",
        element: (
          <PrivateRoute>
            <FoodPurchase></FoodPurchase>,
          </PrivateRoute>
        ),
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
    ],
  },
]);
