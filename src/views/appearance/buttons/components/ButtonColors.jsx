import React from "react";
import ColorPicker from "../items/ColorPicker";
import { BG_NONE } from "../../../../constants/constants";

const ButtonColors = ({ styles, updateStyle, updateDesign }) => {
  return (
    <>
      {styles.variant !== BG_NONE && (
        <ColorPicker
          heading="Button color"
          background={styles.buttonColor}
          onChange={(color) => updateStyle("buttonColor", color.hex)}
          onKeyDown={(e) => {
            const val = e.target.value;
            if (e.key === "Enter" && val) {
              updateStyle(
                "buttonColor",
                val !== "#" ? val : styles.buttonColor
              );
              updateDesign({ variantColor: val });
            }
          }}
          inputVal={styles.buttonColor}
          onBlur={() => updateDesign({ variantColor: styles.buttonColor })}
        />
      )}
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
            updateDesign({ buttonFontColor: val });
          }
        }}
        inputVal={styles.buttonFontColor}
        onBlur={() => updateDesign({ buttonFontColor: styles.buttonFontColor })}
      />
      {styles.shadow && (
        <ColorPicker
          heading="Shadow color"
          background={styles.shadowColor}
          onChange={(color) => updateStyle("shadowColor", color.hex)}
          onKeyDown={(e) => {
            const val = e.target.value;
            if (e.key === "Enter" && val) {
              updateStyle(
                "shadowColor",
                val !== "#" ? val : styles.shadowColor
              );
              updateDesign({ shadowColor: val });
            }
          }}
          inputVal={styles.shadowColor}
          onBlur={() => updateDesign({ shadowColor: styles.shadowColor })}
        />
      )}
    </>
  );
};

export default ButtonColors;
