import { useMemo } from "react";
import { Text, View } from "react-native";

import { useTheme } from "@/store/theme.store";
import { Theme } from "@/theme";

import createStyles from "./styles";

export type TagVariant = "accent" | "accent-solid" | "accent2" | "neutral" | "outline";
export type TagSize = "pill" | "sm";

const getVariantColors = (theme: Theme): Record<TagVariant, { bg: string; text: string; border?: string }> => ({
  accent: { bg: theme.color.terracotta100 as string, text: theme.color.terracotta700 as string },
  "accent-solid": { bg: theme.color.terracotta500 as string, text: theme.color.terracotta100 as string },
  accent2: { bg: theme.color.sage100 as string, text: theme.color.sage700 as string },
  neutral: { bg: theme.color.grey200 as string, text: theme.color.grey700 as string },
  outline: { bg: "transparent", text: theme.color.textPrimary as string, border: theme.color.divider as string },
});

type TagProps = {
  label: string;
  variant?: TagVariant;
  size?: TagSize;
};

export function Tag({ label, variant = "accent", size = "pill" }: TagProps) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const colors = getVariantColors(theme)[variant];

  return (
    <View
      style={[
        styles.base,
        size === "pill" ? styles.pill : styles.sm,
        variant === "outline" && styles.outline,
        { backgroundColor: colors.bg, borderColor: colors.border },
      ]}
    >
      <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
    </View>
  );
}
