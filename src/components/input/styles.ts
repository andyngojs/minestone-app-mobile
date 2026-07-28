import { FONT_FAMILY, Theme, TypographyType } from "@/theme";
import AdaptorStyleSheet from "@/utils/adaptor-style-sheet";

export default function createStyles(theme: Theme) {
  return AdaptorStyleSheet.create({
    base: {
      ...theme.typography[TypographyType.BODY],
      fontFamily: theme.font?.main ?? FONT_FAMILY.regular,
      fontSize: 14,
      borderRadius: theme.layout.borderRadiusMedium,
      borderWidth: 1,
      paddingVertical: theme.layout.spacing.sm,
      paddingHorizontal: theme.layout.spacing.md,
    },
    focused: {
      borderWidth: 2,
    },
    disabled: {
      opacity: 0.45,
    },
  });
}
