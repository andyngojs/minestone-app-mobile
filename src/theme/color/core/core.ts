import {CoreCommonColor, GetCoreColor} from '../../data/model';

export const CORE_COMMON: CoreCommonColor = {
  // GREY (Organic Design System — neutral/warm-gray ramp)
  grey100: '#F9F4ED',
  grey200: '#EEE7DB',
  grey300: '#DCD3C4',
  grey400: '#C0B6A5',
  grey500: '#A19786',
  grey600: '#82796A',
  grey700: '#645C50',
  grey800: '#474238',
  grey900: '#2E2B25',

  // TERRACOTTA (accent — primary ramp)
  terracotta100: '#FFF2EB',
  terracotta200: '#FFE1D0',
  terracotta300: '#FFC6A5',
  terracotta400: '#F6A06B',
  terracotta500: '#C67139',
  terracotta600: '#B2622D',
  terracotta700: '#8C491A',
  terracotta800: '#643312',
  terracotta900: '#402310',

  // SAGE (accent-2 — secondary ramp)
  sage100: '#F0FAE1',
  sage200: '#E1EECC',
  sage300: '#CCDBB2',
  sage400: '#AEBF92',
  sage500: '#7A8A5E',
  sage600: '#728157',
  sage700: '#56633F',
  sage800: '#3D472B',
  sage900: '#272E1B',

  // GREEN
  green50: '#e9f6e9',
  green100: '#cae9c8',
  green200: '#a9dba5',
  green300: '#86cd80',
  green400: '#6bc264',
  green500: '#51b748',
  green600: '#48a83f',
  green700: '#3b9534',
  green800: '#30842a',
  green900: '#196516',

  // BLUE
  blue50: '#e2f1ff',
  blue100: '#b9dcff',
  blue200: '#8ac6ff',
  blue300: '#55b0ff',
  blue400: '#259eff',
  blue500: '#008dff',
  blue600: '#007fff',
  blue700: '#126cea',
  blue800: '#1a5ad7',
  blue900: '#2138b8',

  // BLUE GREY
  blueGray50: '#edf1f4',
  blueGray100: '#d3dce2',
  blueGray200: '#b8c5ce',
  blueGray300: '#9badba',
  blueGray400: '#849aa9',
  blueGray500: '#6e889a',
  blueGray600: '#617888',
  blueGray700: '#516471',
  blueGray800: '#42515b',
  blueGray900: '#303b44',

  // YELLOW
  yellow50: '#fffde7',
  yellow100: '#fff9c4',
  yellow200: '#fff59d',
  yellow300: '#fef075',
  yellow400: '#fceb55',
  yellow500: '#ffeb3b',
  yellow600: '#fdd835',
  yellow700: '#fbc02d',
  yellow800: '#f9a825',
  yellow900: '#f57f16',

  // BLACK
  black: '#000000',

  // WHITE
  white: '#FFFFFF',
};

export const getCoreColor: GetCoreColor = (colors) => ({
  ...colors,

  // PRIMARY — Terracotta (accent-500)
  primary: colors.terracotta500,
  onPrimary: '#F5EAD8',

  // SECONDARY — Sage (accent-2-500)
  secondary: colors.sage500,
  onSecondary: '#F5EAD8',

  // NEUTRAL (Nature)
  neutral: colors.grey500,
  // —— Neutral variants ——
  background: '#F5EAD8',
  onBackground: '#201E1D',
  surface: '#EBDDC5',
  onSurface: '#201E1D',

  skeletonContainer: colors.blueGray100,
  // skeletonContent: lightenColor(colors.blueGray100 as string, -12),
});

export const CORE = getCoreColor(CORE_COMMON);
