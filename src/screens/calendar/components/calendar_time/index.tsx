import {COLOR, FontFamily, space} from '@src/constants';
import {Text, View} from 'react-native';

export default function CalendarTimeStone() {
  return (
    <View style={{height: space(68)}}>
      <Text
        style={{
          fontFamily: FontFamily.Prompt.normal.regular,
          color: COLOR.textSub,
          fontSize: space(12),
        }}>
        7:00 AM
      </Text>
    </View>
  );
}
