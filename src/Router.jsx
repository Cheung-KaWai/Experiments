import React from "react";
import { Mainpage } from "./Experiment5/Mainpage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DetailPage } from "./Experiment5/DetailPage";
import { Cloud66 } from "./Experiment6/Cloud66";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Cloud66 />,
    },
    {
      path: "/main",
      element: <Mainpage />,
    },
    {
      path: "/detail",
      element: <DetailPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};
