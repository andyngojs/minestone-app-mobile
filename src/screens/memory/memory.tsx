import { useMemo } from "react";
import { View } from "react-native";

import { Screen } from "@/components/screen/screen";
import { Typography } from "@/components/typography/typography";
import { useTheme } from "@/store/theme.store";
import { TypographyType } from "@/theme";

import createStyles from "./styles";

export default function Memory() {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <Screen>
      <View style={styles.content}>
        <Typography type={TypographyType.TITLE_LARGE}>Memory</Typography>
      </View>
    </Screen>
  );
}
