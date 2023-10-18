import { Flex, Text } from "@chakra-ui/react";
import ButtonStyles from "./components/ButtonStyles";
import ButtonColors from "./components/ButtonColors";

const Buttons = ({ styles, updateStyle }) => {
  return (
    <>
      <Text mt="48px" mb="16px" fontSize="1.4rem">
        Buttons
      </Text>
      <Flex flexDir="column" bg="gray.700" borderRadius="30px" px="28px">
        <ButtonStyles styles={styles} updateStyle={updateStyle} />
        <ButtonColors styles={styles} updateStyle={updateStyle} />
      </Flex>
    </>
  );
};

export default Buttons;
