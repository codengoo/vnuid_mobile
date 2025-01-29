import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

interface AtButtonProps {
  onPress?: () => void;
}
export function AtButton({onPress}: AtButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.title}>Login to journey</Text>
      </View>
    </TouchableOpacity>
  );
}
