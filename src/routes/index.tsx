import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createNavigationContainerRef,
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {Icon} from '@src/components';
import BottomTabbar from '@src/components/bottom_tab';
import CalendarScreen from '@src/screens/calendar';
import {HomeScreen} from '@src/screens/home';
import {Login2FaScreen} from '@src/screens/login/2fa';
import {LoginCode2faScreen} from '@src/screens/login/code_2fa';
import {LoginMainScreen} from '@src/screens/login/main';
import {LoginNfcScreen} from '@src/screens/login/nfc';
import {ScanNfcQrScreen} from '@src/screens/login/nfc_scan_qr';
import {LoginPassScreen} from '@src/screens/login/pass';
import {LoginPass2FaScreen} from '@src/screens/login/pass_2fa';
import {LoginQRMain} from '@src/screens/login/qr_main';
import Onboarding from '@src/screens/onboarding';
import { ProfileScreen } from '@src/screens/profile';

const RootTab = createBottomTabNavigator({
  tabBar: props => <BottomTabbar {...props} />,
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        tabBarIcon: ({color}) => (
          <Icon.HomeIcon color={color} size={32} stroke={2} />
        ),
      },
    },
    Attendance: {
      screen: Onboarding,
      options: {
        tabBarIcon: ({color}) => (
          <Icon.FingerprintIcon color={color} size={32} stroke={1.75} />
        ),
      },
    },

    Calendar: {
      screen: CalendarScreen,
      options: {
        tabBarIcon: ({color}) => (
          <Icon.LineIcon color={color} size={32} stroke={1.75} />
        ),
      },
    },

    Profile: {
      screen: ProfileScreen,
      options: {
        tabBarIcon: ({color}) => (
          <Icon.UserIcon color={color} size={32} stroke={1.75} />
        ),
      },
    },
  },
  screenOptions: {
    animation: 'shift',
    headerShown: false,
  },
});

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
    Main: RootTab,
  },
});

export type RootStackParamList = StaticParamList<typeof RootStack>;
export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;

export const Navigation = createStaticNavigation(RootStack);
export const navigationRef = createNavigationContainerRef<RootStackParamList>();
