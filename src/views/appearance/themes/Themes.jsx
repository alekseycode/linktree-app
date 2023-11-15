import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import ThemesItem from "./ThemesItem";
import { Link } from "react-scroll";

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
                    fontColor: "white",
                  })
                }
              >
                CREATE YOUR OWN
              </Flex>
            </Link>
            <Text>Custom</Text>
          </GridItem>
          <ThemesItem
            bgColor="#1f795d"
            variantColor="#bc4343"
            shadow=""
            shadowColor="#96ff84"
            description="Watermelon Joy"
            shape="0px"
            onClick={() =>
              updateDesign({
                bgColor: "#1f795d",
                shape: "0px",
                variantColor: "#bc4343",
                shadow: "",
                shadowColor: "#353535",
                buttonFontColor: "white",
                fontColor: "white",
              })
            }
          />
          <ThemesItem
            bgColor="black"
            variantColor="black"
            shadow="2px 2px 2px"
            shadowColor="#96ff84"
            description="Cyber-Dark"
            shape="0px"
            onClick={() =>
              updateDesign({
                bgColor: "black",
                shape: "0px",
                variantColor: "black",
                shadow: "5px 5px 5px",
                shadowColor: "#96ff84",
                buttonFontColor: "#96ff84",
                fontColor: "#96ff84",
              })
            }
          />
          <ThemesItem
            bgColor="#35bbbe"
            variantColor="#35bbbe"
            shadow="2px 2px 2px"
            shadowColor="black"
            description="Cool Breeze Blue"
            shape="5px"
            onClick={() =>
              updateDesign({
                bgColor: "#35bbbe",
                shape: "10px",
                variantColor: "#35bbbe",
                shadow: "2px 3px 3px",
                shadowColor: "black",
                buttonFontColor: "white",
                fontColor: "white",
              })
            }
          />
          <ThemesItem
            bgColor="#df8585"
            variantColor="#33d2a7"
            shadow="5px 5px 5px"
            shadowColor="black"
            description="Bubblegum"
            shape="5px"
            onClick={() =>
              updateDesign({
                bgColor: "#df8585",
                shape: "10px",
                variantColor: "#33d2a7",
                shadow: "5px 5px 5px",
                shadowColor: "black",
                buttonFontColor: "white",
                fontColor: "white",
              })
            }
          />
          <ThemesItem
            bgColor="#FFDB58"
            variantColor="#0093ff"
            shadow="5px 5px 5px"
            shadowColor="black"
            description="Spongebob"
            shape=""
            onClick={() =>
              updateDesign({
                bgColor: "#FFDB58",
                shape: "10px",
                variantColor: "#0093ff",
                shadow: "5px 5px 5px",
                shadowColor: "black",
                buttonFontColor: "white",
                fontColor: "white",
              })
            }
          />
        </Grid>
      </Flex>
    </>
  );
};

export default Themes;
