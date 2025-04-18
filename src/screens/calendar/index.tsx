import {Icon} from '@src/components';
import {COLOR, Color, FontFamily, fontSize, space} from '@src/constants';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CalendarDay from './components/calendar_day';
import {CalendarEvent} from './components/calendar_event';
import {CalendarEventPad} from './components/calendar_event_pad';
import CalendarTimeStone from './components/calendar_time';

export default function CalendarScreen() {
  return (
    <SafeAreaView style={{backgroundColor: Color.green100, flex: 1}}>
      <View style={{padding: space(24)}}>
        <Text
          style={{
            fontSize: fontSize(40),
            fontFamily: FontFamily.Prompt.normal.bold,
            lineHeight: space(40),
            color: COLOR.text,
            textTransform: 'uppercase',
            letterSpacing: space(1.5),
          }}>
          View all your sessions
        </Text>

        <Text
          style={{
            fontSize: fontSize(16),
            color: COLOR.text,
            fontFamily: FontFamily.Prompt.normal.regular,
            lineHeight: space(20),
            marginTop: space(12),
          }}>
          Consequat eleifend lectus morbi lectus cubilia enim pretium eros. Nam
          lobortis amet amet lectus luctus sociosqu suscipit posuere.{' '}
        </Text>
      </View>

      <View
        style={{padding: space(24), flexDirection: 'column', gap: space(12)}}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: space(4),
              backgroundColor: Color.black700,
              borderRadius: space(99),
              padding: space(8),
              paddingHorizontal: space(16),
            }}>
            <Text
              style={{
                color: Color.white,
                fontFamily: FontFamily.Prompt.normal.medium,
                fontSize: fontSize(14),
              }}>
              Dec 07
            </Text>
            <Icon.ChevronRightIcon size={20} color={Color.white} stroke={2} />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <CalendarDay active />
          <CalendarDay />
          <CalendarDay />
          <CalendarDay />
          <CalendarDay />
          <CalendarDay />
          <CalendarDay />
        </View>
      </View>

      <View style={{flex: 1}}>
        <ScrollView
          style={{
            backgroundColor: Color.white,
            borderRadius: space(20),
            borderBottomEndRadius: 0,
            borderBottomStartRadius: 0,
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexDirection: 'row', padding: space(20)}}>
          <View
            style={{
              paddingRight: space(20),
              height: '100%',
            }}>
            <CalendarTimeStone />
            <CalendarTimeStone />
            <CalendarTimeStone />
            <CalendarTimeStone />
            <CalendarTimeStone />
            <CalendarTimeStone />
            <CalendarTimeStone />
            <CalendarTimeStone />
            <CalendarTimeStone />
          </View>

          <View style={{flex: 1}}>
            <CalendarEvent />
            <CalendarEventPad height={36} />
            <CalendarEvent />
            <CalendarEventPad height={200} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
