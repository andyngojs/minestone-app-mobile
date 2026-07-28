import { RADIUS, SPACING, TYPOGRAPHY } from "@/theme";
import AdaptorStyleSheet from "@/utils/adaptor-style-sheet";

export default function createStyles() {
  return AdaptorStyleSheet.create({
    base: {
      alignSelf: "flex-start",
      paddingVertical: SPACING[1],
      paddingHorizontal: SPACING[2],
    },
    pill: {
      borderRadius: RADIUS.pill,
    },
    sm: {
      borderRadius: RADIUS.sm,
    },
    outline: {
      borderWidth: 1,
    },
    label: {
      ...TYPOGRAPHY.label,
      fontSize: 12,
      lineHeight: 15,
    },
  });
}
