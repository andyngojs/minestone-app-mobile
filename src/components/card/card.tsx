import type { PropsWithChildren } from "react";
import { useMemo } from "react";
import { Text, View } from "react-native";

import { useTheme } from "@/store/theme.store";
import { COLOR_PRIMARY, SHADOW } from "@/theme";

import createStyles from "./styles";

type CardElevation = "sm" | "md" | "lg";

type CardProps = PropsWithChildren<{
  elevation?: CardElevation;
}>;

function CardRoot({ elevation = "sm", children }: CardProps) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(), []);

  return (
    <View
      style={[
        styles.base,
        SHADOW[elevation],
        { backgroundColor: theme.color.surface as string },
      ]}
    >
      {children}
    </View>
  );
}

function CardKicker({ children }: PropsWithChildren) {
  const styles = useMemo(() => createStyles(), []);
  return <Text style={[styles.kicker, { color: COLOR_PRIMARY[700] }]}>{children}</Text>;
}

function CardTitle({ children }: PropsWithChildren) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(), []);
  return <Text style={[styles.title, { color: theme.color.textPrimary as string }]}>{children}</Text>;
}

function CardBody({ children }: PropsWithChildren) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(), []);
  return <Text style={[styles.body, { color: theme.color.textPrimary as string }]}>{children}</Text>;
}

function CardMeta({ children }: PropsWithChildren) {
  const styles = useMemo(() => createStyles(), []);
  return <Text style={styles.meta}>{children}</Text>;
}

export const Card = Object.assign(CardRoot, {
  Kicker: CardKicker,
  Title: CardTitle,
  Body: CardBody,
  Meta: CardMeta,
});
