import React from "react";
import ColorPicker from "./items/ColorPicker";

const ButtonColors = ({ styles, updateStyle }) => {
  return (
    <>
      <ColorPicker
        heading="Button color"
        background={styles.buttonColor}
        onChange={(color) => updateStyle("buttonColor", color.hex)}
        onKeyDown={(e) => {
          const val = e.target.value;
          if (e.key === "Enter" && val) {
            updateStyle("buttonColor", val !== "#" ? val : styles.buttonColor);
          }
        }}
        inputVal={styles.buttonColor}
      />
      <ColorPicker
        heading="Button font color"
        background={styles.buttonFontColor}
        onChange={(color) => updateStyle("buttonFontColor", color.hex)}
        onKeyDown={(e) => {
          const val = e.target.value;
          if (e.key === "Enter" && val) {
            updateStyle(
              "buttonFontColor",
              val !== "#" ? val : styles.buttonFontColor
            );
          }
        }}
        inputVal={styles.buttonFontColor}
      />
      <ColorPicker
        heading="Shadow color"
        background={styles.shadowColor}
        onChange={(color) => updateStyle("shadowColor", color.hex)}
        onKeyDown={(e) => {
          const val = e.target.value;
          if (e.key === "Enter" && val) {
            updateStyle("shadowColor", val !== "#" ? val : styles.shadowColor);
          }
        }}
        inputVal={styles.shadowColor}
      />
    </>
  );
};

export default ButtonColors;
