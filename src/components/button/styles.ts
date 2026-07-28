import { FONT_FAMILY, Theme, TypographyType } from "@/theme";
import AdaptorStyleSheet from "@/utils/adaptor-style-sheet";

export default function createStyles(theme: Theme) {
  return AdaptorStyleSheet.create({
    base: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      borderRadius: theme.layout.borderRadiusPill,
      paddingVertical: theme.layout.spacing.sm,
      paddingHorizontal: theme.layout.spacing.md * 1.2,
    },
    label: {
      ...theme.typography[TypographyType.LABEL],
      fontFamily: theme.font?.main ?? FONT_FAMILY.regular,
    },
    outlined: {
      borderWidth: 1.5,
    },
    disabled: {
      opacity: 0.45,
    },
    iconButton: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: theme.layout.borderRadiusPill,
    },
  });
}
