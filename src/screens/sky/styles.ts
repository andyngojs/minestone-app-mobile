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

    headlineWrap: {
      alignItems: "center",
      gap: 4,
    },
    headline: {
      fontFamily: FONT_FAMILY.bold,
      textAlign: "center",
    },
    subtitle: {
      color: theme.color.textInactive as string,
    },

    skyCard: {
      height: 260,
      borderRadius: theme.layout.borderRadiusLarge,
      backgroundColor: "#14110F",
      overflow: "hidden",
    },
    star: {
      position: "absolute",
      borderRadius: theme.layout.borderRadiusPill,
      backgroundColor: "#F5EAD8",
      opacity: 0.7,
    },
    milestoneDot: {
      position: "absolute",
      width: 10,
      height: 10,
      borderRadius: theme.layout.borderRadiusPill,
    },
    badge: {
      position: "absolute",
      maxWidth: "60%",
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      paddingVertical: 6,
      paddingHorizontal: 10,
      borderRadius: theme.layout.borderRadiusPill,
    },
    badgeLabel: {
      fontFamily: FONT_FAMILY.medium,
      color: theme.color.background as string,
    },

    progressRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.layout.spacing.sm,
      marginBottom: theme.layout.spacing.xs,
    },
    progressIconBadge: {
      width: 36,
      height: 36,
      borderRadius: theme.layout.borderRadiusPill,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.color.terracotta100 as string,
    },
    progressTitle: {
      flex: 1,
      fontFamily: FONT_FAMILY.bold,
    },
    progressBody: {
      color: theme.color.textSecondary as string,
    },

    actionsRow: {
      flexDirection: "row",
      gap: theme.layout.spacing.sm,
    },
    actionButton: {
      flex: 1,
    },
  });
}
