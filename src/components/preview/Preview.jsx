import { Avatar, Flex, Image, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import useDesign from "../../hooks/useDesign";

const Preview = () => {
  const { design } = useDesign(1);
  const { title, desc, imgURL, links = [] } = design || {};

  return (
    <Flex mt="5%">
      <Flex flexGrow="1" maxWidth="55%" mt="2%" justifyContent="center">
        <Outlet />
      </Flex>

      {/* Preview Container */}
      <Flex flexGrow="1" justifyContent="center" mt="12%">
        <Flex
          border="solid"
          borderRadius="20px"
          w="18%"
          h="50%"
          maxW="300px"
          position="fixed"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Flex flexDir="column">
            <Avatar
              name="Rob Banks"
              src={imgURL}
              mt="20%"
              mb="5%"
              mx="auto"
              w="35%"
              h="50%"
            />
            <Text mx="auto" fontSize="1.2rem">
              @rob_banks
            </Text>
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
