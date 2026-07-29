import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { RootStackParamList } from "./navigation-params-list";
import MainTabNavigator from "./main-tab-navigator";
import CreateMoment from "@/screens/create-moment";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTab" component={MainTabNavigator} />
        <Stack.Screen name="CreateMoment" component={CreateMoment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
