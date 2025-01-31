import {useNavigation} from '@react-navigation/native';
import {Icon} from '@src/components';
import {AtButton} from '@src/components/ui/button';
import {COLOR, Space} from '@src/constants';
import {RootStackNavigationProps} from '@src/routes';
import {useTranslation} from 'react-i18next';
import {Image, StatusBar, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

export default function Onboarding() {
  const {t} = useTranslation('onboard');
  const navigation = useNavigation<RootStackNavigationProps>();

  const handlePressLogin = () => {
    navigation.navigate('LoginMain');
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <SafeAreaView style={styles.header}>
        <Image
          source={require('@src/assets/images/onboarding_1.png')}
          style={{width: '75%'}}
          resizeMode="contain"
        />
      </SafeAreaView>

      <SafeAreaView style={styles.content} edges={['bottom']}>
        <View>
          <View style={styles.stepWrapper}>
            <View style={styles.dot}></View>
            <Icon.LoginIcon size={Space.sd} stroke={2.5} color={COLOR.text} />
            <Icon.HomeIcon size={Space.sd} stroke={2.5} color={COLOR.text} />
          </View>

          <View style={styles.intro}>
            <Text style={styles.headerText}>Attendance</Text>
            <Text style={styles.bodyText}>{t('description')}</Text>
          </View>
        </View>

        <AtButton onPress={handlePressLogin} title='Login to start'/>
      </SafeAreaView>
    </View>
  );
}
