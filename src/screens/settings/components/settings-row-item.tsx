import { useMemo } from "react";
import { Pressable, View } from "react-native";

import { Icon, Typography } from "@/components";
import type { IconFamily, IconName } from "@/components/icon/icon";
import { useTheme } from "@/store/theme.store";
import { Theme, TypographyType } from "@/theme";

import createStyles from "../styles";

export type SettingRowTone = "terracotta" | "sage" | "neutral";

function getToneColors(theme: Theme, tone: SettingRowTone) {
  if (tone === "terracotta") {
    return {
      bg: theme.color.terracotta100 as string,
      icon: theme.color.terracotta700 as string,
    };
  }

  if (tone === "sage") {
    return {
      bg: theme.color.sage100 as string,
      icon: theme.color.sage700 as string,
    };
  }

  return {
    bg: theme.color.grey200 as string,
    icon: theme.color.grey700 as string,
  };
}

type SettingsRowItemProps = {
  icon: { family: IconFamily; name: IconName };
  tone: SettingRowTone;
  label: string;
  trailing?: string;
  isLast: boolean;
  onPress: () => void;
};

export function SettingsRowItem({ icon, tone, label, trailing, isLast, onPress }: SettingsRowItemProps) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const toneColors = getToneColors(theme, tone);

  return (
    <View>
      <Pressable onPress={onPress} style={styles.row}>
        <View style={[styles.rowIconBadge, { backgroundColor: toneColors.bg }]}>
          <Icon family={icon.family} name={icon.name} size={15} color={toneColors.icon} />
        </View>
        <Typography type={TypographyType.LABEL} style={styles.rowLabel}>
          {label}
        </Typography>
        {trailing ? (
          <Typography type={TypographyType.CAPTION} style={styles.rowTrailing}>
            {trailing}
          </Typography>
        ) : null}
        <Icon family="feather" name="chevron-right" size={18} color={theme.color.textInactive as string} />
      </Pressable>
      {isLast ? null : <View style={styles.rowDivider} />}
    </View>
  );
}
