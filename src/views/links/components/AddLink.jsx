import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import uuid from "react-uuid";

const AddLink = ({ createLinkItem, onXClick, id, setShowAddLink }) => {
  const [url, setUrl] = useState("");
  return (
    <Flex bg="gray.700" borderRadius="20px" mb="40px" pb="10px" id={id}>
      <Flex mx="5%" my="5%" flexDir="column" flexGrow={1}>
        <Button
          alignSelf="end"
          onClick={onXClick}
          fontSize="1rem"
          borderRadius="full"
          bg="gray.700"
          mt="-15px"
          mr="-15px"
        >
          X
        </Button>
        <Text fontSize="1.2rem" fontWeight="bold" mb="20px">
          Enter URL
        </Text>

        <Flex alignItems="center">
          <Input
            placeholder="URL"
            mr="25px"
            value={url}
            onChange={(e) => setUrl(e.target.value.trim())}
            name="addLink"
          />
          <Button
            isDisabled={!url}
            onClick={() => {
              createLinkItem({
                id: uuid(),
                url,
                name: url,
                isActive: true,
              });
              setUrl("");
              setShowAddLink(false);
            }}
            borderRadius="full"
            px="30px"
            py="25px"
          >
            Add
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AddLink;
