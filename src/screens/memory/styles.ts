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

    headline: {
      fontFamily: FONT_FAMILY.bold,
    },
    subtitle: {
      color: theme.color.textSecondary as string,
    },

    ctaWrap: {
      alignItems: "center",
    },

    cardStack: {
      position: "relative",
      marginTop: theme.layout.spacing.sm,
      marginBottom: theme.layout.spacing.xl,
    },
    ghostCard: {
      position: "absolute",
      left: theme.layout.spacing.md,
      right: theme.layout.spacing.md,
      borderRadius: theme.layout.borderRadiusLarge,
      backgroundColor: theme.color.surface as string,
    },
    ghostCardBack: {
      top: 16,
      height: 90,
      opacity: 0.45,
    },
    ghostCardMiddle: {
      top: 8,
      height: 100,
      opacity: 0.7,
    },

    winCardHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: theme.layout.spacing.xs,
    },
    winCardDate: {
      fontFamily: FONT_FAMILY.medium,
      color: theme.color.terracotta600 as string,
      textTransform: "uppercase",
      letterSpacing: 0.4,
    },
    winCardIconBadge: {
      width: 28,
      height: 28,
      borderRadius: theme.layout.borderRadiusPill,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.color.sage100 as string,
    },
    winCardTitle: {
      fontFamily: FONT_FAMILY.bold,
    },

    decorativeWrap: {
      alignItems: "center",
    },
    decorativeCircle: {
      width: 96,
      height: 96,
      borderRadius: theme.layout.borderRadiusPill,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.color.terracotta100 as string,
    },
  });
}
