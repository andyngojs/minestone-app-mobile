import type { PropsWithChildren } from "react";
import { useMemo } from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";

import { useTheme } from "@/store/theme.store";

import createStyles from "./styles";

type CardElevation = "sm" | "md" | "lg";

type CardProps = PropsWithChildren<{
  elevation?: CardElevation;
  style?: StyleProp<ViewStyle>;
}>;

function CardRoot({ elevation = "sm", style, children }: CardProps) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View
      style={[
        styles.base,
        theme.layout.shadow[elevation],
        { backgroundColor: theme.color.surface as string },
        style,
      ]}
    >
      {children}
    </View>
  );
}

function CardKicker({ children }: PropsWithChildren) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return <Text style={[styles.kicker, { color: theme.color.terracotta700 as string }]}>{children}</Text>;
}

function CardTitle({ children }: PropsWithChildren) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return <Text style={[styles.title, { color: theme.color.textPrimary as string }]}>{children}</Text>;
}

function CardBody({ children }: PropsWithChildren) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return <Text style={[styles.body, { color: theme.color.textPrimary as string }]}>{children}</Text>;
}

function CardMeta({ children }: PropsWithChildren) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return <Text style={styles.meta}>{children}</Text>;
}

export const Card = Object.assign(CardRoot, {
  Kicker: CardKicker,
  Title: CardTitle,
  Body: CardBody,
  Meta: CardMeta,
});
