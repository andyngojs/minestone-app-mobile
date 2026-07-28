import type { PropsWithChildren } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { Edge, SafeAreaView } from "react-native-safe-area-context";

import { useTheme } from "@/store/theme.store";

const DEFAULT_EDGES: Edge[] = ["top", "bottom"];

type ScreenProps = PropsWithChildren<{
  edges?: Edge[];
  style?: StyleProp<ViewStyle>;
}>;

export function Screen({ children, edges = DEFAULT_EDGES, style }: ScreenProps) {
  const theme = useTheme();

  return (
    <SafeAreaView
      edges={edges}
      style={[{ flex: 1, backgroundColor: theme.color.background as string }, style]}
    >
      {children}
    </SafeAreaView>
  );
}
