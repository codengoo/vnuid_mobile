import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from '@src/routes';
import {useEffect} from 'react';
import {BackHandler, Text, View} from 'react-native';

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

  return (
    <View>
      <Text>This is homescreen</Text>
    </View>
  );
}
