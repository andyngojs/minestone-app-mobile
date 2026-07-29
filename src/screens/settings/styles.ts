import { FONT_FAMILY, Theme } from "@/theme";
import AdaptorStyleSheet from "@/utils/adaptor-style-sheet";

export default function createStyles(theme: Theme) {
  return AdaptorStyleSheet.create({
    content: {
      paddingHorizontal: theme.layout.spacing.lg,
      paddingTop: theme.layout.spacing.md,
      paddingBottom: theme.layout.spacing.xxl,
      gap: theme.layout.spacing.lg,
    },

    statsRow: {
      flexDirection: "row",
      gap: theme.layout.spacing.sm,
    },
    statCard: {
      flex: 1,
      alignItems: "center",
      gap: 2,
    },
    statNumber: {
      fontFamily: FONT_FAMILY.bold,
      color: theme.color.terracotta600 as string,
    },
    statLabel: {
      fontFamily: FONT_FAMILY.medium,
      textTransform: "uppercase",
      letterSpacing: 0.6,
      color: theme.color.textInactive as string,
    },

    section: {
      gap: theme.layout.spacing.sm,
    },
    sectionLabel: {
      fontFamily: FONT_FAMILY.medium,
      textTransform: "uppercase",
      letterSpacing: 0.6,
      color: theme.color.textInactive as string,
    },

    rowsCard: {
      paddingVertical: theme.layout.spacing.sm,
      paddingHorizontal: theme.layout.spacing.md,
      gap: 0,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.layout.spacing.sm,
    },
    rowIconBadge: {
      width: 30,
      height: 30,
      borderRadius: theme.layout.borderRadiusPill,
      alignItems: "center",
      justifyContent: "center",
    },
    rowLabel: {
      flex: 1,
      fontFamily: FONT_FAMILY.medium,
    },
    rowTrailing: {
      color: theme.color.textInactive as string,
    },
    rowDivider: {
      height: 1,
      backgroundColor: theme.color.divider as string,
      marginVertical: theme.layout.spacing.sm,
    },

    sheetOption: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: theme.layout.spacing.md,
      borderTopWidth: 1,
      borderTopColor: theme.color.divider as string,
    },
  });
}
