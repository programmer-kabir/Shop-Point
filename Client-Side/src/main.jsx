import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes.jsx";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./Redux/store.js";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
<Provider store={store}>
<RouterProvider router={routes} />
</Provider>
  </StrictMode>
);
