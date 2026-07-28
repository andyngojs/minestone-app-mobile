import { FONT_FAMILY, Theme } from "@/theme";
import AdaptorStyleSheet from "@/utils/adaptor-style-sheet";

export default function createStyles(theme: Theme) {
  return AdaptorStyleSheet.create({
    content: {
      paddingHorizontal: theme.layout.spacing.lg,
      paddingTop: theme.layout.spacing.md,
      paddingBottom: 120,
      gap: theme.layout.spacing.md,
    },

    sectionLabel: {
      fontFamily: FONT_FAMILY.medium,
      textTransform: "uppercase",
      letterSpacing: 0.6,
      color: theme.color.textInactive as string,
    },

    entryList: {
      gap: theme.layout.spacing.sm,
    },
    entryRow: {
      flexDirection: "row",
      gap: theme.layout.spacing.sm,
    },
    dotColumn: {
      width: 12,
      alignItems: "center",
      paddingTop: theme.layout.spacing.md + 2,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: theme.layout.borderRadiusPill,
    },
    entryCard: {
      flex: 1,
    },
    milestoneCard: {
      backgroundColor: theme.color.sage100 as string,
    },
    mutedCard: {
      backgroundColor: theme.color.grey100 as string,
    },

    entryHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: theme.layout.spacing.xs,
    },
    entryDate: {
      color: theme.color.textInactive as string,
    },
    entryTitle: {
      fontFamily: FONT_FAMILY.bold,
      marginBottom: 2,
    },
    entryDescription: {
      color: theme.color.textSecondary as string,
    },
    mutedText: {
      fontStyle: "italic",
      color: theme.color.textInactive as string,
    },

    milestoneBadge: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
      paddingVertical: 3,
      paddingHorizontal: 8,
      borderRadius: theme.layout.borderRadiusPill,
      backgroundColor: theme.color.sage700 as string,
    },
    milestoneBadgeLabel: {
      fontFamily: FONT_FAMILY.medium,
      color: theme.color.background as string,
    },

    summaryCard: {
      backgroundColor: theme.color.terracotta100 as string,
    },
    summaryRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.layout.spacing.sm,
    },
    summaryIconBadge: {
      width: 36,
      height: 36,
      borderRadius: theme.layout.borderRadiusPill,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.color.background as string,
    },
    summaryTextGroup: {
      flex: 1,
    },
    summaryTitle: {
      fontFamily: FONT_FAMILY.bold,
      color: theme.color.terracotta700 as string,
    },
    summaryBody: {
      color: theme.color.textSecondary as string,
    },
  });
}
