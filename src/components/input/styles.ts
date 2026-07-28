import { RADIUS, SPACING, TYPOGRAPHY } from "@/theme";
import AdaptorStyleSheet from "@/utils/adaptor-style-sheet";

export default function createStyles() {
  return AdaptorStyleSheet.create({
    base: {
      ...TYPOGRAPHY.body,
      fontSize: 14,
      borderRadius: RADIUS.md,
      borderWidth: 1,
      paddingVertical: SPACING[2],
      paddingHorizontal: SPACING[3],
    },
    focused: {
      borderWidth: 2,
    },
    disabled: {
      opacity: 0.45,
    },
  });
}
