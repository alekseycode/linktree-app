import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Switch,
  Text,
  Textarea,
} from "@chakra-ui/react";
import ChevronDownIcon from "./icons/ChevronDownIcon";

const Appearance = () => {
  return (
    <Flex flexDir="column" ml="30px" flexGrow="1" maxW="80%">
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
          <Input placeholder="Profile title" maxW="90%" mt="40px" mb="10px" />
          <Textarea placeholder="Bio" maxW="90%" />
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
      <Text mt="48px" mb="16px" fontSize="1.4rem">
        Themes
      </Text>
      <Flex flexDir="column" bg="gray.700" borderRadius="30px">
        <Flex my="28px" mx="16px" justifyContent="space-evenly">
          <Flex flexDir="column" alignItems="center">
            <Flex
              h="200px"
              w="128px"
              border="dotted"
              borderRadius="10px"
              cursor="pointer"
              textAlign="center"
              alignItems="center"
              fontSize="20px"
              lineHeight="1.25"
              px="10px"
              mb="10px"
            >
              CREATE YOUR OWN
            </Flex>
            <Text>Custom</Text>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Flex h="200px" w="128px" mb="10px" cursor="pointer">
              <Image
                borderRadius="10px"
                src="https://mfe-appearance.production.linktr.ee/images/selector-olivia-rodrigo-guts.bce5704bb397972aa4c6.webp"
              />
            </Flex>
            <Text w="128px" textAlign="center">
              Linktree x Olivia Rodrigo
            </Text>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Flex h="200px" w="128px" mb="10px" cursor="pointer">
              <Image
                borderRadius="10px"
                src="https://mfe-appearance.production.linktr.ee/images/selector-olivia-rodrigo-guts-v2.48846b855e65ab113f62.webp"
              />
            </Flex>
            <Text w="128px" textAlign="center">
              Linktree x Olivia Rodrigo (Dark)
            </Text>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Flex h="200px" w="128px" mb="10px" cursor="pointer">
              <Image
                borderRadius="10px"
                src="https://mfe-appearance.production.linktr.ee/images/selector-pebble-blue.48047a34097e85836255.png"
              />
            </Flex>
            <Text w="128px" textAlign="center">
              Pebble Blue
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Text mt="48px" fontSize="1.4rem">
        Custom Appearance
      </Text>
      <Text mt="18px" fontSize="1rem" maxW="600px">
        Completely customize your Linktree profile. Change your background with
        colors, gradients and images. Choose a button style, change the typeface
        and more.
      </Text>
      <Text mt="48px" mb="16px" fontSize="1.4rem">
        Backgrounds
      </Text>
      <Flex flexDir="column" bg="gray.700" borderRadius="30px">
        <Flex my="28px" mx="16px" justifyContent="space-evenly">
          <Flex flexDir="column" alignItems="center">
            <Flex
              h="200px"
              w="128px"
              mb="10px"
              borderRadius="10px"
              cursor="pointer"
              bg="gray.400"
            ></Flex>
            <Text>Flat Color</Text>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Flex
              h="200px"
              w="128px"
              mb="10px"
              borderRadius="10px"
              border="solid"
              cursor="pointer"
            ></Flex>
            <Text w="128px" textAlign="center">
              Gradient
            </Text>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Flex
              h="200px"
              w="128px"
              mb="10px"
              borderRadius="10px"
              border="dotted"
              cursor="pointer"
            ></Flex>
            <Text w="128px" textAlign="center">
              Image
            </Text>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Flex
              h="200px"
              w="128px"
              mb="10px"
              borderRadius="10px"
              border="dotted"
              cursor="pointer"
            ></Flex>
            <Text w="128px" textAlign="center">
              Video
            </Text>
          </Flex>
        </Flex>
        <Text ml="48px" fontWeight="600" mb="10px">
          Color
        </Text>
        <Flex ml="48px" mb="28px">
          <Box
            h="50px"
            w="50px"
            bg="purple"
            borderRadius="10px"
            mr="20px"
            cursor="pointer"
          ></Box>
          <Input placeholder="Color" w="200px" height="50px" />
        </Flex>
      </Flex>
      <Text mt="48px" mb="16px" fontSize="1.4rem">
        Buttons
      </Text>
      <Flex flexDir="column" bg="gray.700" borderRadius="30px" px="28px">
        <Text ml="18px" mt="28px" mb="18px">
          Fill
        </Text>
        <Flex justifyContent="space-around">
          <Box bg="white" w="180px" h="35px" cursor="pointer"></Box>
          <Box
            bg="white"
            w="180px"
            h="35px"
            borderRadius="10px"
            cursor="pointer"
          ></Box>
          <Box
            bg="white"
            w="180px"
            h="35px"
            borderRadius="30px"
            cursor="pointer"
          ></Box>
        </Flex>
        <Text ml="18px" mt="28px" mb="18px">
          Outline
        </Text>
        <Flex justifyContent="space-around">
          <Box
            bg="gray.700"
            w="180px"
            h="35px"
            border="solid white"
            cursor="pointer"
          ></Box>
          <Box
            bg="gray.700"
            w="180px"
            h="35px"
            border="solid white"
            borderRadius="10px"
            cursor="pointer"
          ></Box>
          <Box
            bg="gray.700"
            w="180px"
            h="35px"
            border="solid white"
            borderRadius="30px"
            cursor="pointer"
          ></Box>
        </Flex>
        <Text ml="18px" mt="28px" mb="18px">
          Soft Shadow
        </Text>
        <Flex justifyContent="space-around" mb="28px">
          <Box
            boxShadow="0px 4px 4px lightgray"
            bg="gray.700"
            w="180px"
            h="35px"
            cursor="pointer"
          ></Box>
          <Box
            boxShadow="0px 5px 4px lightgray"
            bg="gray.700"
            w="180px"
            h="35px"
            borderRadius="10px"
            cursor="pointer"
          ></Box>
          <Box
            boxShadow="0px 5px 5px lightgray"
            bg="gray.700"
            w="180px"
            h="35px"
            borderRadius="30px"
            cursor="pointer"
          ></Box>
        </Flex>
        <Text ml="18px" mt="28px" mb="18px">
          Hard Shadow
        </Text>
        <Flex justifyContent="space-around" mb="28px">
          <Box
            boxShadow="5px 5px 2px lightgray"
            bg="gray.700"
            w="180px"
            h="35px"
            cursor="pointer"
          ></Box>
          <Box
            boxShadow="5px 5px 2px lightgray"
            bg="gray.700"
            w="180px"
            h="35px"
            borderRadius="10px"
            cursor="pointer"
          ></Box>
          <Box
            boxShadow="5px 5px 2px lightgray"
            bg="gray.700"
            w="180px"
            h="35px"
            borderRadius="30px"
            cursor="pointer"
          ></Box>
        </Flex>
        <Text ml="18px" fontWeight="600" mb="10px">
          Button color
        </Text>
        <Flex ml="18px" mb="28px">
          <Box
            h="50px"
            w="50px"
            bg="purple"
            borderRadius="10px"
            mr="20px"
            cursor="pointer"
          ></Box>
          <Input placeholder="Button color" w="200px" height="50px" />
        </Flex>
        <Text ml="18px" fontWeight="600" mb="10px">
          Button font color
        </Text>
        <Flex ml="18px" mb="28px">
          <Box
            h="50px"
            w="50px"
            bg="white"
            borderRadius="10px"
            mr="20px"
            cursor="pointer"
          ></Box>
          <Input placeholder="Button font color" w="200px" height="50px" />
        </Flex>
        <Text ml="18px" fontWeight="600" mb="10px">
          Shadow color
        </Text>
        <Flex ml="18px" mb="28px">
          <Box
            h="50px"
            w="50px"
            bg="gray"
            borderRadius="10px"
            mr="20px"
            cursor="pointer"
          ></Box>
          <Input placeholder="Shadow color" w="200px" height="50px" />
        </Flex>
      </Flex>
      <Text mt="48px" mb="16px" fontSize="1.4rem">
        Fonts
      </Text>
      <Flex
        flexDir="column"
        bg="gray.700"
        borderRadius="30px"
        px="28px"
        mb="60px"
      >
        <Text ml="18px" mt="28px" mb="18px">
          Font
        </Text>
        <Menu>
          <MenuButton
            boxShadow="0px 2px 4px lightgray"
            mb="28px"
            mx="18px"
            as={Button}
            rightIcon={
              <Icon w="10px" h="10px" color="white" as={ChevronDownIcon} />
            }
          >
            Arvo
          </MenuButton>
          <MenuList>
            <MenuItem>Arvo</MenuItem>
            <MenuItem>Bitter</MenuItem>
            <MenuItem>Calistoga</MenuItem>
            <MenuItem>Crimson Text</MenuItem>
            <MenuItem>EB Garamond</MenuItem>
          </MenuList>
        </Menu>
        <Text ml="18px" fontWeight="600" mb="10px">
          Color
        </Text>
        <Flex ml="18px" mb="28px">
          <Box
            h="50px"
            w="50px"
            bg="white"
            borderRadius="10px"
            mr="20px"
            cursor="pointer"
          ></Box>
          <Input placeholder="Color" w="200px" height="50px" />
        </Flex>
      </Flex>
      <Flex
        flexDir="column"
        bg="gray.700"
        borderRadius="30px"
        px="28px"
        mb="100px"
      >
        <Flex justifyContent="space-between" mt="18px" mb="8px">
          <Text fontSize="1.1rem">Hide the Linktree logo</Text>
          <Switch mr="20px" />
        </Flex>
        <Image
          w="110px"
          h="70px"
          src="https://mfe-appearance.production.linktr.ee/images/logo.d1802ab494e6744207e6.svg"
        />
      </Flex>
    </Flex>
  );
};

export default Appearance;
