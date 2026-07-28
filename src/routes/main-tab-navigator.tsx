import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "./navigation-params-list";

import { Icon } from "@/components/icon/icon";
import { TabBar } from "@/components/tab-bar/tab-bar";
import Home from "@/screens/home";
import Memory from "@/screens/memory";
import Sky from "@/screens/sky";
import Timeline from "@/screens/timeline";

const Tab = createBottomTabNavigator<BottomTabParamList>();

function getTabBarIcon(
  routeName: keyof BottomTabParamList,
  color: string,
  size: number,
) {
  switch (routeName) {
    case "Home":
      return <Icon family="ionicons" name="home" size={size} color={color} />;
    case "Sky":
      return <Icon family="ionicons" name="sparkles" size={size} color={color} />;
    case "Memory":
      return <Icon family="material" name="history" size={size} color={color} />;
    case "Timeline":
      return <Icon family="feather" name="trending-up" size={size} color={color} />;
  }
}

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
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
