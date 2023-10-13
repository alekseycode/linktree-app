import { Box, Flex } from "@chakra-ui/react";
import NavItem from "./NavItem";

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
        ".active": { fontWeight: "bolder" },
      }}
      mb="10px"
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
        <>More</>
      </Box>
    </Flex>
  );
};

export default Nav;
