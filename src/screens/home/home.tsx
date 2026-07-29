import { useMemo } from "react";
import { Pressable, ScrollView, View } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { Button, Card, Header, Icon, Screen, Typography } from "@/components";
import type { IconFamily, IconName } from "@/components/icon/icon";
import type { RootStackParamList } from "@/routes/navigation-params-list";
import { useTheme } from "@/store/theme.store";
import { TypographyType } from "@/theme";
import { hexToRgba } from "@/utils/color";

import createStyles from "./styles";

type LoggedMoment = {
  id: string;
  icon: { family: IconFamily; name: IconName };
  title: string;
  subtitle: string;
  time: string;
  tone: "sage" | "danger";
};

const LOGGED_MOMENTS: LoggedMoment[] = [
  {
    id: "wake-up",
    icon: { family: "feather", name: "sunrise" },
    title: "Woke up early",
    subtitle: "Personal Wellness",
    time: "7:02",
    tone: "sage",
  },
  {
    id: "left-tiktok",
    icon: { family: "feather", name: "slash" },
    title: "Left TikTok",
    subtitle: "Digital Balance",
    time: "13:40",
    tone: "danger",
  },
];

export default function Home() {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>

        <View style={styles.topBar}>
          <View style={styles.greeting}>
            <Typography type={TypographyType.TITLE_LARGE} style={styles.greetingLine}>
              Hi Andy,
            </Typography>
            <Typography type={TypographyType.TITLE_LARGE} style={styles.greetingHighlight}>
              just today is enough.
            </Typography>
          </View>
          <Pressable onPress={() => navigation.navigate("Settings")} hitSlop={8}>
            <Icon family="feather" name="settings" size={22} color={theme.color.textPrimary as string} />
          </Pressable>
        </View>

        <Card elevation="sm">
          <View style={styles.mealRow}>
            <View style={styles.mealIconBadge}>
              <Icon
                family="materialCommunity"
                name="silverware-fork-knife"
                size={16}
                color={theme.color.terracotta700 as string}
              />
            </View>
            <Typography type={TypographyType.LABEL} style={styles.mealQuestion}>
              Did you cook a meal for yourself today?
            </Typography>
          </View>
          <View style={styles.mealActions}>
            <Button label="Yes, I did" variant="primary" onPress={() => {}} />
            <Button label="Not yet" variant="outlined" onPress={() => {}} />
          </View>
        </Card>

        <Button
          label="Log a moment"
          variant="primary"
          icon={{ name: "plus", family: "feather" }}
          onPress={() => navigation.navigate("CreateMoment")}
        />

        <View style={styles.sectionHeader}>
          <Typography type={TypographyType.CAPTION} style={styles.sectionLabel}>
            Logged today
          </Typography>
          <Typography type={TypographyType.CAPTION} style={styles.sectionDate}>
            Monday, Oct 23
          </Typography>
        </View>

        <View style={styles.loggedList}>
          {LOGGED_MOMENTS.map((item) => {
            const tint =
              item.tone === "danger"
                ? { bg: hexToRgba(theme.color.danger as string, 0.12), icon: theme.color.danger as string }
                : { bg: theme.color.sage100 as string, icon: theme.color.sage700 as string };

            return (
              <Card key={item.id} elevation="sm">
                <View style={styles.loggedItem}>
                  <View style={[styles.loggedIconBadge, { backgroundColor: tint.bg }]}>
                    <Icon family={item.icon.family} name={item.icon.name} size={18} color={tint.icon} />
                  </View>
                  <View style={styles.loggedTextGroup}>
                    <Typography type={TypographyType.LABEL} style={styles.loggedTitle}>
                      {item.title}
                    </Typography>
                    <Typography type={TypographyType.CAPTION}>{item.subtitle}</Typography>
                  </View>
                  <Typography type={TypographyType.CAPTION}>{item.time}</Typography>
                </View>
              </Card>
            );
          })}
        </View>

        <View style={styles.photoPlaceholder} />
      </ScrollView>
    </Screen>
  );
}
