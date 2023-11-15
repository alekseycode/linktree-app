import { Box, Flex, Text } from "@chakra-ui/react";

const ThemesItem = ({
  bgColor,
  variantColor,
  shadow,
  shadowColor,
  description,
  onClick,
  shape,
}) => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      w="95%"
      onClick={onClick}
      cursor="pointer"
      textAlign="center"
    >
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        h="200px"
        w="full"
        borderRadius="15px"
        bg={bgColor}
        mb="10px"
      >
        <Box
          w="80%"
          h="8%"
          mb="5px"
          bg={variantColor}
          boxShadow={shadow + " " + shadowColor}
          borderRadius={shape}
        ></Box>
        <Box
          w="80%"
          h="8%"
          mb="5px"
          bg={variantColor}
          boxShadow={shadow + " " + shadowColor}
          borderRadius={shape}
        ></Box>
        <Box
          w="80%"
          h="8%"
          mb="5px"
          bg={variantColor}
          boxShadow={shadow + " " + shadowColor}
          borderRadius={shape}
        ></Box>
      </Flex>
      <Text>{description}</Text>
    </Flex>
  );
};

export default ThemesItem;
