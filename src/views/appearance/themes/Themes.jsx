import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import ThemesItem from "./ThemesItem";
import { Link } from "react-scroll";
import watermelonJoyTheme from "../../../images/watermelon-joy2.png";
import cyberDarkTheme from "../../../images/cyber-dark2.png";
import coolBreezeTheme from "../../../images/cool-breeze-blue.png";
import bubblegumTheme from "../../../images/bubblegum.png";

const Themes = ({ updateDesign }) => {
  return (
    <>
      <Text mt="48px" mb="16px" fontSize="1.4rem">
        Themes
      </Text>
      <Flex flexDir="column" bg="gray.700" borderRadius="30px">
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={4}
          my="6%"
          mx="2%"
          justifyItems="center"
        >
          <GridItem textAlign="center">
            <Link
              to="custom"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <Flex
                h="200px"
                w="128px"
                border="dotted"
                borderRadius="10px"
                cursor="pointer"
                textAlign="center"
                alignItems="center"
                fontSize="20px"
                lineHeight="1.25"
                px="12px"
                mb="10px"
                onClick={() =>
                  updateDesign({
                    bgColor: "gray.800",
                    shape: "0px",
                    variantColor: "",
                    shadow: "",
                    shadowColor: "black",
                    buttonFontColor: "white",
                    showLogo: true,
                  })
                }
              >
                CREATE YOUR OWN
              </Flex>
            </Link>
            <Text>Custom</Text>
          </GridItem>
          <ThemesItem
            description="Watermelon Joy"
            imageSRC={watermelonJoyTheme}
            onClick={() =>
              updateDesign({
                bgColor: "#1f795d",
                shape: "0px",
                variantColor: "#bc4343",
                shadow: "",
                shadowColor: "#353535",
                buttonFontColor: "white",
                showLogo: true,
              })
            }
          />
          <ThemesItem
            description="Cyber-Dark"
            imageSRC={cyberDarkTheme}
            onClick={() =>
              updateDesign({
                bgColor: "black",
                shape: "0px",
                variantColor: "black",
                shadow: "5px 5px 5px",
                shadowColor: "#96ff84",
                buttonFontColor: "#96ff84",
                showLogo: false,
              })
            }
          />
          <ThemesItem
            description="Cool Breeze Blue"
            imageSRC={coolBreezeTheme}
            onClick={() =>
              updateDesign({
                bgColor: "#35bbbe",
                shape: "10px",
                variantColor: "#35bbbe",
                shadow: "0px 2px 2px",
                shadowColor: "black",
                buttonFontColor: "white",
                showLogo: true,
              })
            }
          />
          <ThemesItem
            description="Bubblegum"
            imageSRC={bubblegumTheme}
            onClick={() =>
              updateDesign({
                bgColor: "#df8585",
                shape: "10px",
                variantColor: "#33d2a7",
                shadow: "5px 5px 5px",
                shadowColor: "black",
                buttonFontColor: "white",
                showLogo: true,
              })
            }
          />
        </Grid>
      </Flex>
    </>
  );
};

export default Themes;
