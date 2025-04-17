import {useNavigation} from '@react-navigation/native';
import {AtInput, Icon} from '@src/components';
import BottomTabbar from '@src/components/bottom_tab';
import {COLOR, Color, FontFamily, fontSize, space} from '@src/constants';
import {RootStackNavigationProps} from '@src/routes';
import {useEffect, useState} from 'react';
import {
  BackHandler,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export function HomeScreen() {
  const {navigate} = useNavigation<RootStackNavigationProps>();
  useEffect(() => {
    const backAction = () => {
      // navigate('ExitConfirm');
      return true; // prevent default behavior (going back)
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <View>
          <Text style={styles.text_heading}>Xin chào, Tuấn Nghĩa</Text>
          <Text style={styles.text_sub_heading}>Buổi trưa vui vẻ nhé</Text>
        </View>
        <Image
          source={require('@src/assets/images/avatar_nam.png')}
          style={styles.avatar}
        />
      </View>

      <View>
        <AtInput
          mode="text"
          setValue={setText}
          value={text}
          icon={Icon.SearchIcon}
          style={{backgroundColor: Color.white}}
          endComponent={
            <TouchableOpacity
              style={{
                backgroundColor: Color.black700,
                borderRadius: space(8),
                padding: space(8),
                paddingHorizontal: space(12),
              }}>
              <Icon.ArrowRightIcon color="white" />
            </TouchableOpacity>
          }
        />
      </View>

      <View style={styles.section}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.title_section}>Upcoming</Text>
          <Text
            style={{
              fontFamily: FontFamily.Prompt.normal.medium,
              fontSize: fontSize(16),
              color: COLOR.text,
            }}>
            See all
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={styles.chip_wrapper}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <View style={styles.chip_button}>
            <Text style={styles.text_chip}>Hôm nay</Text>
          </View>
          <View style={[styles.chip_button, styles.chip_button_active]}>
            <Text style={[styles.text_chip, styles.text_chip_active]}>
              Tuần này
            </Text>
          </View>
          <View style={styles.chip_button}>
            <Text style={styles.text_chip}>Tại đây</Text>
          </View>
          <View style={styles.chip_button}>
            <Text style={styles.text_chip}>Tại đây</Text>
          </View>
        </ScrollView>

        <ScrollView>
          <View style={styles.card_container}>
            <Image
              source={require('@src/assets/images/illus_tech.png')}
              style={{objectFit: 'scale-down', width: '100%', height: 200}}
            />

            <View
              style={{
                backgroundColor: Color.yellow100,
                borderRadius: space(12),
                padding: space(16),
                marginTop: space(16),
                borderWidth: space(2),
                borderColor: COLOR.borderInput,
                borderStyle: 'dashed',
              }}>
              <View style={styles.card_header}>
                <View>
                  <Text style={styles.card_name}>Checkin 7h</Text>
                  <Text style={styles.card_sub_name}>
                    INT2203 - Lập trình web
                  </Text>
                </View>
                <TouchableOpacity>
                  <Icon.HeartIcon stroke={2} size={28} color={COLOR.text} />
                </TouchableOpacity>
              </View>

              <View style={styles.card_details}>
                <Text style={styles.card_detail_text}>7h30</Text>
                <Text style={styles.card_detail_text}>GD3 - 203</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.yellow100,
    padding: space(20),
    gap: space(20),
  },
  text_heading: {
    fontFamily: FontFamily.Lobster.regular,
    fontSize: fontSize(36),
    color: COLOR.text,
  },
  text_sub_heading: {
    fontFamily: FontFamily.Prompt.normal.medium,
    fontSize: fontSize(16),
    color: COLOR.textSub,
    marginTop: space(-4),
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: space(999),
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  section: {
    gap: space(16),
    marginTop: space(28),
  },
  chip_button: {
    backgroundColor: Color.white,
    borderRadius: space(99),
    padding: space(8),
    paddingHorizontal: space(20),
  },

  chip_button_active: {
    backgroundColor: Color.yellow500,
  },

  title_section: {
    fontFamily: FontFamily.Prompt.normal.semiBold,
    fontSize: fontSize(28),
    color: COLOR.text,
  },
  chip_wrapper: {
    gap: space(12),
  },
  text_chip: {
    fontFamily: FontFamily.Prompt.normal.medium,
    fontSize: fontSize(16),
    color: COLOR.textSub,
  },
  text_chip_active: {
    color: COLOR.text,
  },
  card_container: {
    backgroundColor: Color.yellow400,
    borderRadius: space(16),
    padding: space(16),
    borderStyle: 'solid',
    borderColor: COLOR.borderInput,
    borderWidth: space(2),
    gap: space(8),
  },
  card_name: {
    fontFamily: FontFamily.Prompt.normal.medium,
    fontSize: fontSize(28),
    color: COLOR.text,
  },
  card_sub_name: {
    fontFamily: FontFamily.Prompt.normal.medium,
    fontSize: fontSize(16),
    color: COLOR.text,
  },
  card_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card_details: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: space(8),
  },
  card_detail_text: {
    fontFamily: FontFamily.Prompt.normal.medium,
    fontSize: fontSize(16),
    color: COLOR.text,
  },
});
