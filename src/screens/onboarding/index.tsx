import {Icon} from '@src/components';
import {AtButton} from '@src/components/ui/button';
import {COLOR, Space} from '@src/constants';
import {Image, StatusBar, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <SafeAreaView style={styles.header}>
        <Image
          source={require('@src/assets/images/onboarding_1.png')}
          style={{width: '75%'}}
          resizeMode="contain"
        />
      </SafeAreaView>

      <SafeAreaView style={styles.content} edges={["bottom"]}>
        <View>
          <View style={styles.stepWrapper}>
            <View style={styles.dot}></View>
            <Icon.LoginIcon size={Space.sd} stroke={2.5} color={COLOR.text} />
            <Icon.HomeIcon size={Space.sd} stroke={2.5} color={COLOR.text} />
          </View>

          <View style={styles.intro}>
            <Text style={styles.headerText}>Attendance</Text>
            <Text style={styles.bodyText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </Text>
          </View>
        </View>

        <AtButton />
      </SafeAreaView>
    </View>
  );
}
