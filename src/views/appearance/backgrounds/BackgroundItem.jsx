import { Flex, Text } from "@chakra-ui/react";

const BackgroundItem = ({ option, border, background }) => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Flex
        h="200px"
        w="128px"
        mb="10px"
        border={border}
        borderRadius="10px"
        cursor="pointer"
        bg={background}
      ></Flex>
      <Text>{option}</Text>
    </Flex>
  );
};

export default BackgroundItem;
