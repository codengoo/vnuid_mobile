import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export function AtButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Login to journey</Text>
      </View>
    </TouchableOpacity>
  );
}
