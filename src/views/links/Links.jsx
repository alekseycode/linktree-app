import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import AddLink from "./components/AddLink";
import LinkItem from "./components/items/LinkItem";
import LinktreeURL from "./components/LinktreeURL";
import { useQueryClient } from "react-query";
import { DESIGN } from "../../constants/queryKeys";
import useDesign from "../../hooks/useDesign";

const Links = () => {
  const queryClient = useQueryClient();
  const [showAddLink, setShowAddLink] = useState(false);

  const { design } = useDesign(1);
  const { links = [] } = design || {};

  const createLinkItem = (link) => {
    queryClient.setQueryData([DESIGN, 1], (cache) => ({
      ...cache,
      links: [{ ...link }, ...cache.links],
    }));
  };

  const deleteLinkItem = (id) => {
    const newLinksArr = links.filter((link) => link.id !== id);
    queryClient.setQueryData([DESIGN, 1], (cache) => ({
      ...cache,
      links: [...newLinksArr],
    }));
  };

  const updateLink = (id, prop, value) => {
    const newLinksArr = links.map((link) =>
      link.id === id ? { ...link, [prop]: value } : link
    );
    queryClient.setQueryData([DESIGN, 1], (cache) => ({
      ...cache,
      links: [...newLinksArr],
    }));
  };

  return (
    <Flex flexDir="column" ml="20px" flexGrow="1" maxW="70%">
      <LinktreeURL />

      {showAddLink ? (
        <AddLink
          createLinkItem={createLinkItem}
          onXClick={() => setShowAddLink(false)}
          setShowAddLink={setShowAddLink}
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
        {links.length === 0 ? (
          <></>
        ) : (
          links.map((link) => (
            <LinkItem
              id={link.id}
              name={link.name}
              url={link.url}
              deleteLinkItem={deleteLinkItem}
              key={link.id}
              updateLink={updateLink}
              active={link.active}
            />
          ))
        )}
      </Flex>
    </Flex>
  );
};

export default Links;
