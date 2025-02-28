import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import MainLayout from "../MainLayout/MainLayout";
import ProductPage from "../Pages/ProductPage/ProductPage";
import Signin from "../Pages/Authencations/Signin";
import Signup from "../Pages/Authencations/Signup";
import UserAgreement from "../Pages/ShopPointLegal&PrivacyPolicies/UserAgreement";
import PrivacyPolicy from "../Pages/ShopPointLegal&PrivacyPolicies/Privacypolicy";
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
      {
        path: "/user-agreement",
        element: <UserAgreement />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);
export default routes;
