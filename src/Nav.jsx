import { Box, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import "./stylesheets/nav.css";

const Nav = () => {
  return (
    <Flex
      justifyContent="space-between"
      mt="10px"
      bg="gray.700"
      borderRadius="10px"
      mx="10px"
      pt="20px"
      pb="20px"
    >
      <Box className="right-links" display="flex" ml="20px">
        <Box pr="10px" className="hover">
          <NavLink to="links">Links</NavLink>
        </Box>
        <Box className="hover">
          <NavLink to="appearance">Appearance</NavLink>
        </Box>
      </Box>
      <Box className="left-links hover" mr="20px">
        <NavLink>More</NavLink>
      </Box>
    </Flex>
  );
};

export default Nav;
