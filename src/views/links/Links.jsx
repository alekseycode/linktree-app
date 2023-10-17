import { Button, Flex, Link, Text } from "@chakra-ui/react";
import { useState } from "react";

const Links = () => {
  const [showAddLink, setShowAddLink] = useState(true);

  return (
    <Flex flexDir="column" ml="20px" flexGrow="1">
      <Flex bg="#37374c82" p="10px" borderRadius="22px" mb="60px">
        <Text fontSize="1.25rem" mr="15px">
          ⓘ
        </Text>
        <Text fontSize="0.9rem" flexGrow="1" flexDir="column">
          <span>
            <strong>Your Linktree is live: </strong>

            <Link
              isExternal
              href="https://linktr.ee/losh_cherns"
              textDecor="underline"
            >
              linktr.ee/losh_cherns
            </Link>
          </span>
          <Text>Share your Linktree to your socials</Text>
        </Text>
        <Button borderRadius="30px" alignSelf="center" py="22px">
          Copy URL
        </Button>
      </Flex>

      {showAddLink ? (
        <Button
          onClick={() => setShowAddLink(false)}
          borderRadius="30px"
          mb="40px"
          py="25px"
        >
          + Add Link
        </Button>
      ) : (
        <Flex>
          <Text>Enter URL</Text>
          <Button onClick={() => setShowAddLink(true)}>X</Button>
        </Flex>
      )}

      <Button
        maxW="100px"
        borderRadius="20px"
        p="20px"
        border="solid"
        px="60px"
        borderColor="gray"
      >
        Add Header
      </Button>
    </Flex>
  );
};

export default Links;