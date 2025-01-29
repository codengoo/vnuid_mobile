import {Button, Image, StatusBar, Text, View} from 'react-native';
import {styles} from './styles';

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.header}>
        <Image
          source={require('@src/assets/images/onboarding_1.png')}
          style={{width: '75%'}}
          resizeMode="contain"
        />
      </View>

      <View>
        <View>
          <Text style={styles.headerText}>Attendance</Text>
          <Text style={styles.bodyText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has
          </Text>
        </View>

        <Button title="login"></Button>
      </View>
    </View>
  );
}
