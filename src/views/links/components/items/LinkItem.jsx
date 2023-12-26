import { Box, Button, Flex, Switch, Text } from "@chakra-ui/react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputItem from "./InputItem";
import { useState } from "react";

const LinkItem = ({ id, url, name, deleteLinkItem, updateLink, active }) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <Flex bg="gray.700" borderRadius="20px" my="20px" pb="10px" flexGrow={1}>
      <Flex mx="5%" mt="5%" flexDir="column" flexGrow={1}>
        <Flex alignItems="start" justifyContent="space-between">
          <Flex flexDir="column">
            <Flex alignItems="center">
              <Box w="60px">Name</Box>
              <InputItem
                value={name}
                updateLink={updateLink}
                id={id}
                prop="name"
              />
            </Flex>
            <Flex alignItems="center">
              <Box w="60px">URL</Box>
              <InputItem
                value={url}
                updateLink={updateLink}
                id={id}
                prop="url"
              />
            </Flex>
          </Flex>
          <Switch
            name="showLink"
            isChecked={active}
            onChange={() => {
              updateLink(id, "active", !isActive);
              setIsActive((prev) => !prev);
            }}
          />
        </Flex>
        <Flex justifyContent="end">
          <Button onClick={() => deleteLinkItem(id)} bg="gray.700" mr="-10px">
            <FontAwesomeIcon icon={faTrashCan} />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LinkItem;
