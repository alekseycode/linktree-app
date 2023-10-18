import { useState } from "react";
import { Flex, Image, Switch, Text } from "@chakra-ui/react";

import {
  SHAPE_SQUARE,
  BG_NONE,
  BUTTON_COLOR,
  SHADOW_COLOR,
  BG_COLOR,
  BUTTON_FONT_COLOR,
  FONT_COLOR,
} from "../../constants";
import ButtonStyles from "./buttons/components/ButtonStyles";
import ButtonColors from "./buttons/components/ButtonColors";
import Backgrounds from "./backgrounds/Backgrounds";
import Themes from "./themes/themes";
import Profile from "./profile/Profile";
import Fonts from "./fonts/Fonts";
import Buttons from "./buttons/Buttons";
import HideLogo from "./logo/HideLogo";
import CustomAppearance from "./custom/CustomAppearance";

const Appearance = () => {
  const [styles, setStyles] = useState({
    shape: SHAPE_SQUARE,
    variant: BG_NONE,
    shadow: null,
    buttonColor: BUTTON_COLOR,
    buttonFontColor: BUTTON_FONT_COLOR,
    shadowColor: SHADOW_COLOR,
    bgColor: BG_COLOR,
    fontColor: FONT_COLOR,
  });

  const updateStyle = (prop, value) => {
    setStyles((prev) => ({
      ...prev,
      [prop]: value,
    }));
  };

  return (
    <Flex flexDir="column" ml="30px" flexGrow="1" maxW="70%">
      <Profile />

      <Themes />

      <CustomAppearance />

      <Backgrounds styles={styles} updateStyle={updateStyle} />

      <Buttons styles={styles} updateStyle={updateStyle} />

      <Fonts styles={styles} updateStyle={updateStyle} />

      <HideLogo />
    </Flex>
  );
};

export default Appearance;
