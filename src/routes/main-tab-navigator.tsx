import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SymbolView } from "expo-symbols";
import { ColorValue } from "react-native";
import { BottomTabParamList } from "./navigation-params-list";

import Home from "@/screens/home";
import Memory from "@/screens/memory";
import Sky from "@/screens/sky";
import Timeline from "@/screens/timeline";

const Tab = createBottomTabNavigator<BottomTabParamList>();

function getTabBarIcon(
  routeName: keyof BottomTabParamList,
  color: ColorValue,
  size: number,
) {
  switch (routeName) {
    case "Home":
      return (
        <SymbolView
          name={{
            ios: "house.fill",
            android: "home_filled",
            web: "home_filled",
          }}
          size={size}
          tintColor={color}
        />
      );
    case "Sky":
      return (
        <SymbolView
          name={{
            ios: "cloud.sun.fill",
            android: "partly_cloudy_day",
            web: "partly_cloudy_day",
          }}
          size={size}
          tintColor={color}
        />
      );
    case "Memory":
      return (
        <SymbolView
          name={{
            ios: "photo.on.rectangle.angled.fill",
            android: "photo_library",
            web: "photo_library",
          }}
          size={size}
          tintColor={color}
        />
      );
    case "Timeline":
      return (
        <SymbolView
          name={{
            ios: "list.bullet.clipboard.fill",
            android: "timeline",
            web: "timeline",
          }}
          size={size}
          tintColor={color}
        />
      );
  }
}

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => getTabBarIcon(route.name, color, size),
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Sky" component={Sky} />
      <Tab.Screen name="Memory" component={Memory} />
      <Tab.Screen name="Timeline" component={Timeline} />
    </Tab.Navigator>
  );
}
