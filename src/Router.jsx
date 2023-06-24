import React from "react";
import { Mainpage } from "./Experiment5/Mainpage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DetailPage } from "./Experiment5/DetailPage";
import { Cloud66 } from "./Experiment6/Cloud66";

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
    {
      path: "/cloud66",
      element: <Cloud66 />,
    },
  ]);
  return <RouterProvider router={router} />;
};
