import { forwardRef, useMemo } from "react";
import { StyleSheet, Text, TextProps } from "react-native";

import { useTheme } from "@/store/theme.store";
import { Theme, TypographyType } from "@/theme";

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    fontFamily: {
      fontFamily: theme.font?.main,
    },
    onPrimary: {
      color: theme.color.onPrimary as string,
    },
    onSecondary: {
      color: theme.color.onSecondary as string,
    },
    onSurface: {
      color: theme.color.onSurface as string,
    },
    onBackground: {
      color: theme.color.onBackground as string,
    },
    onContentBackground: {
      color: theme.color.onContentBackground as string,
    },
    onDisabled: {
      color: theme.color.onDisabled as string,
    },
  });

type TypographyProps = TextProps & {
  type?: TypographyType;

  onPrimary?: boolean;
  onSecondary?: boolean;
  onSurface?: boolean;
  onBackground?: boolean;
  onContentBackground?: boolean;
  onDisabled?: boolean;
};

export const Typography = forwardRef<Text, TypographyProps>(
  (
    {
      type = TypographyType.BODY,
      style,
      onPrimary,
      onSecondary,
      onSurface,
      onBackground,
      onContentBackground,
      onDisabled,
      children,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);

    const colorOverride = useMemo(() => {
      if (onDisabled) {
        return styles.onDisabled;
      } else if (onPrimary) {
        return styles.onPrimary;
      } else if (onSecondary) {
        return styles.onSecondary;
      } else if (onSurface) {
        return styles.onSurface;
      } else if (onBackground) {
        return styles.onBackground;
      } else if (onContentBackground) {
        return styles.onContentBackground;
      }
      return undefined;
    }, [styles, onDisabled, onPrimary, onSecondary, onSurface, onBackground, onContentBackground]);

    return (
      <Text ref={ref} {...props} style={[theme.typography[type], styles.fontFamily, colorOverride, style]}>
        {children}
      </Text>
    );
  },
);

Typography.displayName = "Typography";
