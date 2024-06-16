import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PhotoDetails from "./components/PhotoDetails.tsx";
import PhotosProvider from "./context/PhotosContext.tsx";
import App from "./App.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/photos/:photoId",
    element: <PhotoDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PhotosProvider>
      <RouterProvider router={router} />
    </PhotosProvider>
  </React.StrictMode>
);
