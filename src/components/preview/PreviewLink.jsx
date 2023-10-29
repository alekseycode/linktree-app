import { Flex, Link } from "@chakra-ui/react";

const PreviewLink = ({
  name,
  url,
  active,
  borderRadius,
  variantColor,
  shadow,
  shadowColor,
  buttonFontColor,
}) => {
  return (
    active && (
      <Flex
        justifyContent="center"
        bg={variantColor}
        border={!variantColor && "1px solid white"}
        py="10px"
        mx="10%"
        my="2%"
        borderRadius={borderRadius}
        shadow={shadow + " " + shadowColor}
        color={buttonFontColor}
      >
        <Link isExternal href={url} _hover={{ textDecor: "none" }}>
          {name}
        </Link>
      </Flex>
    )
  );
};

export default PreviewLink;
