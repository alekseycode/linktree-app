import { Flex, Image, Text } from "@chakra-ui/react";

const ThemesItem = ({ description, imageSRC }) => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Flex h="200px" w="128px" mb="10px" cursor="pointer">
        <Image borderRadius="10px" src={imageSRC} name="backgroundTheme" />
      </Flex>
      <Text w="128px" textAlign="center">
        {description}
      </Text>
    </Flex>
  );
};

export default ThemesItem;
