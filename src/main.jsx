import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.js";
import { QueryClientProvider } from "react-query";
import queryClient from "./config/queryClient.js";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import "./assets/fonts/fonts.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
