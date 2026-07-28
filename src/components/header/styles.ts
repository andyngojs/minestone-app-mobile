import { Theme } from "@/theme";
import AdaptorStyleSheet from "@/utils/adaptor-style-sheet";

export default function createStyles(theme: Theme) {
  return AdaptorStyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      minHeight: 52,
      paddingHorizontal: theme.layout.spacing.md,
      backgroundColor: theme.color.background as string,
      borderBottomWidth: theme.layout.borderWidth,
      borderBottomColor: theme.color.divider as string,
    },
    side: {
      minWidth: 32,
      flexDirection: "row",
      alignItems: "center",
    },
    left: {
      justifyContent: "flex-start",
    },
    right: {
      justifyContent: "flex-end",
    },
    title: {
      flex: 1,
      textAlign: "center",
    },
  });
}
