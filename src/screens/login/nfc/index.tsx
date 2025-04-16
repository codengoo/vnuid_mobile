import {StaticScreenProps, useNavigation} from '@react-navigation/native';
import {AtButtonBox, AtButtonLink, Icon} from '@src/components';
import {
  LoginContentLayout,
  LoginDecoratorLayout,
  LoginLayout,
} from '@src/components/layout/login';
import {space} from '@src/constants';
import {signInWithNfc} from '@src/helpers/login';
import {RootStackNavigationProps} from '@src/routes';
import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, View} from 'react-native';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import Toast from 'react-native-toast-message';
import {HeaderLogin, LoginForm} from '../components';
import {styles} from './styles';

type Props = StaticScreenProps<{
  is2fa: boolean;
}>;

export function LoginNfcScreen({route}: Props) {
  const {is2fa = false} = route.params || {};

  const {t} = useTranslation('login');
  const {goBack, navigate} = useNavigation<RootStackNavigationProps>();

  const handleSignin = async (nfc: string, uid: string) => {
    try {
      await signInWithNfc(nfc, uid);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: t('toast_failed'),
        text2: t('toast_failed_description'),
        autoHide: true,
      });
      goBack();
    }
  };

  async function handleStartNfc() {
    await NfcManager.start();

    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);
      const tag = await NfcManager.getTag();
      console.log(tag);
      if (!tag) throw new Error('Invalid tag');

      const message = tag.ndefMessage;
      const raw = message[0].payload[0] as string;
      const data = JSON.parse(raw);

      await handleSignin(data.fontcolor, data.uid);
    } catch (ex) {
      console.warn('Error reading NFC', ex);
      NfcManager.cancelTechnologyRequest();
    }
  }

  useEffect(() => {
    NfcManager.isEnabled().then(isEnabled => {
      if (isEnabled) {
        handleStartNfc();
      } else {
        Toast.show({
          type: 'error',
          text1: t('toast_nfc_disabled_title'),
          text2: t('toast_nfc_disabled_description'),
          autoHide: true,
        });
      }
    });
  }, []);

  const navigateToScanNfc = () => {
    navigate('LoginNfcQr', {is2fa});
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
