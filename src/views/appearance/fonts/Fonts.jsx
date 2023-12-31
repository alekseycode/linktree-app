import {
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Button,
} from "@chakra-ui/react";
import ChevronDownIcon from "../../../icons/ChevronDownIcon";
import ColorPicker from "../buttons/items/ColorPicker";
import { useState } from "react";

const Fonts = ({ styles, updateStyle, updateDesign }) => {
  const [font, setFont] = useState("Arvo");
  return (
    <>
      <Text mt="48px" mb="16px" fontSize="1.4rem">
        Fonts
      </Text>
      <Flex
        flexDir="column"
        bg="gray.700"
        borderRadius="30px"
        px="28px"
        mb="60px"
      >
        <Text ml="18px" mt="28px" mb="18px">
          Font
        </Text>
        <Menu name="font menu">
          <MenuButton
            boxShadow="0px 2px 4px lightgray"
            mb="28px"
            mx="18px"
            as={Button}
            rightIcon={
              <Icon w="10px" h="10px" color="white" as={ChevronDownIcon} />
            }
          >
            {font}
          </MenuButton>
          <MenuList>
            <MenuItem
              onClick={() => {
                updateDesign({ font: "Arvo" });
                setFont("Arvo");
              }}
            >
              Arvo
            </MenuItem>
            <MenuItem
              onClick={() => {
                updateDesign({ font: "Agbalumo" });
                setFont("Agbalumo");
              }}
            >
              Agbalumo
            </MenuItem>
            <MenuItem
              onClick={() => {
                updateDesign({ font: "Kenia" });
                setFont("Kenia");
              }}
            >
              Kenia
            </MenuItem>
            <MenuItem
              onClick={() => {
                updateDesign({ font: "Dancing Script" });
                setFont("Dancing Script");
              }}
            >
              Dancing Script
            </MenuItem>
            <MenuItem
              onClick={() => {
                updateDesign({ font: "Crimson Text" });
                setFont("Crimson Text");
              }}
            >
              Crimson Text
            </MenuItem>
            <MenuItem
              onClick={() => {
                updateDesign({ font: "Linefont" });
                setFont("Linefont");
              }}
            >
              Linefont
            </MenuItem>
          </MenuList>
        </Menu>
        <ColorPicker
          heading="Color"
          background={styles.fontColor}
          onChange={(color) => updateStyle("fontColor", color.hex)}
          onKeyDown={(e) => {
            const val = e.target.value;
            if (e.key === "Enter" && val) {
              updateStyle("fontColor", val !== "#" ? val : styles.fontColor);
              updateDesign({ fontColor: val });
            }
          }}
          inputVal={styles.fontColor}
          onBlur={() => updateDesign({ fontColor: styles.fontColor })}
        />
      </Flex>
    </>
  );
};

export default Fonts;
