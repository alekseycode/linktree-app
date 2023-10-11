import { Button, Flex } from "@chakra-ui/react";

const Links = () => {
  return (
    <Flex flexDir="column" ml="20px" flexGrow="1">
      <Button borderRadius="10px" mb="20px">
        + Add Link
      </Button>
      <Button maxW="100px">Add Header</Button>
    </Flex>
  );
};

export default Links;
