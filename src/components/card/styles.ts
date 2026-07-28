import { FONT_FAMILY, Theme, TypographyType } from "@/theme";
import AdaptorStyleSheet from "@/utils/adaptor-style-sheet";

export default function createStyles(theme: Theme) {
  return AdaptorStyleSheet.create({
    base: {
      borderRadius: theme.layout.borderRadiusLarge,
      padding: theme.layout.spacing.lg,
      gap: theme.layout.spacing.xs,
    },
    kicker: {
      ...theme.typography[TypographyType.CAPTION],
      fontFamily: FONT_FAMILY.semiBold,
      textTransform: "uppercase",
      letterSpacing: 0.6,
    },
    title: {
      fontFamily: FONT_FAMILY.bold,
      fontSize: 19,
      lineHeight: 23,
    },
    body: {
      ...theme.typography[TypographyType.BODY],
      fontFamily: theme.font?.main ?? FONT_FAMILY.regular,
    },
    meta: {
      ...theme.typography[TypographyType.CAPTION],
      fontFamily: theme.font?.main ?? FONT_FAMILY.regular,
    },
  });
}
