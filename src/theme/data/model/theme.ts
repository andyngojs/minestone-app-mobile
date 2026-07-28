import {StatusBarStyle, TextStyle, ViewStyle} from 'react-native';
import {Color} from './color';
import {TypographyType} from './typography';

export type Typography = {
  [type in TypographyType]?: TextStyle;
};
export type GetTypography = <T extends Color>(colors: T) => Typography;

export type ShadowPreset = Pick<
  ViewStyle,
  'shadowColor' | 'shadowOffset' | 'shadowOpacity' | 'shadowRadius' | 'elevation'
>;

export type Layout = {
  borderWidthPixel: number;
  borderWidthSmall: number;
  borderWidth: number;
  borderWidthLarge: number;
  borderRadiusExtraSmall: number;
  borderRadiusSmall: number;
  borderRadiusMedium: number;
  borderRadiusLarge: number;
  borderRadiusHuge: number;
  borderRadiusGigantic: number;
  borderRadiusPill: number;

  spacing: {xs: number; sm: number; md: number; lg: number; xl: number; xxl: number};
  shadow: {
    sm: ShadowPreset;
    md: ShadowPreset;
    lg: ShadowPreset;
  };

  statusBarStyle: StatusBarStyle;
  statusBarSurfaceModeStyle: StatusBarStyle;
};

export type Font = {
  main?: string;
  sub?: string;
};

export interface Theme {
  id: string;
  name: string;
  color: Color;
  layout: Layout;
  typography: Typography;
  font?: Font;
}
