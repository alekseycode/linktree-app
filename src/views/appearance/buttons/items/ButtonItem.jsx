import { Box } from "@chakra-ui/react";

const ButtonItem = ({ onClick, isActive, ...props }) => {
  return (
    <Box
      w="160px"
      h="35px"
      cursor="pointer"
      border="1px solid"
      borderColor="white"
      mx="10px"
      outline={isActive ? "2px solid white" : "none"}
      outlineOffset={isActive ? "8px" : "0px"}
      onClick={onClick}
      {...props}
    ></Box>
  );
};

export default ButtonItem;
