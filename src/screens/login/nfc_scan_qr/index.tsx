import {Text, View} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';

export function ScanNfcQrScreen() {
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back');

  if (!hasPermission)
    return (
      <View>
        <Text>Not authorized</Text>
      </View>
    );
  if (!device)
    return (
      <View>
        <Text>No device</Text>
      </View>
    );

  const codeScanner = useCodeScanner({
    codeTypes: ['qr'],
    onCodeScanned: codes => {
      console.log(`Scanned ${codes.length} codes!`);
    },
  });

  return (
    <View>
      <Camera device={device} codeScanner={codeScanner} isActive style={{flex: 1}}/>
    </View>
  );
}
