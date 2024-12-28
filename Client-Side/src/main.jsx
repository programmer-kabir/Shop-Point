import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes.jsx";
import { ToastContainer } from "react-toastify";
import '@fontsource/inter';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <RouterProvider router={routes} />
  </StrictMode>
);
