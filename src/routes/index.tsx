import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {MainLogin} from '@src/screens/login/main';
import Onboarding from '@src/screens/onboarding';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Onboarding',
  screenOptions: {headerShown: false},
  screens: {
    Onboarding: Onboarding,
    MainLogin: MainLogin,
  },
});

export const Navigation = createStaticNavigation(RootStack);
export type RootStackParamList = StaticParamList<typeof RootStack>;
export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;
