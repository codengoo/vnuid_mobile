import {AtInput, Icon} from '@src/components';
import {
  LoginContentLayout,
  LoginDecoratorLayout,
  LoginLayout,
} from '@src/components/layout';
import {space} from '@src/constants';
import {signInWithPass} from '@src/helpers/login';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Image} from 'react-native';
import Toast from 'react-native-toast-message';
import {HeaderLogin, LoginForm, LoginSave, LoginSection} from '../components';

export function LoginPassScreen() {
  const {t} = useTranslation('login');
  const [uid, setUid] = useState('');
  const [password, setPassword] = useState('');
  const [isSave, setSave] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleSignin = async () => {
    try {
      setLoading(true);
      await signInWithPass(uid, password);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: t('toast_failed'),
        text2: t('toast_failed_description'),
        autoHide: true,
      });
    } finally {
      setLoading(false);
      setPassword('');
      setUid('');
    }
  };

  return (
    <LoginLayout>
      <LoginDecoratorLayout>
        <HeaderLogin />
        <Image
          source={require('@src/assets/images/login_pass.png')}
          style={{height: space(350), aspectRatio: 1}}
          resizeMode="contain"
        />
      </LoginDecoratorLayout>
      <LoginContentLayout>
        <LoginForm description="Type your username and password to continue">
          <AtInput
            icon={Icon.NumberIcon}
            placeholder="21020365"
            value={uid}
            setValue={setUid}
            mode="numeric"
          />
          <AtInput
            icon={Icon.PasswordIcon}
            placeholder="***"
            value={password}
            setValue={setPassword}
            mode="password"
          />

          <LoginSave isSave={isSave} setSave={setSave} />
        </LoginForm>
        <LoginSection handleLogin={handleSignin} isLoading={isLoading} />
      </LoginContentLayout>
    </LoginLayout>
  );
}
