import {AtInput, Icon} from '@src/components';
import {
  LoginContentLayout,
  LoginDecoratorLayout,
  LoginLayout,
} from '@src/components/layout';
import {AtCheckbox} from '@src/components/ui/checkbox';
import {space} from '@src/constants';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, View} from 'react-native';
import Toast from 'react-native-toast-message';
import {HeaderLogin, LoginSection} from '../components';
import { signInWithPass2Fa } from '@src/helpers/login';

export function LoginPass2FaScreen() {
  const [password, setPassword] = useState('');
  const [isSave, setSave] = useState(false);
  const {t} = useTranslation('login');
  const [isLoading, setLoading] = useState(false);

  const handleSignin = async () => {
    try {
      setLoading(true);
      await signInWithPass2Fa(password, isSave);
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
        <View
          style={{
            width: '100%',
            flexDirection: 'column',
            gap: space(8),
            alignItems: 'center',
          }}>
          <AtInput
            icon={Icon.PasswordIcon}
            placeholder="***"
            onEnter={handleSignin}
            setValue={setPassword}
            value={password}
            mode="password"
          />

          <View
            style={{
              flex: 1,
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: space(4),
            }}>
            <AtCheckbox
              checked={isSave}
              setValue={setSave}
              label="Save device"
            />
          </View>
        </View>

        <LoginSection handleLogin={handleSignin} isLoading={isLoading} />
      </LoginContentLayout>
    </LoginLayout>
  );
}
