import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {navigationRef} from '@src/routes';
import {TFunction} from 'i18next';
import DeviceInfo from 'react-native-device-info';
import * as Keychain from 'react-native-keychain';
import Toast from 'react-native-toast-message';
import {axios} from '../network';

GoogleSignin.configure({
  webClientId:
    '842014203560-5h2ec7sni2ag0v1u8v3gm4hn851qo8ur.apps.googleusercontent.com',
  offlineAccess: true,
});

async function loginGoogle(): Promise<string | undefined> {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();

    return userInfo.data?.idToken || void 0;
  } catch (error) {
    console.error('Google Sign-In Error:', error);
    return void 0;
  }
}

function toastFailed(t: TFunction<'login', undefined>) {
  Toast.show({
    type: 'error',
    text1: t('toast_failed'),
    text2: t('toast_failed_description'),
    autoHide: true,
  });
}

export async function signInWithGoogle(t: TFunction<'login', undefined>) {
  const idToken = await loginGoogle();
  if (!idToken) toastFailed(t);

  const deviceID = await DeviceInfo.getUniqueId();
  const deviceName = await DeviceInfo.getDeviceName();

  try {
    const response = await axios.post('/auth/login_google', {
      id_token: idToken,
      device_id: deviceID,
      device_name: deviceName,
    });
    console.log(response.data);

    if (response.status === 200) {
      // save token
      await Keychain.setGenericPassword('authToken', response.data.token);
      // move to main screen
    } else {
      navigationRef.navigate('Login2Fa', {
        token: response.data.token,
        allowMethods: response.data.allow,
      });
    }
  } catch (error) {
    console.log((error as Error).message);
    toastFailed(t);
  }
}
