import { useMemo } from "react";
import { Pressable, Text } from "react-native";

import { Icon, IconFamily, IconName } from "@/components/icon/icon";
import {
  COLOR_DANGER,
  COLOR_DIVIDER,
  COLOR_NEUTRAL,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_TERTIARY,
  COLOR_TEXT,
} from "@/theme";
import { hexToRgba } from "@/utils/color";
import { px2dp } from "@/utils/adaptor-style-sheet";

import createStyles from "./styles";

export type ButtonVariant = "primary" | "secondary" | "inverted" | "outlined";

const VARIANT_COLORS: Record<
  ButtonVariant,
  { bg: string; bgPressed: string; text: string; border?: string }
> = {
  primary: { bg: COLOR_PRIMARY[500], bgPressed: COLOR_PRIMARY[600], text: COLOR_TERTIARY.bg },
  secondary: { bg: COLOR_NEUTRAL[200], bgPressed: COLOR_NEUTRAL[300], text: COLOR_TEXT },
  inverted: { bg: COLOR_NEUTRAL[900], bgPressed: COLOR_NEUTRAL[800], text: COLOR_TERTIARY.bg },
  outlined: {
    bg: "transparent",
    bgPressed: hexToRgba(COLOR_TEXT, 0.1),
    text: COLOR_TEXT,
    border: COLOR_DIVIDER,
  },
};

type ButtonProps = {
  label: string;
  variant?: ButtonVariant;
  onPress?: () => void;
  disabled?: boolean;
  icon?: { name: IconName; family?: IconFamily };
};

export function Button({ label, variant = "primary", onPress, disabled, icon }: ButtonProps) {
  const styles = useMemo(() => createStyles(), []);
  const colors = VARIANT_COLORS[variant];

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        variant === "outlined" && styles.outlined,
        { backgroundColor: pressed ? colors.bgPressed : colors.bg, borderColor: colors.border },
        disabled && styles.disabled,
      ]}
    >
      {icon ? <Icon name={icon.name} family={icon.family} size={16} color={colors.text} /> : null}
      <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
    </Pressable>
  );
}

export type IconButtonIntent = "primary" | "secondary" | "neutral" | "danger";

const ICON_BUTTON_COLORS: Record<IconButtonIntent, { bg: string; bgPressed: string }> = {
  primary: { bg: COLOR_PRIMARY[500], bgPressed: COLOR_PRIMARY[600] },
  secondary: { bg: COLOR_SECONDARY[500], bgPressed: COLOR_SECONDARY[600] },
  neutral: { bg: COLOR_NEUTRAL[500], bgPressed: COLOR_NEUTRAL[600] },
  danger: { bg: COLOR_DANGER, bgPressed: COLOR_DANGER },
};

type IconButtonProps = {
  name: IconName;
  family?: IconFamily;
  intent?: IconButtonIntent;
  onPress?: () => void;
  disabled?: boolean;
  size?: number;
};

export function IconButton({
  name,
  family,
  intent = "primary",
  onPress,
  disabled,
  size = 44,
}: IconButtonProps) {
  const styles = useMemo(() => createStyles(), []);
  const colors = ICON_BUTTON_COLORS[intent];

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.iconButton,
        {
          width: px2dp(size),
          height: px2dp(size),
          backgroundColor: pressed ? colors.bgPressed : colors.bg,
        },
        disabled && styles.disabled,
      ]}
    >
      <Icon name={name} family={family} size={size * 0.45} color={COLOR_TERTIARY.bg} />
    </Pressable>
  );
}
