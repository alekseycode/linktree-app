import { Avatar, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Preview = () => {
  return (
    <Flex mt="5%">
      <Flex flexGrow="1" maxWidth="55%" mt="2%" justifyContent="center">
        <Outlet />
      </Flex>
      <Flex flexGrow="1" justifyContent="center" mt="12%">
        <Flex
          border="solid"
          borderRadius="20px"
          w="18%"
          h="50%"
          maxW="300px"
          position="fixed"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Flex flexDir="column">
            <Avatar
              name="Rob Banks"
              src="https://bit.ly/dan-abramov"
              mt="20%"
              mb="5%"
              mx="auto"
              w="35%"
              h="50%"
            />
            <Text mx="auto" fontSize="1.2rem">
              @rob_banks
            </Text>
          </Flex>
          <Image
            w="30%"
            src="https://mfe-appearance.production.linktr.ee/images/logo.d1802ab494e6744207e6.svg"
            mx="auto"
            mb="15%"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Preview;
