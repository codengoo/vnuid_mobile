import { Color, space } from '@src/constants';
import {View} from 'react-native';

interface ICalendarEventPadProps {
    height: number
}
export function CalendarEventPad({height}: ICalendarEventPadProps) {
  return <View style={{height: height, borderLeftWidth: space(2), borderLeftColor: Color.black100}}></View>;
}
