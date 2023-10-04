import { Avatar, Button, Flex, Text } from "@chakra-ui/react";

function Home() {
  return (
    <Flex
      maxW="400px"
      mx="auto"
      mt="40px"
      bg="gray.700"
      flexDir="column"
      align="center"
      borderRadius="15px"
    >
      <Avatar
        name="Rob Banks"
        src="https://bit.ly/dan-abramov"
        mt="60px"
        mb="10px"
      />

      <Text>@robbanks</Text>
      <Text mb="40px">I dont rob banks.</Text>
      <Button pl="100px" pr="100px" mb="20px">
        Website
      </Button>
      <Button pl="100px" pr="100px" mb="20px">
        Website
      </Button>
      <Button pl="100px" pr="100px" mb="20px">
        Website
      </Button>
      <Button pl="100px" pr="100px" mb="20px">
        Website
      </Button>
      <Text mt="40px" mb="20px">
        Linktree Clone
      </Text>
    </Flex>
  );
}

export default Home;
