import { Flex, Link } from "@chakra-ui/react";

const PreviewLink = ({
  name,
  url,
  active,
  borderRadius,
  variantColor,
  shadow,
}) => {
  return (
    active && (
      <Flex
        justifyContent="center"
        bg={variantColor}
        border="1px solid white"
        py="10px"
        mx="10%"
        my="2%"
        borderRadius={borderRadius}
        shadow={shadow}
      >
        <Link isExternal href={url}>
          {name}
        </Link>
      </Flex>
    )
  );
};

export default PreviewLink;
