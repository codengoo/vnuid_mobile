import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

interface AtButtonProps {
  onPress?: () => void;
  title: string;
}
export function AtButton({onPress, title}: AtButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
