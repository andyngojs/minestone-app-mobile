import {PixelRatio} from 'react-native';
import {Layout} from '../data/model';

const SHADOW_COLOR = '#201E1D';

export const LAYOUT_LIGHT: Layout = {
  borderWidthPixel: 1 / PixelRatio.get(),
  borderWidthSmall: 0.5,
  borderWidth: 1,
  borderWidthLarge: 2,
  borderRadiusExtraSmall: 4,
  borderRadiusSmall: 8,
  borderRadiusMedium: 16,
  borderRadiusLarge: 28,
  borderRadiusHuge: 15,
  borderRadiusGigantic: 20,
  borderRadiusPill: 999,

  spacing: {
    xs: 4.4,
    sm: 8.8,
    md: 13.2,
    lg: 17.6,
    xl: 26.4,
    xxl: 35.2,
  },

  shadow: {
    sm: {
      shadowColor: SHADOW_COLOR,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.14,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: SHADOW_COLOR,
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 0.16,
      shadowRadius: 10,
      elevation: 6,
    },
    lg: {
      shadowColor: SHADOW_COLOR,
      shadowOffset: {width: 0, height: 12},
      shadowOpacity: 0.22,
      shadowRadius: 32,
      elevation: 12,
    },
  },

  statusBarStyle: 'dark-content',
  statusBarSurfaceModeStyle: 'light-content',
};
