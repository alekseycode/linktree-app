import { Flex, Text } from "@chakra-ui/react";
import BackgroundItem from "./BackgroundItem";
import ColorPicker from "../buttons/items/ColorPicker";

const Backgrounds = ({ styles, updateStyle, updateDesign }) => {
  return (
    <>
      <Text mt="48px" mb="16px" fontSize="1.4rem">
        Backgrounds
      </Text>
      <Flex flexDir="column" bg={"gray.700"} borderRadius="30px">
        <Flex my="28px" mx="16px" justifyContent="space-evenly">
          <BackgroundItem
            option="Flat Color"
            background={styles.bgColor}
            onClick={() => updateDesign({ bgColor: styles.bgColor })}
          />
          <BackgroundItem
            option="Transparent"
            border="solid"
            onClick={() => updateDesign({ bgColor: "gray.800" })}
          />
          <BackgroundItem option="Image" border="dotted" />
          <BackgroundItem option="Video" border="dotted" />
        </Flex>
        <Flex flexDir="column" ml="5%">
          <ColorPicker
            heading="Color"
            background={styles.bgColor}
            onChange={(color) => updateStyle("bgColor", color.hex)}
            onKeyDown={(e) => {
              const val = e.target.value;
              if (e.key === "Enter" && val) {
                updateStyle("bgColor", val !== "#" ? val : styles.bgColor);
                updateDesign({ bgColor: val });
              }
            }}
            inputVal={styles.bgColor}
            onBlur={() => updateDesign({ bgColor: styles.bgColor })}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default Backgrounds;
