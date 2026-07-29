import { FONT_FAMILY, Theme } from "@/theme";
import AdaptorStyleSheet from "@/utils/adaptor-style-sheet";

export default function createStyles(theme: Theme) {
  return AdaptorStyleSheet.create({
    content: {
      paddingHorizontal: theme.layout.spacing.lg,
      paddingTop: theme.layout.spacing.md,
      paddingBottom: 120,
      gap: theme.layout.spacing.lg,
    },

    topBar: {
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
    greeting: {
      gap: 2,
    },
    greetingLine: {
      fontFamily: FONT_FAMILY.bold,
    },
    greetingHighlight: {
      fontFamily: FONT_FAMILY.bold,
      color: theme.color.terracotta600 as string,
    },

    mealRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.layout.spacing.sm,
      marginBottom: theme.layout.spacing.md,
    },
    mealIconBadge: {
      width: 36,
      height: 36,
      borderRadius: theme.layout.borderRadiusPill,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.color.terracotta100 as string,
    },
    mealQuestion: {
      flex: 1,
      fontFamily: FONT_FAMILY.medium,
    },
    mealActions: {
      flexDirection: "row",
      gap: theme.layout.spacing.sm,
    },

    sectionHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    sectionLabel: {
      fontFamily: FONT_FAMILY.medium,
      textTransform: "uppercase",
      letterSpacing: 0.6,
      color: theme.color.textInactive as string,
    },
    sectionDate: {
      color: theme.color.textInactive as string,
    },

    loggedList: {
      gap: theme.layout.spacing.sm,
    },
    loggedItem: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.layout.spacing.sm,
    },
    loggedIconBadge: {
      width: 40,
      height: 40,
      borderRadius: theme.layout.borderRadiusPill,
      alignItems: "center",
      justifyContent: "center",
    },
    loggedTextGroup: {
      flex: 1,
    },
    loggedTitle: {
      fontFamily: FONT_FAMILY.medium,
    },

    photoPlaceholder: {
      height: 150,
      borderRadius: theme.layout.borderRadiusLarge,
      backgroundColor: theme.color.grey300 as string,
    },
  });
}
