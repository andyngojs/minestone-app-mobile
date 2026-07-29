import type { ReactNode } from "react";
import { useMemo } from "react";
import { Pressable, View } from "react-native";

import { Icon } from "@/components/icon/icon";
import { Typography } from "@/components/typography/typography";
import { useTheme } from "@/store/theme.store";
import { TypographyType } from "@/theme";

import createStyles from "./styles";

type HeaderProps = {
  title?: string;
  titleColor?: string;
  onBackPress?: () => void;
  onClosePress?: () => void;
  right?: ReactNode;
};

export function Header({ title, titleColor, onBackPress, onClosePress, right }: HeaderProps) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <View style={[styles.side, styles.left]}>
        {onClosePress ? (
          <Pressable onPress={onClosePress} hitSlop={8}>
            <Icon name="x" family="feather" size={24} />
          </Pressable>
        ) : onBackPress ? (
          <Pressable onPress={onBackPress} hitSlop={8}>
            <Icon name="chevron-left" family="feather" size={26} />
          </Pressable>
        ) : null}
      </View>

      <Typography
        type={TypographyType.TITLE_MEDIUM}
        numberOfLines={1}
        style={[styles.title, titleColor ? { color: titleColor } : null]}
      >
        {title}
      </Typography>

      <View style={[styles.side, styles.right]}>{right}</View>
    </View>
  );
}
