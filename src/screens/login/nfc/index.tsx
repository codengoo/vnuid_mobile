import {useNavigation} from '@react-navigation/native';
import {AtButtonBox, AtButtonLink, Icon} from '@src/components';
import {Tagline} from '@src/components/common/tagline';
import {
  LoginContentLayout,
  LoginDecoratorLayout,
  LoginLayout,
} from '@src/components/layout/login';
import {space} from '@src/constants';
import {RootStackNavigationProps} from '@src/routes';
import {useTranslation} from 'react-i18next';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

export function LoginNfc() {
  const {t} = useTranslation('login');
  const {goBack} = useNavigation<RootStackNavigationProps>();

  const navigateToMainLogin = () => goBack();

  return (
    <LoginLayout>
      <LoginDecoratorLayout>
        <Tagline />
        <Image
          source={require('@src/assets/images/login_nfc.png')}
          style={{height: space(350), aspectRatio: 1}}
          resizeMode="contain"
        />
      </LoginDecoratorLayout>

      <LoginContentLayout>
        <View style={styles.inputWrapper}>
          <Text style={styles.titleSection}>
            Move your student card to correct position to read info
          </Text>
        </View>

        <View style={styles.actionWrapper}>
          <AtButtonBox
            title="Scan QR on card"
            color="green"
            icon={Icon.QRIcon}
            center
          />
          <AtButtonLink title={t('go_back')} onPress={navigateToMainLogin} />
        </View>
      </LoginContentLayout>
    </LoginLayout>
  );
}
