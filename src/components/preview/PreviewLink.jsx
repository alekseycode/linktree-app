import { Flex, Link } from "@chakra-ui/react";

const PreviewLink = ({ name, url }) => {
  return (
    <Flex justifyContent="center" bg="gray.700" py="10px" mx="10%" my="2%">
      <Link isExternal href={url}>
        {name}
      </Link>
    </Flex>
  );
};

export default PreviewLink;
