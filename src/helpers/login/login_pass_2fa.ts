import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigationRef} from '@src/routes';
import {STG_AUTH_2FA_TOKEN, STG_AUTH_TOKEN} from '../constants';
import {axios} from '../network';

export async function signInWithPass2Fa(password: string, save: boolean) {
  const _2faToken = await AsyncStorage.getItem(STG_AUTH_2FA_TOKEN);
  if (!_2faToken || _2faToken.trim() === '') {
    throw new Error('Missing 2fa token');
  }
  console.log(_2faToken, password, save);

  try {
    const response = await axios.post('/auth/login_pass_2fa', {
      token: _2faToken,
      password: password,
      save_device: save,
    });

    console.log(response.data);

    if (response.status === 200) {
      await AsyncStorage.setItem(STG_AUTH_TOKEN, response.data.token);

      navigationRef.navigate('Home');
    } else throw new Error('Could not login');
  } catch (error) {
    console.log(error);
    throw error;
  }
}
