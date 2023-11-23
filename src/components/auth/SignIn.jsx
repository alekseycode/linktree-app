import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";

const SignIn = () => {
  return (
    <Flex mt="10%" alignItems="center" flexDir="column">
      <Text my="40px" fontSize="1.5rem">
        Sign In
      </Text>
      <Flex
        flexDir="column"
        alignItems="center"
        bg="gray.700"
        borderRadius="15px"
        w="20%"
      >
        <Flex w="60%" flexDir="column" py="60px">
          <Text>Email</Text>
          <Input type="email" mb="10px" />
          <Text>Password</Text>
          <Input type="password" />
          <Button mt="40px">Submit</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignIn;
