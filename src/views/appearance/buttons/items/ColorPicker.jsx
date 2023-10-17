import {
  Box,
  Flex,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { ChromePicker } from "react-color";

const ColorPicker = ({ heading }) => {
  const [chosenColor, setChosenColor] = useState("white");

  const handleChromePicker = (color) => {
    setChosenColor(color.hex);
  };

  const handleColorInput = (e) => {
    if (e.key === "Enter") {
      setChosenColor(e.target.value);
    }
  };

  return (
    <>
      <Text ml="18px" fontWeight="600" mb="10px">
        {heading}
      </Text>

      <Flex ml="18px" mb="28px">
        <Popover>
          <PopoverTrigger>
            <Box
              h="50px"
              w="50px"
              bg={chosenColor}
              borderRadius="10px"
              mr="20px"
              cursor="pointer"
            ></Box>
          </PopoverTrigger>
          <PopoverContent w="90%" ml="34%">
            <Flex justifyContent="center">
              <ChromePicker onChange={handleChromePicker} color={chosenColor} />
            </Flex>
          </PopoverContent>
        </Popover>

        <Input
          placeholder={heading}
          w="30%"
          onKeyDown={handleColorInput}
          defaultValue="#"
        />
      </Flex>
    </>
  );
};

export default ColorPicker;
