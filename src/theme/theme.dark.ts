import { getAdaptorStyle } from '@/utils/adaptor-style-sheet';
import { COLOR_DARK } from "./color";
import { Theme } from "./data/model";
import { FONT } from "./font";
import { LAYOUT_DARK } from "./layout";
import { BASE_DARK_THEME_ID, BASE_DARK_THEME_NAME } from "./theme.constant";
import { TYPOGRAPHY_DARK } from "./typography";

export const BASE_DARK_THEME: Theme = {
  id: BASE_DARK_THEME_ID,
  name: BASE_DARK_THEME_NAME,
  color: COLOR_DARK,
  layout: LAYOUT_DARK,
  typography: getAdaptorStyle(TYPOGRAPHY_DARK),
  font: FONT,
};
