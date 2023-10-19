import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import AddLink from "./components/AddLink";
import LinkItem from "./components/items/LinkItem";
import LinktreeURL from "./components/LinktreeURL";

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
      <LinktreeURL />

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
      <Flex flexDir="column-reverse">
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
    </Flex>
  );
};

export default Links;
