import { Box, Flex, Text } from "@chakra-ui/react";
import NavItem from "./NavItem";
import signOut from "../../api/signOut";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <Flex
      justifyContent="space-around"
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
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1"
    >
      <Box display="flex" ml="20px">
        <NavItem to="/" label="Home" />
      </Box>

      <NavItem to="signin" label="Sign In" />
    </Flex>
  );
};

export default HomeNav;
