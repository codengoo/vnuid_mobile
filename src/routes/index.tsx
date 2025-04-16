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
import { LoginCode2faScreen } from '@src/screens/login/code_2fa';
import {LoginMainScreen} from '@src/screens/login/main';
import {LoginNfcScreen} from '@src/screens/login/nfc';
import { ScanNfcQrScreen } from '@src/screens/login/nfc_scan_qr';
import {LoginPassScreen} from '@src/screens/login/pass';
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
    
    LoginNfc: LoginNfcScreen,
    LoginPass: LoginPassScreen,

    LoginPass2Fa: LoginPass2FaScreen,
    LoginCode2Fa: LoginCode2faScreen,

    LoginNfcQr: ScanNfcQrScreen,
    Home: HomeScreen
  },
});

export type RootStackParamList = StaticParamList<typeof RootStack>;
export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;

export const Navigation = createStaticNavigation(RootStack);
export const navigationRef = createNavigationContainerRef<RootStackParamList>();
