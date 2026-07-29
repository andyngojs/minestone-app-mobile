import { FONT_FAMILY, Theme } from "@/theme";
import AdaptorStyleSheet from "@/utils/adaptor-style-sheet";

export default function createStyles(theme: Theme) {
  return AdaptorStyleSheet.create({
    background: {
      backgroundColor: theme.color.background as string,
      borderTopLeftRadius: theme.layout.borderRadiusLarge,
      borderTopRightRadius: theme.layout.borderRadiusLarge,
    },
    handleIndicator: {
      width: 36,
      height: 4,
      backgroundColor: theme.color.grey300 as string,
    },
    content: {
      paddingHorizontal: theme.layout.spacing.lg,
      paddingTop: theme.layout.spacing.xs,
      paddingBottom: theme.layout.spacing.xl,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingBottom: theme.layout.spacing.sm,
    },
    headerTitle: {
      flex: 1,
      fontFamily: FONT_FAMILY.bold,
    },
  });
}
