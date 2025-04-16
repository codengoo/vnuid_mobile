import {useNavigation} from '@react-navigation/native';
import {AtButtonBox, AtButtonLink, Icon} from '@src/components';
import {
  LoginContentLayout,
  LoginDecoratorLayout,
  LoginLayout,
} from '@src/components/layout/login';
import {space} from '@src/constants';
import {RootStackNavigationProps} from '@src/routes';
import {useTranslation} from 'react-i18next';
import {Image, View} from 'react-native';
import {HeaderLogin, LoginForm} from '../components';
import {styles} from './styles';

export function LoginNfcScreen() {
  const {t} = useTranslation('login');
  const {goBack, navigate} = useNavigation<RootStackNavigationProps>();

  const navigateToScanNfc = () => {
    navigate('LoginNfcQr');
  };

  return (
    <LoginLayout>
      <LoginDecoratorLayout>
        <HeaderLogin />
        <Image
          source={require('@src/assets/images/login_nfc.png')}
          style={{height: space(350), aspectRatio: 1}}
          resizeMode="contain"
        />
      </LoginDecoratorLayout>

      <LoginContentLayout>
        <LoginForm description=" Move your student card to correct position to read info" />

        <View style={styles.actionWrapper}>
          <AtButtonBox
            title="Scan QR on card"
            color="yellow"
            icon={Icon.QRIcon}
            center
            onPress={navigateToScanNfc}
          />
          <AtButtonLink title={t('go_back')} onPress={goBack} />
        </View>
      </LoginContentLayout>
    </LoginLayout>
  );
}
