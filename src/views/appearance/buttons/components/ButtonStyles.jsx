import { Flex, Text } from "@chakra-ui/react";
import ButtonItem from "../items/ButtonItem";
import {
  BG_FILL,
  BG_NONE,
  SHADOW_HARD,
  SHADOW_SOFT,
  SHAPE_CIRCLE,
  SHAPE_ROUNDED,
  SHAPE_SQUARE,
} from "../../../../constants/constants";

const borderRadiusVariants = {
  [SHAPE_SQUARE]: "0px",
  [SHAPE_ROUNDED]: "10px",
  [SHAPE_CIRCLE]: "full",
};

const ButtonStyles = ({ styles, updateStyle, updateDesign }) => {
  const borderRadius = borderRadiusVariants[styles.shape];
  const background = styles.variant === BG_FILL ? styles.buttonColor : "";
  return (
    <>
      <Text ml="18px" my="28px">
        Shape
      </Text>
      <Flex>
        <ButtonItem
          background={"gray.700"}
          borderRadius={borderRadiusVariants[SHAPE_SQUARE]}
          onClick={() => {
            updateStyle("shape", SHAPE_SQUARE);
            updateDesign({ shape: borderRadiusVariants[SHAPE_SQUARE] });
          }}
          isActive={styles.shape === SHAPE_SQUARE}
        />
        <ButtonItem
          background={"gray.700"}
          borderRadius={borderRadiusVariants[SHAPE_ROUNDED]}
          onClick={() => {
            updateStyle("shape", SHAPE_ROUNDED);
            updateDesign({ shape: borderRadiusVariants[SHAPE_ROUNDED] });
          }}
          isActive={styles.shape === SHAPE_ROUNDED}
        />
        <ButtonItem
          background={"gray.700"}
          borderRadius={borderRadiusVariants[SHAPE_CIRCLE]}
          onClick={() => {
            updateStyle("shape", SHAPE_CIRCLE);
            updateDesign({ shape: borderRadiusVariants[SHAPE_CIRCLE] });
          }}
          isActive={styles.shape === SHAPE_CIRCLE}
        />
      </Flex>
      <Text ml="18px" fontWeight="600" my="28px">
        Variant
      </Text>
      <Flex>
        <ButtonItem
          onClick={() => {
            updateStyle("variant", BG_NONE);
            updateDesign({ variantColor: "" });
          }}
          isActive={styles.variant === BG_NONE}
          borderRadius={borderRadius}
        />
        <ButtonItem
          background={styles.buttonColor}
          onClick={() => {
            updateStyle("variant", BG_FILL);
            updateDesign({ variantColor: styles.buttonColor });
          }}
          isActive={styles.variant === BG_FILL}
          borderRadius={borderRadius}
        />
      </Flex>
      <Text ml="18px" fontWeight="600" my="28px">
        Shadow
      </Text>
      <Flex mb="28px">
        <ButtonItem
          onClick={() => {
            updateStyle("shadow", null);
            updateDesign({ shadow: "" });
          }}
          borderRadius={borderRadius}
          isActive={styles.shadow === null}
          background={background}
        />
        <ButtonItem
          onClick={() => {
            updateStyle("shadow", SHADOW_SOFT);
            updateDesign({
              shadow: "0px 3px 3px",
              shadowColor: styles.shadowColor,
            });
          }}
          borderRadius={borderRadius}
          isActive={styles.shadow === SHADOW_SOFT}
          background={background}
          boxShadow={"0px 2px 2px " + styles.shadowColor}
        />
        <ButtonItem
          onClick={() => {
            updateStyle("shadow", SHADOW_HARD);
            updateDesign({
              shadow: "6px 6px 6px",
              shadowColor: styles.shadowColor,
            });
          }}
          borderRadius={borderRadius}
          isActive={styles.shadow === SHADOW_HARD}
          background={background}
          boxShadow={"6px 6px 6px " + styles.shadowColor}
        />
      </Flex>
    </>
  );
};

export default ButtonStyles;
