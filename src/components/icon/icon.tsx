import {
  AntDesign,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import type { ComponentType } from "react";

import { useTheme } from "@/store/theme.store";
import { px2dp } from "@/utils/adaptor-style-sheet";

const ICON_SETS = {
  feather: Feather,
  ionicons: Ionicons,
  material: MaterialIcons,
  materialCommunity: MaterialCommunityIcons,
  antDesign: AntDesign,
  fontAwesome: FontAwesome,
} as const;

export type IconFamily = keyof typeof ICON_SETS;
export type IconName = string;

type IconProps = {
  family?: IconFamily;
  name: IconName;
  size?: number;
  color?: string;
};

export function Icon({ family, name, size = 24, color }: IconProps) {
  const theme = useTheme();
  const IconComponent = ICON_SETS[family ?? "feather"] as ComponentType<{
    name: string;
    size: number;
    color: string;
  }>;
  return (
    <IconComponent
      name={name}
      size={px2dp(size)}
      color={color ?? (theme.color.textPrimary as string)}
    />
  );
}
