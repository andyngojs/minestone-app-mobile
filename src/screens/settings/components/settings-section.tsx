import type { PropsWithChildren } from "react";
import { useMemo } from "react";
import { View } from "react-native";

import { Card, Typography } from "@/components";
import { useTheme } from "@/store/theme.store";
import { TypographyType } from "@/theme";

import createStyles from "../styles";

type SettingsSectionProps = PropsWithChildren<{
  title: string;
}>;

export function SettingsSection({ title, children }: SettingsSectionProps) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.section}>
      <Typography type={TypographyType.CAPTION} style={styles.sectionLabel}>
        {title}
      </Typography>
      <Card elevation="sm" style={styles.rowsCard}>
        {children}
      </Card>
    </View>
  );
}
