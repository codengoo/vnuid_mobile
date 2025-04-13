import {GoogleSignin} from '@react-native-google-signin/google-signin';
import { TFunction } from 'i18next';
import {useTranslation} from 'react-i18next';
import Toast from 'react-native-toast-message';

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

export async function signInWithGoogle(t:  TFunction<"login", undefined>) {
  const idToken = await loginGoogle();
  
  if (!idToken) {
    Toast.show({
      type: 'error',
      text1: t('toast_failed'),
      text2: t('toast_failed_description'),
      autoHide: false,
    });
  }
}
