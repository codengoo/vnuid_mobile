import {Color, space} from '@src/constants';
import {Text, View} from 'react-native';

export function CalendarEvent() {
  return (
    <View
      style={{
        borderLeftWidth: space(2),
        borderLeftColor: Color.yellow900,
        paddingLeft: space(20),
      }}>
      <View
        style={{
          height: space(100),
          padding: space(12),
          backgroundColor: Color.yellow200,
          width: '100%',
          borderRadius: space(8),
        }}>
        <Text>anasd</Text>
      </View>
    </View>
  );
}
