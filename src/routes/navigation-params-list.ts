import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  BottomTab: undefined;
  CreateMoment: undefined;
  Settings: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Sky: undefined;
  Memory: undefined;
  Timeline: undefined;
};

export type AppScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type AppBottomTabScreenProps<T extends keyof BottomTabParamList> =
  BottomTabScreenProps<BottomTabParamList, T>;

export type AppStackScreenList = NativeStackScreenProps<RootStackParamList>;
