import { Button, Flex, Input } from "@chakra-ui/react";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

const InputItem = ({ value, updateLink, id, prop }) => {
  const inputRef = useRef(null);

  const [isEditing, setIsEditing] = useState(false);

  const handlePencilClick = () => {
    inputRef.current.focus();
    setIsEditing(true);
  };

  return (
    <Flex>
      <Input
        ref={inputRef}
        mx="10px"
        border="none"
        onKeyDown={(e) => e.key === "Enter" && inputRef.current.blur()}
        defaultValue={value}
        onBlur={(e) => {
          setIsEditing(false);
          updateLink(id, prop, e.target.value);
        }}
        name="editLink"
        onClick={() => handlePencilClick()}
      ></Input>
      {!isEditing && (
        <Flex alignItems="center">
          <Button
            bg="gray.700"
            _hover={{ bg: "gray.700" }}
            onClick={() => handlePencilClick()}
          >
            <FontAwesomeIcon icon={faPencil} />
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default InputItem;
