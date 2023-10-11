import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default RootLayout;
