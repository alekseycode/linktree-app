import { Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

const SignIn = () => {
  return (
    <Flex mt="10%" justifyContent="center">
      <Flex
        flexDir="column"
        alignItems="center"
        bg="gray.700"
        borderRadius="10px"
        h="300px"
        w="300px"
      >
        <Text my="20px">Sign In</Text>
        <Flex>
          <Input />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignIn;
