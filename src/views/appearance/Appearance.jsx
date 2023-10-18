import { useState } from "react";
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
import ChevronDownIcon from "../../icons/ChevronDownIcon";

import {
  SHAPE_SQUARE,
  BG_NONE,
  BUTTON_COLOR,
  SHADOW_COLOR,
  BG_COLOR,
  BUTTON_FONT_COLOR,
} from "../../constants";
import ButtonStyles from "./buttons/ButtonStyles";
import ButtonColors from "./buttons/ButtonColors";
import Backgrounds from "./backgrounds/Backgrounds";
import Themes from "./themes/themes";

const Appearance = () => {
  const [styles, setStyles] = useState({
    shape: SHAPE_SQUARE,
    variant: BG_NONE,
    shadow: null,
    buttonColor: BUTTON_COLOR,
    buttonFontColor: BUTTON_FONT_COLOR,
    shadowColor: SHADOW_COLOR,
    bgColor: BG_COLOR,
  });

  const updateStyle = (prop, value) => {
    setStyles((prev) => ({
      ...prev,
      [prop]: value,
    }));
  };

  return (
    <Flex flexDir="column" ml="30px" flexGrow="1" maxW="70%">
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
      <Themes />
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
      <Backgrounds styles={styles} updateStyle={updateStyle} />

      <Text mt="48px" mb="16px" fontSize="1.4rem">
        Buttons
      </Text>
      <Flex flexDir="column" bg="gray.700" borderRadius="30px" px="28px">
        <ButtonStyles styles={styles} updateStyle={updateStyle} />
        <ButtonColors styles={styles} updateStyle={updateStyle} />
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
