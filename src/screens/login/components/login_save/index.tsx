import {AtCheckbox} from '@src/components/ui/checkbox';
import {View} from 'react-native';
import {styles} from './styles';

interface IProps {
  isSave: boolean;
  setSave: React.Dispatch<React.SetStateAction<boolean>>;
}
export function LoginSave({isSave, setSave}: IProps) {
  return (
    <View style={styles.container}>
      <AtCheckbox checked={isSave} setValue={setSave} label="Save device" />
    </View>
  );
}
