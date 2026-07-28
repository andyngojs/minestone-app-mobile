// @types
import {Theme} from './data/model';
// @constants
import {COLOR_LIGHT} from './color';
import {LAYOUT_LIGHT} from './layout';
import {TYPOGRAPHY_LIGHT} from './typography';
import {BASE_LIGHT_THEME_ID, BASE_LIGHT_THEME_NAME} from './theme.constant';
import {FONT} from './font';
import {getAdaptorStyle} from '@/utils/adaptor-style-sheet';

export const BASE_LIGHT_THEME: Theme = {
  id: BASE_LIGHT_THEME_ID,
  name: BASE_LIGHT_THEME_NAME,
  color: COLOR_LIGHT,
  layout: LAYOUT_LIGHT,
  typography: getAdaptorStyle(TYPOGRAPHY_LIGHT),
  font: FONT,
};
