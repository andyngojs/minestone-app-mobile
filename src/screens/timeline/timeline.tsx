import { useMemo } from "react";
import { ScrollView, View } from "react-native";

import { Card, Header, Icon, Screen, Tag, Typography } from "@/components";
import { useTheme } from "@/store/theme.store";
import { Theme, TypographyType } from "@/theme";

import createStyles from "./styles";

type TimelineEntry = {
  id: string;
  date: string;
  text?: string;
  title?: string;
  description?: string;
  winsBadge?: string;
  milestone?: boolean;
  muted?: boolean;
  dot: "terracotta" | "sage" | "muted";
};

const THIS_WEEK: TimelineEntry[] = [
  {
    id: "morning-run",
    date: "Wed Jul 23",
    text: "Completed first morning run of the month.",
    winsBadge: "1 win",
    dot: "terracotta",
  },
  {
    id: "deep-work",
    date: "Tue Jul 22",
    title: "Finished 'The Deep Work' Project",
    description: "Major breakthrough in the architectural design phase.",
    milestone: true,
    dot: "sage",
  },
  {
    id: "mom-dinner",
    date: "Mon Jul 21",
    text: "Called Mom just to say hi. Cooked a nutritious dinner from scratch.",
    winsBadge: "2 wins",
    dot: "terracotta",
  },
];

const LAST_WEEK: TimelineEntry[] = [
  {
    id: "rest-day",
    date: "Sun Jul 20",
    text: "No recorded wins. Rest day.",
    muted: true,
    dot: "muted",
  },
  {
    id: "read-book",
    date: "Sat Jul 19",
    text: "Read 50 pages of my current book.",
    winsBadge: "1 win",
    dot: "terracotta",
  },
];

function getDotColor(theme: Theme, dot: TimelineEntry["dot"]) {
  if (dot === "sage") {
    return theme.color.sage500 as string;
  }
  if (dot === "muted") {
    return theme.color.grey300 as string;
  }
  return theme.color.terracotta500 as string;
}

export default function Timeline() {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const renderEntry = (entry: TimelineEntry) => (
    <View key={entry.id} style={styles.entryRow}>
      <View style={styles.dotColumn}>
        <View style={[styles.dot, { backgroundColor: getDotColor(theme, entry.dot) }]} />
      </View>

      <Card
        elevation="sm"
        style={[styles.entryCard, entry.milestone && styles.milestoneCard, entry.muted && styles.mutedCard]}
      >
        <View style={styles.entryHeader}>
          <Typography type={TypographyType.CAPTION} style={styles.entryDate}>
            {entry.date}
          </Typography>

          {entry.winsBadge ? <Tag label={entry.winsBadge} variant="accent-solid" /> : null}
          {entry.milestone ? (
            <View style={styles.milestoneBadge}>
              <Icon family="feather" name="flag" size={10} color={theme.color.background as string} />
              <Typography type={TypographyType.CAPTION} style={styles.milestoneBadgeLabel}>
                Milestone
              </Typography>
            </View>
          ) : null}
        </View>

        {entry.title ? (
          <>
            <Typography type={TypographyType.LABEL} style={styles.entryTitle}>
              {entry.title}
            </Typography>
            <Typography type={TypographyType.CAPTION} style={styles.entryDescription}>
              {entry.description}
            </Typography>
          </>
        ) : (
          <Typography type={TypographyType.BODY} style={entry.muted ? styles.mutedText : undefined}>
            {entry.text}
          </Typography>
        )}
      </Card>
    </View>
  );

  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Typography type={TypographyType.CAPTION} style={styles.sectionLabel}>
          This week
        </Typography>
        <View style={styles.entryList}>{THIS_WEEK.map(renderEntry)}</View>

        <Typography type={TypographyType.CAPTION} style={styles.sectionLabel}>
          Last week
        </Typography>
        <View style={styles.entryList}>{LAST_WEEK.map(renderEntry)}</View>

        <Card elevation="sm" style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <View style={styles.summaryIconBadge}>
              <Icon family="feather" name="calendar" size={16} color={theme.color.terracotta700 as string} />
            </View>
            <View style={styles.summaryTextGroup}>
              <Typography type={TypographyType.LABEL} style={styles.summaryTitle}>
                July Progress
              </Typography>
              <Typography type={TypographyType.CAPTION} style={styles.summaryBody}>
                You&apos;ve logged 14 wins so far, 15% more than June.
              </Typography>
            </View>
          </View>
        </Card>
      </ScrollView>
    </Screen>
  );
}
