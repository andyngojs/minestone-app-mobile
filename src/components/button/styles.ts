import { RADIUS, SPACING, TYPOGRAPHY } from "@/theme";
import AdaptorStyleSheet from "@/utils/adaptor-style-sheet";

export default function createStyles() {
  return AdaptorStyleSheet.create({
    base: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      borderRadius: RADIUS.pill,
      paddingVertical: SPACING[2],
      paddingHorizontal: SPACING[3] * 1.2,
    },
    label: {
      ...TYPOGRAPHY.label,
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
      borderRadius: RADIUS.pill,
    },
  });
}
