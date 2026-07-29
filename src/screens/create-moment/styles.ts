import { FONT_FAMILY, Theme } from "@/theme";
import AdaptorStyleSheet from "@/utils/adaptor-style-sheet";

export default function createStyles(theme: Theme) {
  return AdaptorStyleSheet.create({
    keyboardAvoiding: {
      flex: 1,
    },
    scroll: {
      flex: 1,
    },
    content: {
      paddingHorizontal: theme.layout.spacing.lg,
      paddingTop: theme.layout.spacing.md,
      paddingBottom: theme.layout.spacing.xxl,
      gap: theme.layout.spacing.lg,
    },

    avatar: {
      width: 32,
      height: 32,
      borderRadius: theme.layout.borderRadiusPill,
      alignItems: "center",
      justifyContent: "center",
    },

    heading: {
      gap: 2,
    },
    headingTitle: {
      fontFamily: FONT_FAMILY.bold,
    },
    headingSubtitle: {
      color: theme.color.textInactive as string,
    },

    textarea: {
      minHeight: 160,
      borderRadius: theme.layout.borderRadiusLarge,
      paddingVertical: theme.layout.spacing.md,
      textAlignVertical: "top",
    },

    quickActions: {
      flexDirection: "row",
      gap: theme.layout.spacing.sm,
    },
    quickActionButton: {
      flex: 1,
    },

    categorySection: {
      gap: theme.layout.spacing.sm,
    },
    categoryLabel: {
      fontFamily: FONT_FAMILY.medium,
      textTransform: "uppercase",
      letterSpacing: 0.6,
      color: theme.color.textInactive as string,
    },
    categoryList: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: theme.layout.spacing.sm,
    },

    infoRow: {
      flexDirection: "row",
      alignItems: "flex-start",
      gap: theme.layout.spacing.sm,
    },
    infoIconBadge: {
      width: 28,
      height: 28,
      borderRadius: theme.layout.borderRadiusPill,
      alignItems: "center",
      justifyContent: "center",
    },
    infoText: {
      flex: 1,
    },
  });
}
