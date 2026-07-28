import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useMemo } from "react";
import { Pressable, View } from "react-native";

import { Typography } from "@/components/typography/typography";
import { useTheme } from "@/store/theme.store";
import { TypographyType } from "@/theme";

import createStyles from "./styles";

export function TabBar({ state, descriptors, navigation, insets }: BottomTabBarProps) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={[styles.container, { bottom: insets.bottom + theme.layout.spacing.sm }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const iconColor = isFocused ? (theme.color.onPrimary as string) : (theme.color.textInactive as string);

        return (
          <Pressable key={route.key} onPress={onPress} style={styles.item}>
            <View style={[styles.iconWrapper, isFocused && styles.iconWrapperActive]}>
              {options.tabBarIcon?.({ focused: isFocused, color: iconColor, size: 20 })}
            </View>
            <Typography
              type={TypographyType.CAPTION}
              style={[styles.label, isFocused && styles.labelActive]}
            >
              {route.name.toUpperCase()}
            </Typography>
          </Pressable>
        );
      })}
    </View>
  );
}
