import { Avatar, Flex, Image, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import useDesign from "../../hooks/useDesign";
import PreviewLink from "./PreviewLink";

const Preview = () => {
  const { design } = useDesign(1);
  const { title, desc, imgURL, links = [] } = design || {};

  return (
    <Flex mt="5%">
      <Flex flexGrow="1" maxWidth="55%" mt="2%" justifyContent="center">
        <Outlet />
      </Flex>

      {/* Preview Container */}
      <Flex flexGrow="1" justifyContent="center" mt="8%">
        <Flex
          border="solid"
          borderRadius="20px"
          w="18%"
          h="64%"
          maxW="300px"
          position="fixed"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Flex flexDir="column">
            <Flex flexDir="column">
              <Avatar
                name="Rob Banks"
                src={imgURL}
                mt="20%"
                mb="5%"
                mx="auto"
                w="60px"
                h="60px"
              />
              <Text mx="auto" fontSize="1.2rem" mb="3%">
                @rob_banks
              </Text>
            </Flex>

            <Flex flexDir="column-reverse">
              {links.map((link) => (
                <PreviewLink key={link.id} name={link.name} url={link.url} />
              ))}
            </Flex>
          </Flex>
          <Image
            w="30%"
            src="https://mfe-appearance.production.linktr.ee/images/logo.d1802ab494e6744207e6.svg"
            mx="auto"
            mb="15%"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Preview;
