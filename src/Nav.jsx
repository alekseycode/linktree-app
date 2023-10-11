import { Box, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <Flex
      justifyContent="space-between"
      mt="10px"
      bg="gray.700"
      borderRadius="30px"
      mx="10px"
      py="20px"
      sx={{
        ".active": { fontWeight: "bolder", color: "white" },
      }}
      mb="10px"
      color="#c8c2c2"
    >
      <Box display="flex" ml="20px">
        <Box
          _hover={{
            color: "rgb(111, 111, 182)",
            transition: "color 0.2s ease-out",
          }}
          pr="30px"
        >
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="preview/links"
          >
            Links
          </NavLink>
        </Box>
        <Box
          _hover={{
            color: "rgb(111, 111, 182)",
            transition: "color 0.2s ease-out",
          }}
          pr="30px"
        >
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="preview/appearance"
          >
            Appearance
          </NavLink>
        </Box>
        <Box
          _hover={{
            color: "rgb(111, 111, 182)",
            transition: "color 0.2s ease-out",
          }}
          pr="30px"
        >
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="analytics"
          >
            Analytics
          </NavLink>
        </Box>
        <Box
          _hover={{
            color: "rgb(111, 111, 182)",
            transition: "color 0.2s ease-out",
          }}
          pr="30px"
        >
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="settings"
          >
            Settings
          </NavLink>
        </Box>
      </Box>
      <Box
        _hover={{
          color: "rgb(111, 111, 182)",
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
