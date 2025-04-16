import {useNavigation} from '@react-navigation/native';
import {AtButtonBox, AtButtonLink, Icon} from '@src/components';
import {RootStackNavigationProps} from '@src/routes';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {styles} from './styles';

interface IProps {
  isLoading: boolean;
  handleLogin: () => void;
}
export function LoginSection({handleLogin, isLoading}: IProps) {
  const {t} = useTranslation('login');
  const {goBack} = useNavigation<RootStackNavigationProps>();

  return (
    <View style={styles.container}>
      <AtButtonBox
        title="Login"
        color="yellow"
        center
        icon={Icon.LoginIcon}
        onPress={handleLogin}
        disabled={isLoading}
      />
      <AtButtonLink title={t('go_back')} onPress={goBack} />
    </View>
  );
}
