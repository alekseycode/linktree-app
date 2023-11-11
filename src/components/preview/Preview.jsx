import { Avatar, Flex, Image, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import useDesign from "../../hooks/useDesign";
import PreviewLink from "./PreviewLink";

const Preview = () => {
  const { design } = useDesign(1);
  const {
    title,
    bio,
    imgURL,
    links = [],
    bgColor,
    shape,
    variantColor,
    shadow,
    shadowColor,
    buttonFontColor,
    showLogo,
    font,
  } = design || {};

  return (
    <Flex mt="4%">
      <Flex flexGrow="1" maxWidth="55%" mt="2%" justifyContent="center">
        <Outlet />
      </Flex>

      {/* Preview Container */}
      <Flex flexGrow="1" justifyContent="center" mt="6%">
        <Flex
          border="solid"
          borderRadius="20px"
          w="18%"
          minH="64%"
          maxW="300px"
          position="fixed"
          flexDirection="column"
          justifyContent="space-between"
          bg={bgColor}
          fontFamily={font}
        >
          <Flex flexDir="column">
            <Flex flexDir="column">
              <Avatar
                name="Rob Banks"
                src={imgURL}
                mt="20%"
                mb="5%"
                mx="auto"
                w="80px"
                h="80px"
              />
              <Text mx="auto" fontSize="1.2rem" mb="3%">
                {"@" + title}
              </Text>
              <Text mx="auto" mb="8%" maxW="80%" textAlign="center">
                {bio}
              </Text>
            </Flex>

            <Flex flexDir="column-reverse">
              {links.map((link) => (
                <PreviewLink
                  key={link.id}
                  name={link.name}
                  url={link.url}
                  active={link.active}
                  borderRadius={shape}
                  variantColor={variantColor}
                  shadow={shadow}
                  shadowColor={shadowColor}
                  buttonFontColor={buttonFontColor}
                />
              ))}
            </Flex>
          </Flex>

          {showLogo && (
            <Image
              w="30%"
              src="https://mfe-appearance.production.linktr.ee/images/logo.d1802ab494e6744207e6.svg"
              mx="auto"
              mt="15%"
              mb="10%"
            />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Preview;
