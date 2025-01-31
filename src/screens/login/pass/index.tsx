import {useNavigation} from '@react-navigation/native';
import {AtButtonBox, AtButtonLink, AtInput, Icon} from '@src/components';
import {Tagline} from '@src/components/common/tagline';
import {space} from '@src/constants';
import {RootStackNavigationProps} from '@src/routes';
import {useTranslation} from 'react-i18next';
import {Image, StatusBar, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

export function LoginPassword() {
  const {t} = useTranslation('login');
  const {goBack} = useNavigation<RootStackNavigationProps>();

  const navigateToMainLogin = () => goBack();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar hidden />
      <View style={styles.header}>
        <Tagline />
        <Image
          source={require('@src/assets/images/login_pass.png')}
          style={{height: space(350), aspectRatio: 1}}
          resizeMode="contain"
        />
      </View>

      <SafeAreaView style={styles.content} edges={['bottom']}>
        <View style={styles.inputWrapper}>
          <Text style={styles.titleSection}>
            Type your username and password to continue
          </Text>
          <AtInput icon={Icon.NumberIcon} placeholder="21020365" />
          <AtInput icon={Icon.PasswordIcon} placeholder="***" isHideContent />
        </View>

        <View style={styles.actionWrapper}>
          <AtButtonBox title="Login" color="yellow" />
          <AtButtonLink title={t('go_back')} onPress={navigateToMainLogin} />
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}
