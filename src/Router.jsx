import React from "react";
import { Mainpage } from "./Experiment5/Mainpage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DetailPage } from "./Experiment5/DetailPage";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainpage />,
    },
    {
      path: "/detail",
      element: <DetailPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};
