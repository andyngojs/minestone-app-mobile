import { useCallback, useMemo, useRef } from "react";
import { Pressable, ScrollView, View } from "react-native";

import { BottomSheetModal, type BottomSheetModalRef, Card, Header, Icon, Screen, Typography } from "@/components";
import type { IconFamily, IconName } from "@/components/icon/icon";
import type { AppScreenProps } from "@/routes/navigation-params-list";
import { useThemeStore } from "@/store/theme.store";
import {
  BASE_DARK_THEME_ID,
  BASE_DARK_THEME_NAME,
  BASE_LIGHT_THEME_ID,
  BASE_LIGHT_THEME_NAME,
  TypographyType,
} from "@/theme";

import { SettingsRowItem, SettingsSection, type SettingRowTone } from "./components";
import createStyles from "./styles";

type ThemeOption = {
  id: string;
  name: string;
};

const THEME_OPTIONS: ThemeOption[] = [
  { id: BASE_LIGHT_THEME_ID, name: BASE_LIGHT_THEME_NAME },
  { id: BASE_DARK_THEME_ID, name: BASE_DARK_THEME_NAME },
];

type SupportRow = {
  id: string;
  icon: { family: IconFamily; name: IconName };
  tone: SettingRowTone;
  label: string;
  onPress: () => void;
};

const SUPPORT_ROWS: SupportRow[] = [
  {
    id: "about",
    icon: { family: "ionicons", name: "sparkles" },
    tone: "sage",
    label: "About Ordinary Wins",
    onPress: () => {},
  },
  {
    id: "privacy",
    icon: { family: "feather", name: "lock" },
    tone: "sage",
    label: "Privacy",
    onPress: () => {},
  },
  {
    id: "help-center",
    icon: { family: "feather", name: "help-circle" },
    tone: "neutral",
    label: "Help Center",
    onPress: () => {},
  },
];

type Props = AppScreenProps<"Settings">;

export default function Settings({ navigation }: Props) {
  const theme = useThemeStore((state) => state.theme);
  const themeId = useThemeStore((state) => state.themeId);
  const setThemeId = useThemeStore((state) => state.setThemeId);
  const styles = useMemo(() => createStyles(theme), [theme]);
  const themeSheetRef = useRef<BottomSheetModalRef>(null);

  const themeModeLabel = useMemo(() => {
    let label = `${BASE_DARK_THEME_NAME}`;
    if (themeId === BASE_LIGHT_THEME_ID) {
      label = `${BASE_LIGHT_THEME_NAME}`;
    }
    return label;
  }, [themeId]);

  const openThemeSheet = useCallback(() => {
    themeSheetRef.current?.present();
  }, []);

  const handleSelectTheme = useCallback(
    (id: string) => {
      setThemeId(id);
      themeSheetRef.current?.dismiss();
    },
    [setThemeId],
  );

  return (
    <Screen>
      <Header title="Settings" onBackPress={() => navigation.goBack()} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.statsRow}>
          <Card elevation="sm" style={styles.statCard}>
            <Typography type={TypographyType.TITLE_LARGE} style={styles.statNumber}>
              124
            </Typography>
            <Typography type={TypographyType.CAPTION} style={styles.statLabel}>
              Wins Logged
            </Typography>
          </Card>
          <Card elevation="sm" style={styles.statCard}>
            <Typography type={TypographyType.TITLE_LARGE} style={styles.statNumber}>
              12
            </Typography>
            <Typography type={TypographyType.CAPTION} style={styles.statLabel}>
              Constellations
            </Typography>
          </Card>
        </View>

        <SettingsSection title="Preferences">
          <SettingsRowItem
            icon={{ family: "materialCommunity", name: "palette-outline" }}
            tone="neutral"
            label="Theme"
            trailing={themeModeLabel}
            isLast={false}
            onPress={openThemeSheet}
          />
          <SettingsRowItem
            icon={{ family: "feather", name: "bell" }}
            tone="terracotta"
            label="Notifications"
            isLast
            onPress={() => {}}
          />
        </SettingsSection>

        <SettingsSection title="Support">
          {SUPPORT_ROWS.map((row, index) => (
            <SettingsRowItem
              key={row.id}
              icon={row.icon}
              tone={row.tone}
              label={row.label}
              isLast={index === SUPPORT_ROWS.length - 1}
              onPress={row.onPress}
            />
          ))}
        </SettingsSection>
      </ScrollView>

      <BottomSheetModal ref={themeSheetRef} title="Choose Theme">
        {THEME_OPTIONS.map((option) => {
          const isSelected = option.id === themeId;

          return (
            <Pressable key={option.id} onPress={() => handleSelectTheme(option.id)} style={styles.sheetOption}>
              <Typography type={TypographyType.LABEL}>{option.name}</Typography>
              {isSelected ? (
                <Icon family="feather" name="check" size={18} color={theme.color.terracotta600 as string} />
              ) : null}
            </Pressable>
          );
        })}
      </BottomSheetModal>
    </Screen>
  );
}
