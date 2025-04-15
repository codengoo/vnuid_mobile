import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {navigationRef} from '@src/routes';
import DeviceInfo from 'react-native-device-info';
import {STG_AUTH_2FA_TOKEN, STG_AUTH_TOKEN} from '../constants';
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

export async function signInWithGoogle() {
  const idToken = await loginGoogle();
  if (!idToken) throw new Error('Google Sign-In failed');

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
      await AsyncStorage.setItem(STG_AUTH_TOKEN, response.data.token);

      navigationRef.navigate('Home');
    } else if (response.status === 202) {
      await AsyncStorage.setItem(STG_AUTH_2FA_TOKEN, response.data.token);

      navigationRef.navigate('Login2Fa', {
        token: response.data.token,
        allowMethods: response.data.allow,
      });
    } else throw new Error('Could not login');
  } catch (error) {
    throw error;
  }
}
