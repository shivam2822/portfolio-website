import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import React from "../pages/React";
import RootLayout from "../layout/RootLayout";
import ReactNative from "../pages/ReactNative";
import Wordpress from "../pages/Wordpress";
// import Home from "../pages/Home";
// import React from "../pages/React";
// import ReactNative from "../pages/ReactNative";
// import WordPress from "../pages/WordPress";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/react",
        element: <React />,
      },
      {
        path: "/react-native",
        element: <ReactNative />,
      },
      {
        path: "/wordpress",
        element: <Wordpress />,
      },
    ],
  },
]);
