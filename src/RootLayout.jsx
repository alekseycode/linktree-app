import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Nav from "./components/nav/Nav";

const RootLayout = () => {
  return (
    <Box>
      <Box>
        <Nav />
      </Box>
      <Outlet />
    </Box>
  );
};

export default RootLayout;
