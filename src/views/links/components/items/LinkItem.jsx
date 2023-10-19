import { Button, Flex, Switch } from "@chakra-ui/react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputItem from "./InputItem";

const LinkItem = ({ id, url, name, deleteLinkItem, updateLink }) => {
  return (
    <Flex bg="gray.700" borderRadius="20px" my="20px" pb="10px" flexGrow={1}>
      <Flex mx="5%" mt="5%" flexDir="column" flexGrow={1}>
        <Flex alignItems="start" justifyContent="space-between">
          <Flex flexDir="column">
            <InputItem
              value={name}
              updateLink={updateLink}
              id={id}
              prop="name"
            />
            <InputItem value={url} updateLink={updateLink} id={id} prop="url" />
          </Flex>
          <Switch />
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