import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {LoginMain} from '@src/screens/login/main';
import {LoginNfc} from '@src/screens/login/nfc';
import {LoginPassword} from '@src/screens/login/pass';
import {LoginQRMain} from '@src/screens/login/qr_main';
import Onboarding from '@src/screens/onboarding';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Onboarding',
  screenOptions: {headerShown: false},
  screens: {
    Onboarding: Onboarding,
    LoginMain: LoginMain,
    LoginQRMain: LoginQRMain,
    LoginPassword: LoginPassword,
    LoginNfc: LoginNfc,
  },
});

export const Navigation = createStaticNavigation(RootStack);
export type RootStackParamList = StaticParamList<typeof RootStack>;
export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;
