import {AtInput, Icon} from '@src/components';
import {
  LoginContentLayout,
  LoginDecoratorLayout,
  LoginLayout,
} from '@src/components/layout';
import {AtCheckbox} from '@src/components/ui/checkbox';
import {space} from '@src/constants';
import {signInWithCode2Fa} from '@src/helpers/login';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, View} from 'react-native';
import Toast from 'react-native-toast-message';
import {HeaderLogin} from '../components';

export function LoginCode2faScreen() {
  const [code, setCode] = useState('');
  const [isSave, setSave] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const {t} = useTranslation('login');

  const handleSignin = async () => {
    try {
      setLoading(true);
      await signInWithCode2Fa(code, isSave);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: t('toast_failed'),
        text2: t('toast_failed_description'),
        autoHide: true,
      });
    } finally {
      setLoading(false);
      setCode('');
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
        <AtInput
          icon={Icon.PasswordIcon}
          placeholder="Ma code"
          onEnter={handleSignin}
          setValue={setCode}
          value={code}
          mode="text"
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
          <AtCheckbox checked={isSave} setValue={setSave} label="Save device" />
        </View>
      </LoginContentLayout>
    </LoginLayout>
  );
}
