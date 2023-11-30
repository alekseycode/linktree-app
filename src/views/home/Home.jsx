import { Avatar, Button, Flex, Image, Text } from "@chakra-ui/react";
import linkTreeLogo from "../../assets/images/linktree-logo.svg";

function Home() {
  return (
    <Flex mt="8%" flexDir="column">
      <Text mb="40px" textAlign="center" fontSize="2rem">
        Customize your personal link page
      </Text>
      <Flex
        maxW="400px"
        mx="auto"
        mt="20px"
        flexDir="column"
        align="center"
        borderRadius="15px"
        border="1px solid white"
      >
        <Avatar
          name="Rob Banks"
          src="https://bit.ly/dan-abramov"
          mt="60px"
          mb="10px"
          w="60px"
          h="60px"
        />
        <Text>@rob_banks</Text>
        <Text mb="40px" mt="20px">
          I dont rob banks.
        </Text>
        <Button w="90%" mb="20px">
          YouTube
        </Button>
        <Button w="90%" mb="20px">
          Twitter
        </Button>
        <Button w="90%" mb="20px">
          Facebook
        </Button>
        <Button w="90%" mb="20px">
          Instagram
        </Button>
        <Image w="30%" src={linkTreeLogo} mx="auto" my="15%" />
      </Flex>
    </Flex>
  );
}

export default Home;
