import {View} from 'react-native';
import {Tagline} from '../../../../components/common/tagline';
import { ButtonLang } from '@src/components/ui';
import { styles } from './styles';

export function HeaderLogin() {
  return (
    <View style={styles.container}>
      <Tagline />
      <ButtonLang />
    </View>
  );
}
