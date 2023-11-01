import { Flex, GridItem, Image, Text } from "@chakra-ui/react";

const ThemesItem = ({ description, imageSRC, onClick }) => {
  return (
    <GridItem flexDir="column" alignItems="center" onClick={onClick}>
      <Flex h="200px" w="128px" mb="10px" cursor="pointer">
        <Image borderRadius="10px" src={imageSRC} name="backgroundTheme" />
      </Flex>
      <Text w="128px" textAlign="center">
        {description}
      </Text>
    </GridItem>
  );
};

export default ThemesItem;
