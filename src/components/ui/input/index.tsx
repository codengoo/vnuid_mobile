import {TextInput, View} from 'react-native';
import {IIcon} from '../icon';
import {styles} from './styles';

interface AtInputProps {
  icon?: IIcon;
  placeholder?: string;
  isHideContent?: boolean;
}

export function AtInput({
  icon: Icon,
  placeholder,
  isHideContent,
}: AtInputProps) {
  return (
    <View style={styles.container}>
      {Icon && <Icon stroke={2} />}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={isHideContent}
      />
    </View>
  );
}
