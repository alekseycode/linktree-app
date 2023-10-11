import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout.jsx";
import Home from "./Home.jsx";
import Links from "./Links.jsx";
import Appearance from "./Appearance.jsx";
import Preview from "./Preview.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "preview",
        element: <Preview />,
        children: [
          {
            path: "links",
            element: <Links />,
          },
          {
            path: "appearance",
            element: <Appearance />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
