import { Flex, Image, Switch, Text } from "@chakra-ui/react";
import { useState } from "react";

const HideLogo = ({ updateDesign }) => {
  const [showLogo, setShowLogo] = useState(false);
  return (
    <Flex
      flexDir="column"
      bg="gray.700"
      borderRadius="30px"
      px="28px"
      mb="100px"
    >
      <Flex justifyContent="space-between" mt="18px" mb="8px">
        <Text fontSize="1.1rem">Hide the Linktree logo</Text>
        <Switch
          mr="20px"
          name="hide logo"
          onChange={() => {
            setShowLogo((prev) => !prev);
            updateDesign("showLogo", showLogo);
          }}
        />
      </Flex>
      <Image
        w="110px"
        h="70px"
        src="https://mfe-appearance.production.linktr.ee/images/logo.d1802ab494e6744207e6.svg"
        name="linktree logo"
      />
    </Flex>
  );
};

export default HideLogo;
