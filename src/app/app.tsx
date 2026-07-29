import { useFonts } from "@expo-google-fonts/be-vietnam-pro";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import initI18n, { LANGUAGE_CODE } from "@/i18n";
import RootNavigator from "@/routes/root-navigator";
import { useTheme } from "@/store/theme.store";
import { FONT_ASSETS, isDarkTheme } from "@/theme";

initI18n(LANGUAGE_CODE.EN);

SplashScreen.preventAutoHideAsync();

export default function App() {
  const theme = useTheme();
  const [fontsLoaded] = useFonts(FONT_ASSETS);

  const onLayoutRootView = useCallback(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style={isDarkTheme(theme) ? "light" : "dark"} />
        <RootNavigator />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
