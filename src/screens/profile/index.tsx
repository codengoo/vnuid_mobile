import {Icon} from '@src/components';
import {AtMenu} from '@src/components/ui/menu';
import {IMenuSectionProps} from '@src/components/ui/menu/components/menu_section';
import {COLOR, Color, FontFamily, fontSize, space} from '@src/constants';
import {Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const menuSetting: IMenuSectionProps[] = [
  {
    items: [
      {
        title: 'Thiết lập đăng nhập',
        expandable: true,
        icon: Icon.FingerprintIcon,
      },
      {title: 'Đăng nhập', expandable: true, icon: Icon.ScanFaceIcon},
    ],
  },
  {
    items: [{title: 'Đăng xuất', icon: Icon.LoginIcon}],
  },
];

export function ProfileScreen() {
  return (
    <SafeAreaView style={{backgroundColor: Color.yellow100, flex: 1}}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: space(32),
          gap: space(16),
        }}>
        <View
          style={{
            padding: space(2),
            borderColor: Color.green700,
            borderWidth: space(2),
            borderRadius: space(999),
          }}>
          <Image
            source={require('@src/assets/images/avatar_nam.png')}
            style={{borderRadius: space(999), width: 96, height: 96}}
          />
        </View>

        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: fontSize(28),
              fontFamily: FontFamily.Prompt.normal.semiBold,
              color: COLOR.text,
            }}>
            Đỗ Tuấn Nghĩa
          </Text>
          <Text
            style={{
              fontSize: fontSize(16),
              fontFamily: FontFamily.Prompt.normal.semiBold,
              color: COLOR.textSub,
            }}>
            21020365@vnu.edu.vn
          </Text>
          <View
            style={{
              padding: space(4),
              paddingHorizontal: space(12),
              backgroundColor: Color.green300,
              borderRadius: space(99),
              marginTop: space(8),
            }}>
            <Text
              style={{
                fontSize: fontSize(14),
                fontFamily: FontFamily.Prompt.normal.regular,
                color: COLOR.text,
              }}>
              Your profile
            </Text>
          </View>
        </View>
      </View>

      <AtMenu menu={menuSetting} />
    </SafeAreaView>
  );
}
