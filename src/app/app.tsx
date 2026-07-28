import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import initI18n, { LANGUAGE_CODE } from "@/i18n";
import RootNavigator from "@/routes/root-navigator";
import { useTheme } from "@/store/theme.store";
import { isDarkTheme } from "@/theme";

initI18n(LANGUAGE_CODE.EN);

export default function App() {
  const theme = useTheme();

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style={isDarkTheme(theme) ? "light" : "dark"} />
        <RootNavigator />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
