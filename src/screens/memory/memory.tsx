import { useMemo } from "react";
import { Text, View } from "react-native";

import { useTheme } from "@/store/theme.store";

import createStyles from "./styles";

export default function Memory() {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Memory</Text>
    </View>
  );
}
