import React from "react";
import ColorPicker from "./items/ColorPicker";

const ButtonColors = () => {
  return (
    <>
      <ColorPicker heading="Button color" />
      <ColorPicker heading="Button font color" />
      <ColorPicker heading="Shadow color" />
    </>
  );
};

export default ButtonColors;
