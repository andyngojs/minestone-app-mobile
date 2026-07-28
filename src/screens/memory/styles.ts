import AdaptorStyleSheet from "@/utils/adaptor-style-sheet";
import { Theme, TypographyType } from "@/theme";

export default function createStyles(theme: Theme) {
  return AdaptorStyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.color.background as string,
    },
    title: {
      ...theme.typography[TypographyType.TITLE_LARGE],
    },
  });
}
