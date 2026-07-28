import { FONT_FAMILY, Theme, TypographyType } from "@/theme";
import AdaptorStyleSheet from "@/utils/adaptor-style-sheet";

export default function createStyles(theme: Theme) {
  return AdaptorStyleSheet.create({
    base: {
      alignSelf: "flex-start",
      paddingVertical: theme.layout.spacing.xs,
      paddingHorizontal: theme.layout.spacing.sm,
    },
    pill: {
      borderRadius: theme.layout.borderRadiusPill,
    },
    sm: {
      borderRadius: theme.layout.borderRadiusSmall,
    },
    outline: {
      borderWidth: 1,
    },
    label: {
      ...theme.typography[TypographyType.LABEL],
      fontFamily: theme.font?.main ?? FONT_FAMILY.regular,
      fontSize: 12,
      lineHeight: 15,
    },
  });
}
