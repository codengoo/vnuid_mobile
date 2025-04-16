import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigationRef} from '@src/routes';
import {STG_AUTH_TOKEN} from '../constants';
import {axios} from '../network';

export async function signInWithCode2Fa(code: string, save: boolean) {
  try {
    const response = await axios.post('/auth/login_code_2fa_accept', {
      code: code,
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
