import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import MainLayout from "../MainLayout/MainLayout";
import ProductPage from "../Pages/ProductPage/ProductPage";
import Signin from "../Pages/Authencations/Signin";
import Signup from "../Pages/Authencations/Signup";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductPage />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
    ],
  },
]);
export default routes;
