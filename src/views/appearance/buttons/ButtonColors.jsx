import React from "react";
import ColorPicker from "./items/ColorPicker";

const ButtonColors = ({ styles, updateStyle }) => {
  return (
    <>
      <ColorPicker
        styles={styles}
        updateStyle={updateStyle}
        heading="Button color"
        background={styles.buttonColor}
        onChange={(color) => updateStyle("buttonColor", color.hex)}
        onKeyDown={(e) => {
          const val = e.target.value;
          if (e.key === "Enter" && val) {
            updateStyle("buttonColor", val !== "#" ? val : styles.buttonColor);
          }
        }}
      />
      <ColorPicker
        styles={styles}
        updateStyle={updateStyle}
        heading="Button font color"
        background={styles.fontColor}
        onChange={(color) => updateStyle("fontColor", color.hex)}
        onKeyDown={(e) => {
          const val = e.target.value;
          if (e.key === "Enter" && val) {
            updateStyle("fontColor", val !== "#" ? val : styles.fontColor);
          }
        }}
      />
      <ColorPicker
        styles={styles}
        updateStyle={updateStyle}
        heading="Shadow color"
        background={styles.shadowColor}
        onChange={(color) => updateStyle("shadowColor", color.hex)}
        onKeyDown={(e) => {
          const val = e.target.value;
          if (e.key === "Enter" && val) {
            updateStyle("shadowColor", val !== "#" ? val : styles.shadowColor);
          }
        }}
      />
    </>
  );
};

export default ButtonColors;
