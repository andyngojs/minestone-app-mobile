import { FONT_FAMILY, RADIUS, SPACING, TYPOGRAPHY } from "@/theme";
import AdaptorStyleSheet from "@/utils/adaptor-style-sheet";

export default function createStyles() {
  return AdaptorStyleSheet.create({
    base: {
      borderRadius: RADIUS.lg,
      padding: SPACING[4],
      gap: SPACING[1],
    },
    kicker: {
      ...TYPOGRAPHY.caption,
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
      ...TYPOGRAPHY.body,
    },
    meta: {
      ...TYPOGRAPHY.caption,
    },
  });
}
