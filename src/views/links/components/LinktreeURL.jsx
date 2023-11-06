import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import React, { useRef } from "react";

const LinktreeURL = () => {
  const linkRef = useRef(null);

  const handleCopyClick = () => {
    // Select the text within the link
    const range = document.createRange();
    range.selectNode(linkRef.current);

    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Deselect the text
    selection.removeAllRanges();
  };

  return (
    <Flex bg="#37374c82" p="10px" borderRadius="22px" mb="60px">
      <Text fontSize="1.25rem" mr="15px">
        ⓘ
      </Text>
      <Box fontSize="0.9rem" flexGrow="1" flexDir="column">
        <Box>
          <strong> Your Linktree is live: </strong>
          <Link
            ref={linkRef}
            isExternal
            href="https://linktr.ee/losh_cherns"
            textDecor="underline"
          >
            linktr.ee/losh_cherns
          </Link>
        </Box>
        <Text>Share your Linktree to your socials</Text>
      </Box>
      <Button
        borderRadius="30px"
        alignSelf="center"
        py="22px"
        onClick={handleCopyClick}
      >
        Copy URL
      </Button>
    </Flex>
  );
};

export default LinktreeURL;
