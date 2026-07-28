import type {TextStyle, ViewStyle} from 'react-native';
import {hexToRgba} from '@/utils/color';
import {FONT_FAMILY} from './font';

export type ColorRamp = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export const COLOR_TEXT = '#201E1D';
export const COLOR_DIVIDER = hexToRgba(COLOR_TEXT, 0.16);
export const COLOR_DANGER = '#D64545';

export const COLOR_TERTIARY = {
  bg: '#F5EAD8',
  surface: '#EBDDC5',
};

export const COLOR_PRIMARY: ColorRamp = {
  100: '#FFF2EB',
  200: '#FFE1D0',
  300: '#FFC6A5',
  400: '#F6A06B',
  500: '#C67139',
  600: '#B2622D',
  700: '#8C491A',
  800: '#643312',
  900: '#402310',
};

export const COLOR_SECONDARY: ColorRamp = {
  100: '#F0FAE1',
  200: '#E1EECC',
  300: '#CCDBB2',
  400: '#AEBF92',
  500: '#7A8A5E',
  600: '#728157',
  700: '#56633F',
  800: '#3D472B',
  900: '#272E1B',
};

export const COLOR_NEUTRAL: ColorRamp = {
  100: '#F9F4ED',
  200: '#EEE7DB',
  300: '#DCD3C4',
  400: '#C0B6A5',
  500: '#A19786',
  600: '#82796A',
  700: '#645C50',
  800: '#474238',
  900: '#2E2B25',
};

export const SPACING = {
  1: 4.4,
  2: 8.8,
  3: 13.2,
  4: 17.6,
  6: 26.4,
  8: 35.2,
};

export const RADIUS = {
  sm: 8,
  md: 16,
  lg: 28,
  pill: 999,
};

type ShadowPreset = Pick<
  ViewStyle,
  'shadowColor' | 'shadowOffset' | 'shadowOpacity' | 'shadowRadius' | 'elevation'
>;

export const SHADOW: {sm: ShadowPreset; md: ShadowPreset; lg: ShadowPreset} = {
  sm: {
    shadowColor: COLOR_TEXT,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.14,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: COLOR_TEXT,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.16,
    shadowRadius: 10,
    elevation: 6,
  },
  lg: {
    shadowColor: COLOR_TEXT,
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.22,
    shadowRadius: 32,
    elevation: 12,
  },
};

export const TYPOGRAPHY: {
  headline: TextStyle;
  body: TextStyle;
  label: TextStyle;
  caption: TextStyle;
} = {
  headline: {
    fontFamily: FONT_FAMILY.extraBold,
    fontSize: 42,
    lineHeight: 46,
    color: COLOR_TEXT,
  },
  body: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: 15,
    lineHeight: 23,
    color: COLOR_TEXT,
  },
  label: {
    fontFamily: FONT_FAMILY.semiBold,
    fontSize: 14,
    lineHeight: 17,
    color: COLOR_TEXT,
  },
  caption: {
    fontFamily: FONT_FAMILY.regular,
    fontSize: 11,
    lineHeight: 15,
    color: hexToRgba(COLOR_TEXT, 0.55),
  },
};
