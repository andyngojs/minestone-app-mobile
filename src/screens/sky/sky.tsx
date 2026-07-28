import { useMemo } from "react";
import { ScrollView, View } from "react-native";

import { Button, Card, Header, Icon, Screen, Typography } from "@/components";
import { useTheme } from "@/store/theme.store";
import { TypographyType } from "@/theme";

import createStyles from "./styles";

const STARS: { top: `${number}%`; left: `${number}%`; size: number }[] = [
  { top: "8%", left: "12%", size: 2 },
  { top: "14%", left: "42%", size: 3 },
  { top: "10%", left: "85%", size: 2 },
  { top: "24%", left: "60%", size: 2 },
  { top: "30%", left: "24%", size: 2 },
  { top: "40%", left: "50%", size: 3 },
  { top: "46%", left: "80%", size: 2 },
  { top: "54%", left: "32%", size: 2 },
  { top: "62%", left: "58%", size: 3 },
  { top: "70%", left: "14%", size: 2 },
  { top: "76%", left: "46%", size: 2 },
  { top: "82%", left: "88%", size: 2 },
  { top: "18%", left: "70%", size: 2 },
  { top: "58%", left: "10%", size: 2 },
];

export default function Sky() {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <Screen>
      <Header title="Minestone" />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.headlineWrap}>
          <Typography type={TypographyType.HEADLINE} style={styles.headline}>
            Your Constellation
          </Typography>
          <Typography type={TypographyType.CAPTION} style={styles.subtitle}>
            July 2026 · 34 wins
          </Typography>
        </View>

        <View style={styles.skyCard}>
          {STARS.map((star, index) => (
            <View
              key={index}
              style={[styles.star, { top: star.top, left: star.left, width: star.size, height: star.size }]}
            />
          ))}

          <View
            style={[
              styles.milestoneDot,
              { top: "34%", left: "18%", backgroundColor: theme.color.terracotta500 as string },
            ]}
          />
          <View style={[styles.badge, { top: "10%", left: "8%", backgroundColor: theme.color.terracotta500 as string }]}>
            <Icon family="feather" name="award" size={12} color={theme.color.background as string} />
            <Typography type={TypographyType.CAPTION} style={styles.badgeLabel} numberOfLines={1}>
              1 week of discipline
            </Typography>
          </View>

          <View
            style={[
              styles.milestoneDot,
              { top: "56%", left: "62%", backgroundColor: theme.color.sage500 as string },
            ]}
          />
          <View style={[styles.badge, { top: "70%", left: "26%", backgroundColor: theme.color.sage500 as string }]}>
            <Icon family="materialCommunity" name="silverware-fork-knife" size={12} color={theme.color.background as string} />
            <Typography type={TypographyType.CAPTION} style={styles.badgeLabel} numberOfLines={1}>
              30 days of home cooking
            </Typography>
          </View>
        </View>

        <Card elevation="sm">
          <View style={styles.progressRow}>
            <View style={styles.progressIconBadge}>
              <Icon family="ionicons" name="sparkles" size={16} color={theme.color.terracotta700 as string} />
            </View>
            <Typography type={TypographyType.LABEL} style={styles.progressTitle}>
              The Night Sky of Your Progress
            </Typography>
          </View>
          <Typography type={TypographyType.CAPTION} style={styles.progressBody}>
            Each star represents a win recorded this month. Notice how they cluster together—your
            small acts of consistency are forming a beautiful map of growth.
          </Typography>
        </Card>

        <View style={styles.actionsRow}>
          <View style={styles.actionButton}>
            <Button
              label="Export Map"
              variant="secondary"
              icon={{ name: "arrow-left", family: "feather" }}
              onPress={() => {}}
            />
          </View>
          <View style={styles.actionButton}>
            <Button
              label="Dream Mode"
              variant="secondary"
              icon={{ name: "moon", family: "feather" }}
              onPress={() => {}}
            />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
