import { useNavigate } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
import NavItem from "./NavItem";
import signOut from "../../api/signOut";

const Nav = () => {
  const navigate = useNavigate();
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
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1"
    >
      <Box display="flex" ml="20px">
        <NavItem to="preview/links" label="Links" />
        <NavItem to="preview/appearance" label="Appearance" />
        <NavItem to="analytics" label="Analytics" />
        <NavItem to="preview/settings" label="Settings" />
      </Box>
      <Box
        _hover={{
          color: "rgb(111, 111, 182)",
          transition: "color 0.2s ease-out",
          cursor: "pointer",
        }}
        mr="20px"
      >
        <Text onClick={() => signOut(navigate)}>Sign Out</Text>
      </Box>
    </Flex>
  );
};

export default Nav;
