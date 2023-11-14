import {
  Box,
  Flex,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChromePicker } from "react-color";

const ColorPicker = ({
  heading,
  background,
  onChange,
  onKeyDown,
  inputVal,
  onBlur,
}) => {
  const handleCopyClick = () => {
    const input = document.createElement("input");
    input.value = inputVal;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
  };

  return (
    <>
      <Text ml="18px" fontWeight="600" mb="10px">
        {heading}
      </Text>

      <Flex ml="18px" mb="28px" alignItems="center">
        <Popover>
          <PopoverTrigger>
            <Box
              h="50px"
              w="50px"
              bg={background}
              borderRadius="10px"
              mr="20px"
              cursor="pointer"
            ></Box>
          </PopoverTrigger>
          <PopoverContent w="90%" ml="34%" onBlur={onBlur}>
            <Flex justifyContent="center">
              <ChromePicker onChange={onChange} color={background} />
            </Flex>
          </PopoverContent>
        </Popover>

        <Input
          placeholder={inputVal}
          w="30%"
          onKeyDown={onKeyDown}
          name="colorPicker"
          mr="20px"
        />

        <Box cursor="pointer" onClick={() => handleCopyClick()}>
          <FontAwesomeIcon icon={faCopy} />
        </Box>
      </Flex>
    </>
  );
};

export default ColorPicker;
