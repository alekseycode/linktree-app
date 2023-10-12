import { Avatar, Flex, Image, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Preview = () => {
  return (
    <Flex mt="90px">
      <Flex flexGrow="1" maxWidth="55%">
        <Outlet />
      </Flex>
      <Flex flexGrow="1" justifyContent="center" mt="5%">
        <Flex
          border="solid"
          borderRadius="20px"
          w="175px"
          h="350px"
          position="fixed"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Flex flexDir="column">
            <Avatar
              name="Rob Banks"
              src="https://bit.ly/dan-abramov"
              mt="30px"
              mb="10px"
              mx="auto"
            />
            <Text mx="auto" fontSize="0.75rem">
              @rob_banks
            </Text>
          </Flex>
          <Image
            w="60px"
            h="30px"
            src="https://mfe-appearance.production.linktr.ee/images/logo.d1802ab494e6744207e6.svg"
            mx="auto"
            mb="5px"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Preview;
