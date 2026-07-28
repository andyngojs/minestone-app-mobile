import { useMemo } from "react";
import { Text, View } from "react-native";

import { COLOR_DIVIDER, COLOR_NEUTRAL, COLOR_PRIMARY, COLOR_SECONDARY, COLOR_TEXT } from "@/theme";

import createStyles from "./styles";

export type TagVariant = "accent" | "accent-solid" | "accent2" | "neutral" | "outline";
export type TagSize = "pill" | "sm";

const VARIANT_COLORS: Record<TagVariant, { bg: string; text: string; border?: string }> = {
  accent: { bg: COLOR_PRIMARY[100], text: COLOR_PRIMARY[700] },
  "accent-solid": { bg: COLOR_PRIMARY[500], text: COLOR_PRIMARY[100] },
  accent2: { bg: COLOR_SECONDARY[100], text: COLOR_SECONDARY[700] },
  neutral: { bg: COLOR_NEUTRAL[200], text: COLOR_NEUTRAL[700] },
  outline: { bg: "transparent", text: COLOR_TEXT, border: COLOR_DIVIDER },
};

type TagProps = {
  label: string;
  variant?: TagVariant;
  size?: TagSize;
};

export function Tag({ label, variant = "accent", size = "pill" }: TagProps) {
  const styles = useMemo(() => createStyles(), []);
  const colors = VARIANT_COLORS[variant];

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
