import {
  createNavigationContainerRef,
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { HomeScreen } from '@src/screens/home';
import {Login2FaScreen} from '@src/screens/login/2fa';
import {LoginMainScreen} from '@src/screens/login/main';
import {LoginNfc} from '@src/screens/login/nfc';
import {LoginPassword} from '@src/screens/login/pass';
import {LoginPass2FaScreen} from '@src/screens/login/pass_2fa';
import {LoginQRMain} from '@src/screens/login/qr_main';
import Onboarding from '@src/screens/onboarding';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Onboarding',
  screenOptions: {headerShown: false},
  screens: {
    Onboarding: Onboarding,
    LoginMain: LoginMainScreen,
    Login2Fa: Login2FaScreen,
    LoginQRMain: LoginQRMain,
    LoginPassword: LoginPassword,
    LoginNfc: LoginNfc,
    LoginPass2Fa: LoginPass2FaScreen,
    Home: HomeScreen
  },
});

export type RootStackParamList = StaticParamList<typeof RootStack>;
export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;

export const Navigation = createStaticNavigation(RootStack);
export const navigationRef = createNavigationContainerRef<RootStackParamList>();
