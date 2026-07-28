import { FONT_FAMILY, Theme } from "@/theme";
import AdaptorStyleSheet from "@/utils/adaptor-style-sheet";

export default function createStyles(theme: Theme) {
  return AdaptorStyleSheet.create({
    container: {
      position: "absolute",
      left: theme.layout.spacing.lg,
      right: theme.layout.spacing.lg,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.color.background as string,
      borderRadius: theme.layout.borderRadiusPill,
      paddingVertical: theme.layout.spacing.sm,
      paddingHorizontal: theme.layout.spacing.sm,
      ...theme.layout.shadow.md,
    },
    item: {
      flex: 1,
      alignItems: "center",
      gap: 4,
    },
    iconWrapper: {
      width: 40,
      height: 40,
      borderRadius: theme.layout.borderRadiusPill,
      alignItems: "center",
      justifyContent: "center",
    },
    iconWrapperActive: {
      backgroundColor: theme.color.terracotta500 as string,
    },
    label: {
      fontFamily: FONT_FAMILY.medium,
      fontSize: 10,
      letterSpacing: 0.4,
      color: theme.color.textInactive as string,
    },
    labelActive: {
      fontFamily: FONT_FAMILY.bold,
      color: theme.color.textPrimary as string,
    },
  });
}
