import { Box, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <Flex
      justifyContent="space-between"
      mt="10px"
      bg="gray.700"
      borderRadius="10px"
      mx="10px"
      py="20px"
      sx={{
        ".active": { fontWeight: "bolder" },
      }}
    >
      <Box display="flex" ml="20px">
        <Box
          _hover={{
            color: "lightblue",
            transition: "color 0.2s ease-out",
          }}
          pr="10px"
        >
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="links"
          >
            Links
          </NavLink>
        </Box>
        <Box
          _hover={{
            color: "lightblue",
            transition: "color 0.2s ease-out",
          }}
        >
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="appearance"
          >
            Appearance
          </NavLink>
        </Box>
      </Box>
      <Box
        _hover={{
          color: "lightblue",
          transition: "color 0.2s ease-out",
          cursor: "pointer",
        }}
        mr="20px"
      >
        <>More</>
      </Box>
    </Flex>
  );
};

export default Nav;
