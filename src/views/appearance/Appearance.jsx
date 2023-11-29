import { useState } from "react";
import { Flex } from "@chakra-ui/react";

import {
  SHAPE_SQUARE,
  BG_NONE,
  BUTTON_COLOR,
  SHADOW_COLOR,
  BG_COLOR,
  BUTTON_FONT_COLOR,
  FONT_COLOR,
  FONT,
} from "../../constants/constants";
import Backgrounds from "./backgrounds/Backgrounds";
import Themes from "./themes/Themes";
import Profile from "./profile/Profile";
import Fonts from "./fonts/Fonts";
import Buttons from "./buttons/Buttons";
import HideLogo from "./logo/HideLogo";
import CustomAppearance from "./custom/CustomAppearance";
import useDesign from "../../hooks/useDesign";
import { DESIGN } from "../../constants/queryKeys";
import { useQueryClient } from "@tanstack/react-query";

const Appearance = () => {
  const queryClient = useQueryClient();
  const { design } = useDesign(1);
  const { title, bio } = design || {};

  const [styles, setStyles] = useState({
    shape: SHAPE_SQUARE,
    variant: BG_NONE,
    shadow: null,
    buttonColor: BUTTON_COLOR,
    buttonFontColor: BUTTON_FONT_COLOR,
    shadowColor: SHADOW_COLOR,
    bgColor: BG_COLOR,
    fontColor: FONT_COLOR,
    font: FONT,
  });

  const updateStyle = (prop, value) => {
    setStyles((prev) => ({
      ...prev,
      [prop]: value,
    }));
  };

  const updateDesign = (design) => {
    queryClient.setQueryData([DESIGN, 1], (cache) => ({
      ...cache,
      ...design,
    }));
  };

  return (
    <Flex flexDir="column" ml="30px" flexGrow="1" maxW="70%">
      <Profile title={title} bio={bio} updateDesign={updateDesign} />

      <Themes updateDesign={updateDesign} />

      <CustomAppearance name="custom" />

      <Backgrounds
        styles={styles}
        updateStyle={updateStyle}
        updateDesign={updateDesign}
      />

      <Buttons
        styles={styles}
        updateStyle={updateStyle}
        updateDesign={updateDesign}
      />

      <Fonts
        styles={styles}
        updateStyle={updateStyle}
        updateDesign={updateDesign}
      />

      <HideLogo updateDesign={updateDesign} />
    </Flex>
  );
};

export default Appearance;
