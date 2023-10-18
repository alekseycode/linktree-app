import { Flex, Text } from "@chakra-ui/react";
import ThemesItem from "./ThemesItem";

const Themes = () => {
  return (
    <>
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
          <ThemesItem
            description="Linktree x Olivia Rodrigo"
            imageSRC="https://mfe-appearance.production.linktr.ee/images/selector-olivia-rodrigo-guts.bce5704bb397972aa4c6.webp"
          />
          <ThemesItem
            description="Linktree x Olivia Rodrigo (Dark)"
            imageSRC="https://mfe-appearance.production.linktr.ee/images/selector-olivia-rodrigo-guts-v2.48846b855e65ab113f62.webp"
          />
          <ThemesItem
            description="Halloween '23"
            imageSRC="https://mfe-appearance.production.linktr.ee/images/selector-halloween-2023.c329d62fcebabf650686.webp"
          />
        </Flex>
      </Flex>
    </>
  );
};

export default Themes;
