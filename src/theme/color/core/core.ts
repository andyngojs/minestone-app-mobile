import {CoreCommonColor, GetCoreColor} from '../../data/model';
import {COLOR_NEUTRAL, COLOR_PRIMARY, COLOR_SECONDARY, COLOR_TERTIARY, COLOR_TEXT} from '../../tokens';

export const CORE_COMMON: CoreCommonColor = {
  // GREY (Organic Design System — neutral/warm-gray ramp)
  grey50: COLOR_NEUTRAL[100],
  grey100: COLOR_NEUTRAL[100],
  grey200: COLOR_NEUTRAL[200],
  grey300: COLOR_NEUTRAL[300],
  grey400: COLOR_NEUTRAL[400],
  grey500: COLOR_NEUTRAL[500],
  grey600: COLOR_NEUTRAL[600],
  grey700: COLOR_NEUTRAL[700],
  grey800: COLOR_NEUTRAL[800],
  grey900: COLOR_NEUTRAL[900],

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
  primary: COLOR_PRIMARY[500],
  onPrimary: COLOR_TERTIARY.bg,

  // SECONDARY — Sage (accent-2-500)
  secondary: COLOR_SECONDARY[500],
  onSecondary: COLOR_TERTIARY.bg,

  // NEUTRAL (Nature)
  neutral: colors.grey500,
  // —— Neutral variants ——
  background: COLOR_TERTIARY.bg,
  onBackground: COLOR_TEXT,
  surface: COLOR_TERTIARY.surface,
  onSurface: COLOR_TEXT,

  skeletonContainer: colors.blueGray100,
  // skeletonContent: lightenColor(colors.blueGray100 as string, -12),
});

export const CORE = getCoreColor(CORE_COMMON);
