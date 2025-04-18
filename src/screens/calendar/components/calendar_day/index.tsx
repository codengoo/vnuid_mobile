import {COLOR, Color, FontFamily, fontSize, space} from '@src/constants';
import {Text, TouchableOpacity} from 'react-native';

interface ICalendarDayProps {
  active?: boolean;
  date?: Date;
}
export default function CalendarDay({active}: ICalendarDayProps) {
  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: 'column',
          alignItems: 'center',
          padding: space(4),
          paddingHorizontal: space(8),
          borderBottomWidth: space(2),
          borderColor: 'transparent',
        },
        active && {borderColor: Color.green300},
      ]}>
      <Text
        style={[
          {
            fontFamily: FontFamily.Prompt.normal.medium,
            fontSize: fontSize(16),
            color: COLOR.text,
          },
          active && {color: Color.green300},
        ]}>
        Sun
      </Text>
      <Text
        style={[
          {fontFamily: FontFamily.Prompt.normal.medium},
          active && {
            color: Color.green300,
          },
        ]}>
        20
      </Text>
    </TouchableOpacity>
  );
}
