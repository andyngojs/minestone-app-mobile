import {
  BeVietnamPro_400Regular,
  BeVietnamPro_500Medium,
  BeVietnamPro_600SemiBold,
  BeVietnamPro_700Bold,
  BeVietnamPro_800ExtraBold,
} from '@expo-google-fonts/be-vietnam-pro';
import {Font} from '../data/model';

// Font family names — must match the keys passed to useFonts() below 1:1,
// since RN resolves `fontFamily` by that exact loaded-font key.
export const FONT_FAMILY = {
  regular: 'BeVietnamPro_400Regular',
  medium: 'BeVietnamPro_500Medium',
  semiBold: 'BeVietnamPro_600SemiBold',
  bold: 'BeVietnamPro_700Bold',
  extraBold: 'BeVietnamPro_800ExtraBold',
};

// Pass directly to useFonts() at app startup (src/app/app.tsx).
export const FONT_ASSETS = {
  BeVietnamPro_400Regular,
  BeVietnamPro_500Medium,
  BeVietnamPro_600SemiBold,
  BeVietnamPro_700Bold,
  BeVietnamPro_800ExtraBold,
};

export const FONT: Font = {
  main: FONT_FAMILY.regular,
};
