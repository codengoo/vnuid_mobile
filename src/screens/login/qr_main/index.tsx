import {useNavigation} from '@react-navigation/native';
import {AtButtonLink} from '@src/components';
import {Tagline} from '@src/components/common/tagline';
import {RootStackNavigationProps} from '@src/routes';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

export function LoginQRMain() {
  const {goBack} = useNavigation<RootStackNavigationProps>();
  const {t} = useTranslation('login');

  const navigateToMainLogin = () => goBack();

  return (
    <SafeAreaView style={styles.container}>
      <Tagline />

      <View style={styles.qrCodeWrapper}>
        <QRCode
          backgroundColor="transparent"
          value="https://www.npmjs.com/package/react-native-qrcode-svg"
          size={248}
        />
      </View>

      <View style={styles.helperWrapper}>
        <Text style={styles.helperTitle}>{t('helper_qr_title')}</Text>
        <Text style={styles.helperDetails}>{t('helper_qr_details')}</Text>
      </View>

      <AtButtonLink title={t('go_back')} onPress={navigateToMainLogin} />
    </SafeAreaView>
  );
}
