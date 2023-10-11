import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Preview = () => {
  return (
    <Flex>
      <Flex flexGrow="1">
        <Outlet />
      </Flex>
      <Flex flexGrow="1" justifyContent="center">
        <Flex border="solid" borderRadius="20px" w="150px" h="300px"></Flex>
      </Flex>
    </Flex>
  );
};

export default Preview;
