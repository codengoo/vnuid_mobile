import {AtButtonBox} from '@src/components/ui/button/button_box';
import {GoogleIcon, QRIcon} from '@src/components/ui/icon';
import {space} from '@src/constants';
import {useTranslation} from 'react-i18next';
import {Image, StatusBar, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

export function MainLogin() {
  const {t} = useTranslation('login');
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <SafeAreaView style={styles.header} edges={['top']}>
        <Image
          source={require('@src/assets/images/logo_vnu_color.png')}
          style={{width: '50%'}}
          resizeMode="contain"
        />

        <Image
          source={require('@src/assets/images/login_1.png')}
          style={{height: space(400), marginBottom: -space(16)}}
          resizeMode="contain"
        />
      </SafeAreaView>

      <SafeAreaView edges={['bottom']} style={styles.content}>
        <View style={styles.mainOptions}>
          <AtButtonBox title="Google" expandable icon={GoogleIcon} />
          <AtButtonBox title="QR code" expandable icon={QRIcon} />

          <Text style={styles.tryText}>{t('try_other_way')}</Text>
        </View>

        <Text style={styles.helperText}>{t('login_helper')}</Text>
      </SafeAreaView>
    </View>
  );
}
