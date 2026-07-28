import AdaptorStyleSheet from "@/utils/adaptor-style-sheet";
import { Theme } from "@/theme";

export default function createStyles(_theme: Theme) {
  return AdaptorStyleSheet.create({
    content: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });
}
