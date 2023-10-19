import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import AddLink from "./components/AddLink";
import LinkItem from "./components/items/LinkItem";

const Links = () => {
  const [showAddLink, setShowAddLink] = useState(false);
  const [linkItems, setLinkItems] = useState([]);

  const createLinkItem = (newLink) =>
    setLinkItems((prevItems) => [newLink, ...prevItems]);

  const deleteLinkItem = (id) => {
    const newLinksArr = linkItems.filter((link) => link.id !== id);
    setLinkItems(newLinksArr);
  };

  const updateLink = (id, prop, value) => {
    setLinkItems((prevItems) =>
      prevItems.map((link) =>
        link.id === id ? { ...link, [prop]: value } : link
      )
    );
  };

  return (
    <Flex flexDir="column" ml="20px" flexGrow="1" maxW="70%">
      <Flex bg="#37374c82" p="10px" borderRadius="22px" mb="60px">
        <Text fontSize="1.25rem" mr="15px">
          ⓘ
        </Text>
        <Box fontSize="0.9rem" flexGrow="1" flexDir="column">
          <Box>
            <strong> Your Linktree is live: </strong>
            <Link
              isExternal
              href="https://linktr.ee/losh_cherns"
              textDecor="underline"
            >
              linktr.ee/losh_cherns
            </Link>
          </Box>
          <Text>Share your Linktree to your socials</Text>
        </Box>
        <Button borderRadius="30px" alignSelf="center" py="22px">
          Copy URL
        </Button>
      </Flex>

      {showAddLink ? (
        <AddLink
          createLinkItem={createLinkItem}
          onXClick={() => setShowAddLink(false)}
        />
      ) : (
        <Button
          onClick={() => setShowAddLink(true)}
          borderRadius="30px"
          mb="40px"
          py="25px"
        >
          + Add Link
        </Button>
      )}
      {linkItems.map((link) => (
        <LinkItem
          id={link.id}
          name={link.name}
          url={link.url}
          deleteLinkItem={deleteLinkItem}
          key={link.id}
          updateLink={updateLink}
        />
      ))}
    </Flex>
  );
};

export default Links;
