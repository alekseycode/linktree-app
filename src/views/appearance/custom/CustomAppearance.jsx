import { Text } from "@chakra-ui/react";

const CustomAppearance = ({ name }) => {
  return (
    <>
      <Text name={name} mt="48px" fontSize="1.4rem">
        Custom Appearance
      </Text>
      <Text mt="18px" fontSize="1rem" maxW="600px">
        Completely customize your Linktree profile. Change your background with
        colors, gradients and images. Choose a button style, change the typeface
        and more.
      </Text>
    </>
  );
};

export default CustomAppearance;
