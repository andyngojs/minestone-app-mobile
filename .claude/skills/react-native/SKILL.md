---
name: react-native
description: Patterns, commands, architecture, and troubleshooting for the React Native, Expo side of ordinary-wins.
---

# React Native / Expo Skill

## Role

Act as a Software Engineer with 10 years of experience across native mobile development (iOS/Android), React Native, Flutter, and backend/DevOps. Bring that level of judgment — production-grade code, awareness of cross-platform tradeoffs, and attention to maintainability — to every change made under this skill.

## When to use this skill

- Working on `ordinary-wins/`, iOS/Android native code, navigation, or any screen component.
- Cross-platform native changes must satisfy both platforms (Rule 10).

**Versions:** React Native 0.86.0 | React 19.2.3 | Expo ~57.0.8 | TypeScript (strict) | React Navigation v7 (bottom-tabs + native-stack)

---

## Running the App

All commands run from repo root (`ordinary-wins/`):

```bash
yarn start        # Start Metro bundler
yarn ios          # Start Metro + open iOS target (simulator, via Expo Go)
yarn android      # Start Metro + open Android target (emulator, via Expo Go)
yarn web          # Start Metro for web
yarn lint         # ESLint check (expo lint)
```

---

## Setup

```bash
yarn install
```

This is a **managed Expo project** — there is no committed `ios/` or `android/` native folder, so there is no `pod install` step today. Native rebuilds only become relevant if the project is prebuilt (`npx expo prebuild`) or built via EAS.

### Path alias

`@/*` maps to `src/*`, `@/assets/*` maps to `assets/*` (see `tsconfig.json`).

```ts
import RootNavigator from "@/routes/root-navigator"
import HomeScreen from "@/screens/home"
```

---

## Project Structure

```
src/
├── app/            ← Expo entry point
│   ├── index.tsx   ← re-exports app.tsx
│   └── app.tsx     ← root App component: fonts, i18n init, SafeAreaProvider, GestureHandlerRootView, theme, RootNavigator
├── components/     ← Shared base UI components (Button, IconButton, Card, Header, Icon, Input, Screen, TabBar, Tag, Typography)
├── i18n/           ← i18next setup (resources/en/*.json, use-i18n.ts)
├── routes/         ← Navigation layer
│   ├── root-navigator.tsx        ← Stack navigator (RootStackParamList: BottomTab, CreateMoment, ...)
│   ├── main-tab-navigator.tsx    ← Bottom tab navigator (BottomTabParamList: Home, Sky, Memory, Timeline)
│   └── navigation-params-list.ts ← All param-list + navigation prop types
├── screens/        ← Actual screen implementations (see Screen Structure below)
│   └── <screen-name>/
├── store/          ← Zustand stores (e.g. theme.store.ts)
├── theme/          ← Design tokens (color, layout, typography, font) consumed via useTheme()
└── utils/          ← Shared utilities (adaptor-style-sheet.ts — px2dp scaling helper, color.ts)
```

The repo-root `index.js` calls `registerRootComponent(App)` with `App` imported from `src/app`.

---

## Naming Convention

**All file and folder names use kebab-case** — lowercase words separated by hyphens.

```
✅ correct
component-1.tsx
order-detail-screen.tsx
root-navigator.tsx
adaptor-style-sheet.ts

❌ wrong
Component1.tsx
OrderDetailScreen.tsx
orderDetailScreen.tsx
order_detail_screen.tsx
```

This applies to every file under `src/` (screens, routes, components, utils, hooks, etc.) and to folder names. Component/function names inside the file still use `PascalCase`/`camelCase` per normal TypeScript convention — only the **file name** is kebab-case.

---

## Screen Structure

Every screen lives in its own kebab-case folder under `src/screens/` and is made of exactly **3 files**:

```
src/screens/<screen-name>/
├── <screen-name>.tsx   ← main component (default export)
├── styles.ts           ← AdaptorStyleSheet factory for this screen only
└── index.ts            ← barrel export: re-exports the main component as default
```

Example — `src/screens/home/`:

```tsx
// home.tsx
import { useMemo } from "react"
import { View } from "react-native"

import { Typography } from "@/components"
import { useTheme } from "@/store/theme.store"
import { TypographyType } from "@/theme"

import createStyles from "./styles"

export default function Home() {
  const theme = useTheme()
  const styles = useMemo(() => createStyles(theme), [theme])

  return (
    <View style={styles.container}>
      <Typography type={TypographyType.TITLE_LARGE}>Home</Typography>
    </View>
  )
}
```

```ts
// styles.ts
import { Theme } from "@/theme"
import AdaptorStyleSheet from "@/utils/adaptor-style-sheet"

export default function createStyles(theme: Theme) {
  return AdaptorStyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  })
}
```

```ts
// index.ts
export { default } from "./home"
```

Screens are imported directly into the navigator that owns them (`main-tab-navigator.tsx` for tab screens, `root-navigator.tsx` for stack-level screens like modals) — there is no separate `<name>-screen.tsx` wrapper file per route.

---

## Architecture Patterns

### Navigation — React Navigation v7

Two navigators compose the tree: a root `Stack.Navigator` that hosts the tab navigator plus any modal/stack-only screens (e.g. `CreateMoment`), and a `Tab.Navigator` for the four bottom tabs.

```ts
// src/routes/navigation-params-list.ts
export type RootStackParamList = {
  BottomTab: undefined
  CreateMoment: undefined
}

export type BottomTabParamList = {
  Home: undefined
  Sky: undefined
  Memory: undefined
  Timeline: undefined
}
```

```tsx
// src/routes/root-navigator.tsx
const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTab" component={MainTabNavigator} />
        <Stack.Screen name="CreateMoment" component={CreateMoment} options={{ presentation: "modal" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
```

```tsx
// src/routes/main-tab-navigator.tsx
const Tab = createBottomTabNavigator<BottomTabParamList>()

export default function MainTabNavigator() {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Sky" component={Sky} />
      <Tab.Screen name="Memory" component={Memory} />
      <Tab.Screen name="Timeline" component={Timeline} />
    </Tab.Navigator>
  )
}
```

To navigate from a tab screen to a stack-level screen (e.g. `CreateMoment`), type the navigation hook against `RootStackParamList`:

```ts
const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
navigation.navigate("CreateMoment")
```

### Styling

`AdaptorStyleSheet` (`src/utils/adaptor-style-sheet.ts`) is the **only** styling convention used in this codebase — it scales spacing/font values by device width (`px2dp`) and has the same API shape as `StyleSheet.create`. Plain `StyleSheet.create` must not be used (see `.claude/rules/figma.md` Rule F2).

```ts
import { Theme } from "@/theme"
import AdaptorStyleSheet from "@/utils/adaptor-style-sheet"

export default function createStyles(theme: Theme) {
  return AdaptorStyleSheet.create({
    container: { flex: 1 },
  })
}
```

Colors and other theme-dependent values are read from `useTheme()` (`src/store/theme.store.ts`) and applied either inline (`{ backgroundColor: theme.color.x as string }`) or inside the `createStyles(theme)` factory — never hardcode a hex value directly in a component.

---

## App Entry

```tsx
// src/app/app.tsx
import { useFonts } from "@expo-google-fonts/be-vietnam-pro"
import * as SplashScreen from "expo-splash-screen"
import { StatusBar } from "expo-status-bar"
import { useCallback } from "react"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { SafeAreaProvider } from "react-native-safe-area-context"

import initI18n, { LANGUAGE_CODE } from "@/i18n"
import RootNavigator from "@/routes/root-navigator"
import { useTheme } from "@/store/theme.store"
import { FONT_ASSETS, isDarkTheme } from "@/theme"

initI18n(LANGUAGE_CODE.EN)
SplashScreen.preventAutoHideAsync()

export default function App() {
  const theme = useTheme()
  const [fontsLoaded] = useFonts(FONT_ASSETS)

  const onLayoutRootView = useCallback(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style={isDarkTheme(theme) ? "light" : "dark"} />
        <RootNavigator />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}
```

```ts
// src/app/index.tsx
export { default } from "./app"
```

```js
// index.js (repo root)
import registerRootComponent from "expo/src/launch/registerRootComponent"
import App from "./src/app"

registerRootComponent(App)
```

---

## iOS-Specific

- No `ios/` folder is committed — this is a managed Expo project. `yarn ios` starts Metro and opens the app via Expo Go on the simulator; it does not perform a native Xcode build.
- New Architecture is the default on RN 0.86.
- If the project is ever prebuilt (`npx expo prebuild`) or a dev client is introduced, `cd ios && pod install` becomes relevant again — it is not needed today.

## Android-Specific

- No `android/` folder is committed. `yarn android` starts Metro and opens the app via Expo Go on the emulator.

---

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| Metro cache issue | `yarn start --reset-cache` |
| `NodeJS.Timeout` TS error | Use `ReturnType<typeof setTimeout>` instead |
| Path alias `@/...` not resolving | Check `tsconfig.json` `paths` and restart Metro/TS server |
| No simulator/emulator picked up | Confirm one is already booted (`xcrun simctl list devices booted` / Android Studio AVD) before running `yarn ios` / `yarn android` |
