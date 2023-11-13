import {
  Avatar,
  Box,
  Button,
  Flex,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

const Profile = ({ title, bio, updateDesign }) => {
  const titleRef = useRef(null);
  const bioRef = useRef(null);
  const [bioLength, setBioLength] = useState(0);
  const [disclaimer, setDisclaimer] = useState(false);

  const MAX_BIO = 80;

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
            ref={titleRef}
            placeholder={title}
            maxW="90%"
            mt="40px"
            mb="10px"
            name="profileTitle"
            onKeyDown={(e) => e.key === "Enter" && titleRef.current.blur()}
            onBlur={(e) => updateDesign({ title: e.target.value })}
          />
          <Textarea
            ref={bioRef}
            placeholder={bio}
            maxW="90%"
            name="profileBio"
            onKeyDown={(e) => e.key === "Enter" && bioRef.current.blur()}
            onBlur={(e) => {
              bioLength > MAX_BIO ? setDisclaimer(true) : setDisclaimer(false);
              bioLength <= MAX_BIO && updateDesign({ bio: e.target.value });
            }}
            onChange={(e) => setBioLength(e.target.value.length)}
          />
          <Text
            alignSelf="end"
            mr="40px"
            fontSize="0.75rem"
            color={bioLength <= MAX_BIO ? "white" : "red"}
          >
            {bioLength + " / " + MAX_BIO}
          </Text>

          {disclaimer && (
            <Text color="red">Bio cannot exceed 80 characters.</Text>
          )}

          <Box h="1px" bg="gray" w="full" mt="30px"></Box>

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
