import {
  Avatar,
  Box,
  Button,
  Flex,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { DESIGN } from "../../../constants/queryKeys";

const Profile = () => {
  // const updateProfile = (prop, value) => {
  //   queryClient.setQueryData([DESIGN, 1], (cache) => ({
  //     ...cache,
  //     [prop]: value,
  //   }));
  // };

  return (
    <>
      <Text mt="48px" mb="16px" fontSize="1.4rem">
        Profile
      </Text>
      <Flex flexDir="column" bg="gray.700" borderRadius="30px">
        <Flex>
          <Avatar
            name="Rob Banks"
            src="https://bit.ly/dan-abramov"
            alignSelf="center"
            height="100px"
            width="100px"
            m="20px"
            mt="30px"
          />
          <Flex flexDir="column" flexGrow="1" mr="20px">
            <Button
              mt="25px"
              borderRadius="30px"
              py="25px"
              colorScheme="teal"
              variant="outline"
            >
              Pick an image
            </Button>
            <Button mt="10px" borderRadius="30px" py="25px">
              Remove
            </Button>
          </Flex>
        </Flex>
        <Flex flexDir="column" alignItems="center">
          <Input
            placeholder="Profile title"
            maxW="90%"
            mt="40px"
            mb="10px"
            name="profileTitle"
            onChange={(e) => updateProfile("title", e.target.value)}
          />
          <Textarea placeholder="Bio" maxW="90%" name="profileBio" />
          <Text alignSelf="end" mb="30px" mr="40px" fontSize="0.75rem">
            0 / 80
          </Text>

          <Box h="1px" bg="gray" w="full"></Box>

          <Button
            variant="ghost"
            colorScheme="teal"
            mb="20px"
            w="80%"
            borderRadius="30px"
            mt="20px"
          >
            + Add social icons
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Profile;
