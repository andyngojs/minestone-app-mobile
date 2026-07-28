import { useMemo } from "react";
import { Pressable, Text } from "react-native";

import { Icon, IconFamily, IconName } from "@/components/icon/icon";
import { useTheme } from "@/store/theme.store";
import { Theme } from "@/theme";
import { hexToRgba } from "@/utils/color";
import { px2dp } from "@/utils/adaptor-style-sheet";

import createStyles from "./styles";

export type ButtonVariant = "primary" | "secondary" | "inverted" | "outlined";

const getVariantColors = (theme: Theme): Record<
  ButtonVariant,
  { bg: string; bgPressed: string; text: string; border?: string }
> => ({
  primary: {
    bg: theme.color.terracotta500 as string,
    bgPressed: theme.color.terracotta600 as string,
    text: theme.color.background as string,
  },
  secondary: {
    bg: theme.color.grey200 as string,
    bgPressed: theme.color.grey300 as string,
    text: theme.color.textPrimary as string,
  },
  inverted: {
    bg: theme.color.grey900 as string,
    bgPressed: theme.color.grey800 as string,
    text: theme.color.background as string,
  },
  outlined: {
    bg: "transparent",
    bgPressed: hexToRgba(theme.color.textPrimary as string, 0.1),
    text: theme.color.textPrimary as string,
    border: theme.color.divider as string,
  },
});

type ButtonProps = {
  label: string;
  variant?: ButtonVariant;
  onPress?: () => void;
  disabled?: boolean;
  icon?: { name: IconName; family?: IconFamily };
};

export function Button({ label, variant = "primary", onPress, disabled, icon }: ButtonProps) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const colors = getVariantColors(theme)[variant];

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

const getIconButtonColors = (theme: Theme): Record<IconButtonIntent, { bg: string; bgPressed: string }> => ({
  primary: { bg: theme.color.terracotta500 as string, bgPressed: theme.color.terracotta600 as string },
  secondary: { bg: theme.color.sage500 as string, bgPressed: theme.color.sage600 as string },
  neutral: { bg: theme.color.grey500 as string, bgPressed: theme.color.grey600 as string },
  danger: { bg: theme.color.danger as string, bgPressed: theme.color.danger as string },
});

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
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const colors = getIconButtonColors(theme)[intent];

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
      <Icon name={name} family={family} size={size * 0.45} color={theme.color.background as string} />
    </Pressable>
  );
}
